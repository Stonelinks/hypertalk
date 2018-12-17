import seabios from "./bios/seabios.bin"
import vgabios from "./bios/vgabios.bin"

import staticFiles from "./staticFiles"

import {
  getURLAsBuffer,
  isChild,
  SHOW_SCREEN,
  getNewChildID,
  getChildIDFromURL
} from "./utils"

function _log() {
  let s = `${isChild() ? `child${getChildIDFromURL()}` : "parent"}: `

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i]
    if (typeof arg === "string") {
      s += ` ${arg}`
    } else if (arg.data) {
      s += ` ${JSON.stringify(arg.data, null, 2)}`
    } else {
      s += ` ${arg}`
    }
  }
  console.log(s)
}

const children = {}

function createChild(id) {
  _log("createChild", id)
  const child = document.createElement("iframe")
  child.src = `${window.location.href}?cachebust=${Date.now()}#childID=${id}`
  child.width = SHOW_SCREEN ? "1000" : "1"
  child.height = SHOW_SCREEN ? "500" : "1"
  document.querySelector("body").appendChild(child)
  children[id] = child
}

function destroyChild(id) {
  _log("destroyChild", id)
  children[id].remove()
  children[id] = null
  delete children[id]
}

// send a message to the child iframe
function sendMessageToChild(id, msg) {
  _log("sendMessageToChild", id, msg)
  const child = children[id]
  child.contentWindow.postMessage(msg, "*")
}

// listen to message from child window
const childListeners = {}
function bindReceiveMessageFromChild(id, cb) {
  childListeners[id] = function(e) {
    _log("receiveMessageFromChild", id, e)
    cb(e)
  }

  window.addEventListener("message", childListeners[id], false)
}

function unbindReceiveMessageFromChild(id) {
  window.removeEventListener("message", childListeners[id], false)
  delete childListeners[id]
}

// send a message to the parent
function sendMessageToParent(msg) {
  _log("sendMessageToParent", msg)
  window.parent.postMessage(msg)
}

// listen to messages from parent window
let parentListener = null
function onReceiveMessageFromParent(cb) {
  parentListener = function(e) {
    _log("receiveMessageFromParent", e)
    cb(e)
  }
  window.addEventListener("message", parentListener, false)
}

function unbindReceiveMessageFromParent() {
  window.removeEventListener("message", parentListener, false)
}

const MB = 1024 * 1024

const win98Filename = "windows98.img"
const v86StateFilename = "v86state.bin"

let win98URL = staticFiles[win98Filename]
let v86StateURL = staticFiles[v86StateFilename]
const LOCAL_ASSETS = process.env.REACT_APP_USE_LOCAL_ASSETS === "true"
if (LOCAL_ASSETS) {
  win98URL = `${
    process.env.REACT_APP_CHATSERVER_ENDPOINT
  }/static/${win98Filename}`
  v86StateURL = `${
    process.env.REACT_APP_CHATSERVER_ENDPOINT
  }/static/${v86StateFilename}`
}

function createEmulatorParent(opts = {}) {
  const onXHRProgress = opts.onXHRProgress
  const whatToSay = opts.whatToSay
  const childID = getNewChildID()

  return new Promise((resolve, reject) => {
    let promises = [getURLAsBuffer(v86StateURL, onXHRProgress)]
    let msg

    if (LOCAL_ASSETS) {
      promises.push(getURLAsBuffer(win98URL))
    }

    Promise.all(promises).then(values => {
      const v86State = values[0]
      const win98 = values[1]

      bindReceiveMessageFromChild(childID, e => {
        switch (e.data) {
          // child has reported its ready, send large assets
          case `child:${childID}:ready`:
            msg = [`parent:sendAssets`, v86State]
            if (LOCAL_ASSETS) {
              msg.push(win98)
            } else {
              msg.push(null)
            }
            sendMessageToChild(childID, msg)
            break

          // child has reported its booted, tell it to say something
          case `child:${childID}:booted`:
            msg = [`parent:speak`, whatToSay]
            sendMessageToChild(childID, msg)
            break

          // child done speaking, kill it and exit promise
          case `child:${childID}:doneSpeaking`:
            unbindReceiveMessageFromChild(childID)
            destroyChild(childID)
            resolve()
            break

          default:
            break
        }
      })

      createChild(childID)
    })
  })
}

export { createEmulatorParent }

function createEmulatorChild(opts = {}) {
  const childID = getChildIDFromURL()
  let emulator

  function done() {
    emulator.stop()
    unbindReceiveMessageFromParent()
    sendMessageToParent(`child:${childID}:doneSpeaking`)
  }

  onReceiveMessageFromParent(e => {
    switch (e.data[0]) {
      // child should create emulator with assets that were sent
      case `parent:sendAssets`:
        const v86State = e.data[1]
        const win98 = e.data[2]

        const hda = LOCAL_ASSETS
          ? { buffer: win98 }
          : { url: win98URL, async: true, size: 300 * MB }

        try {
          emulator = new window.V86Starter({
            screen_container: SHOW_SCREEN
              ? document.getElementById("screen_container")
              : null,
            bios: { url: seabios },
            vga_bios: { url: vgabios },
            hda,
            autostart: true,
            memory_size: 128 * MB,
            vga_memory_size: 8 * MB,
            disable_mouse: true,
            disable_keyboard: true
          })

          emulator.add_listener("emulator-ready", async () => {
            emulator.restore_state(v86State)
            sendMessageToParent(`child:${childID}:booted`)
          })

          function addErrorHandler(eventName) {
            emulator.add_listener(eventName, () => {
              _log(`fault detected with "${eventName}" event`)
              done()
            })
          }

          addErrorHandler("cpu-event-halt")
        } catch (e) {
          _log(`fault detected`)
          _log(e)
          done()
        }
        break

      // instruct the emulator to speak
      case `parent:speak`:
        const whatToSay = e.data[1]
        let serialOutput = ""
        emulator.add_listener("serial0-output-char", char => {
          serialOutput += char
          if (serialOutput.indexOf("ready") !== -1) {
            done()
          }
        })
        emulator.serial0_send(whatToSay)
        break

      default:
        break
    }
  })

  sendMessageToParent(`child:${childID}:ready`)
}

export { createEmulatorChild }
