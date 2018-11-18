import seabios from "./bios/seabios.bin"
import vgabios from "./bios/vgabios.bin"

import staticFiles from "./staticFiles"

import { getURLAsBuffer, isChild, SHOW_SCREEN } from "./utils"

// [:phoneme on][hxae<300,10>piy<300,10> brr<600,12>th<100>dey<600,10> tuw<600,15> yu<1200,14>_<120>][hxae<300,10>piy<300,10> brr<600,12>th<100>dey<600,10> tuw<600,17> yu<1200,15>_<120>][hxae<300,10>piy<300,10>brr<600,22>th<100>dey<600,19>dih<600,15>rdeh<600,14>ktao<600,12>k_<120>_<120>][hxae<300,20>piy<300,20> brr<600,19>th<100>dey<600,15> tuw<600,17> yu<1200,15>]

function _log(method, s = { data: "" }) {
  console.log(`isChild: ${isChild()} ${method} ${s.data}`)
}

let child
function createChild() {
  _log("createChild")
  child = document.createElement("iframe")
  child.src = `${window.location.href}?cachebust=${Date.now()}#child`
  child.width = SHOW_SCREEN ? "1000" : "1"
  child.height = SHOW_SCREEN ? "500" : "1"
  document.querySelector("body").appendChild(child)
}

function destroyChild() {
  _log("destroyChild")
  child.remove()
  child = null
}

// Send a message to the child iframe
function sendMessageToChild(msg) {
  _log("sendMessageToChild", msg)
  child.contentWindow.postMessage(msg, "*")
}

// Listen to message from child window
let bindReceiveMessageFromChild_cb = null
function bindReceiveMessageFromChild(cb) {
  bindReceiveMessageFromChild_cb = function(e) {
    _log("receiveMessageFromChild", e)
    cb(e)
  }
  window.addEventListener("message", bindReceiveMessageFromChild_cb, false)
}

function unbindReceiveMessageFromChild() {
  window.removeEventListener("message", bindReceiveMessageFromChild_cb, false)
}

// Send a message to the parent
function sendMessageToParent(msg) {
  _log("sendMessageToParent", msg)
  window.parent.postMessage(msg, "*")
}

// Listen to messages from parent window
let bindReceiveMessageFromParent_cb = null
function bindReceiveMessageFromParent(cb) {
  bindReceiveMessageFromParent_cb = function(e) {
    _log("receiveMessageFromParent", e)
    cb(e)
  }
  window.addEventListener("message", bindReceiveMessageFromParent_cb, false)
}

function unbindReceiveMessageFromParent() {
  window.removeEventListener("message", bindReceiveMessageFromParent_cb, false)
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

  return new Promise((resolve, reject) => {
    let promises = [getURLAsBuffer(v86StateURL, onXHRProgress)]
    let msg

    if (LOCAL_ASSETS) {
      promises.push(getURLAsBuffer(win98URL))
    }

    Promise.all(promises).then(values => {
      const v86State = values[0]
      const win98 = values[1]

      bindReceiveMessageFromChild(e => {
        switch (e.data) {
          // child has reported its ready, send large assets
          case `child:ready`:
            msg = [`parent:sendAssets`, v86State]
            if (LOCAL_ASSETS) {
              msg.push(win98)
            } else {
              msg.push(null)
            }
            sendMessageToChild(msg)
            break

          // child has reported its booted, tell it to say something
          case `child:booted`:
            msg = [`parent:speak`, whatToSay]
            sendMessageToChild(msg)
            break

          // child done speaking, kill it and exit promise
          case `child:doneSpeaking`:
            unbindReceiveMessageFromChild()
            destroyChild()
            resolve()
            break

          default:
            break
        }
      })

      createChild()
    })
  })
}

export { createEmulatorParent }

function createEmulatorChild(opts = {}) {
  let emulator

  function done() {
    emulator.stop()
    unbindReceiveMessageFromParent()
    sendMessageToParent("child:doneSpeaking")
  }

  bindReceiveMessageFromParent(e => {
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
            sendMessageToParent("child:booted")
          })

          function addErrorHandler(eventName) {
            emulator.add_listener(eventName, () => {
              console.error(`fault detected with "${eventName}" event`)
              emulator.stop()
              sendMessageToParent("child:doneSpeaking")
            })
          }

          addErrorHandler("cpu-event-halt")
        } catch (e) {
          console.error(`fault detected`)
          console.error(e)
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

  sendMessageToParent("child:ready")
}

export { createEmulatorChild }
