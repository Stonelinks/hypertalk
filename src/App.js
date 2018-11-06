import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import io from "socket.io-client"

import seabios from "./bios/seabios.bin"
import vgabios from "./bios/vgabios.bin"

import staticFiles from "./staticFiles"

const socket = io(process.env.REACT_APP_CHATSERVER_ENDPOINT, {
  transports: ["polling"]
});

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

// [:phoneme on][hxae<300,10>piy<300,10> brr<600,12>th<100>dey<600,10> tuw<600,15> yu<1200,14>_<120>][hxae<300,10>piy<300,10> brr<600,12>th<100>dey<600,10> tuw<600,17> yu<1200,15>_<120>][hxae<300,10>piy<300,10>brr<600,22>th<100>dey<600,19>dih<600,15>rdeh<600,14>ktao<600,12>k_<120>_<120>][hxae<300,20>piy<300,20> brr<600,19>th<100>dey<600,15> tuw<600,17> yu<1200,15>]

const FONT_SIZE = 14
// https://steamcommunity.com/sharedfiles/filedetails/?id=128648903
// const WELCOME_MESSAGE = "harder daddy";
const WELCOME_MESSAGE =
  "welcome to [_<1,30>]hypurtalk! [:nk]i need help oh god please"
const SHOW_SCREEN = false

function getURLAsBuffer(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.responseType = "arraybuffer"
    xhr.addEventListener(
      "load",
      () => {
        if (xhr.status === 200) {
          resolve(xhr.response)
        } else {
          reject()
        }
      },
      false
    )
    xhr.send()
  })
}

const styles = {
  screen: {
    whiteSpace: "pre",
    font: `${FONT_SIZE}px monospace`,
    lineHeight: `${FONT_SIZE}px`
  },
  input: {
    marginTop: "10px",
    textAlign: "center",
    whiteSpace: "pre",
    font: `${FONT_SIZE}px monospace`,
    lineHeight: `${FONT_SIZE}px`
  }
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      whatToSay: WELCOME_MESSAGE,
      busy: true,
      serialOutput: ""
    }

    this.say = this.say.bind(this)
    window.say = this.say

    this.onChange = this.onChange.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  async say(string) {
    if (!this.state.busy) {
      this.setState({ busy: true, serialOutput: "" })
      const sayText = `[:phoneme on]${string}213p`
      console.log(sayText)
      this.emulator.serial0_send(sayText)

      while (true) {
        await timeout(2000)
        const { serialOutput } = this.state
        if (serialOutput.indexOf("ready") !== -1) {
          this.setState({
            busy: false
          })
          return
        }
      }
    }
  }

  async componentDidMount() {
    const MB = 1024 * 1024

    let promises = [getURLAsBuffer(v86StateURL)]

    if (LOCAL_ASSETS) {
      promises.push(getURLAsBuffer(win98URL))
    }

    Promise.all(promises).then(values => {
      const v86State = values[0]
      const win98 = values[1]

      const hda = LOCAL_ASSETS
        ? { buffer: win98 }
        : { url: win98URL, async: true, size: 300 * MB }
      this.emulator = new window.V86Starter({
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

      window.emulator = this.emulator

      this.emulator.add_listener("emulator-ready", async () => {
        this.emulator.restore_state(v86State)
        await timeout(1000)
        this.setState({ busy: false })
        await this.say(WELCOME_MESSAGE, true)
      })

      this.emulator.add_listener("serial0-output-char", char => {
        let { serialOutput } = this.state
        serialOutput += char
        this.setState({ serialOutput })
      })
    })
  }

  onChange(e) {
    this.setState({
      whatToSay: e.target.value
    })
  }

  onKeyPress(e) {
    if (e.key === "Enter") {
      this.say(this.state.whatToSay)
    }
  }

  render() {
    const { busy, whatToSay } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to hypertalk</h1>
        </header>

        <textarea
          value={whatToSay}
          style={styles.input}
          disabled={busy}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          cols={80}
          rows={10}
        />

        <pre>{busy ? "Please wait..." : "Ready"}</pre>

        {SHOW_SCREEN && (
          <div>
            <div id="screen_container">
              <div style={styles.screen} />
              <canvas style={{ display: "none" }} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
