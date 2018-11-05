import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import seabios from "./bios/seabios.bin";
import vgabios from "./bios/vgabios.bin";

import windows from "./images/windows98.img";
import v86stateURL from "./images/v86state.bin";

// [:phoneme on][hxae<300,10>piy<300,10> brr<600,12>th<100>dey<600,10> tuw<600,15> yu<1200,14>_<120>][hxae<300,10>piy<300,10> brr<600,12>th<100>dey<600,10> tuw<600,17> yu<1200,15>_<120>][hxae<300,10>piy<300,10>brr<600,22>th<100>dey<600,19>dih<600,15>rdeh<600,14>ktao<600,12>k_<120>_<120>][hxae<300,20>piy<300,20> brr<600,19>th<100>dey<600,15> tuw<600,17> yu<1200,15>]

const FONT_SIZE = 14;
const WELCOME_MESSAGE = "harder daddy";
const SHOW_SCREEN = false;

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
};

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      whatToSay: WELCOME_MESSAGE,
      busy: true,
      serialOutput: ""
    };

    this.say = this.say.bind(this);
    window.say = this.say;

    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  async say(string) {
    if (!this.state.busy) {
      this.setState({ busy: true, serialOutput: "" });

      this.emulator.serial0_send(`${string}213p`);

      while (true) {

        await timeout(2000)
        const {serialOutput} = this.state

        if (serialOutput.indexOf('ready') !== -1) {
          this.setState({
            busy: false
          });
          return
        }
      }
    }
  }

  componentDidMount() {
    const MB = 1024 * 1024;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", v86stateURL, true);
    xhr.responseType = "arraybuffer";
    xhr.addEventListener(
      "load",
      () => {
        if (xhr.status === 200) {
          const v86StateArrayBuffer = xhr.response;

          this.emulator = new window.V86Starter({
            screen_container: SHOW_SCREEN
              ? document.getElementById("screen_container")
              : null,
            bios: { url: seabios },
            vga_bios: { url: vgabios },
            hda: { url: windows },
            autostart: true,
            memory_size: 128 * MB,
            vga_memory_size: 8 * MB,
            disable_mouse: true,
            disable_keyboard: true
          });

          window.emulator = this.emulator;

          this.emulator.add_listener("emulator-ready", async () => {
            this.emulator.restore_state(v86StateArrayBuffer);
            await timeout(1000);
            this.setState({busy: false})
            await this.say(WELCOME_MESSAGE, true);
          });

          this.emulator.add_listener("serial0-output-char", char => {
            let { serialOutput } = this.state;
            serialOutput += char;
            this.setState({
              serialOutput
            });
          });
        }
      },
      false
    );
    xhr.send();
  }

  onChange(e) {
    this.setState({
      whatToSay: e.target.value
    });
  }

  onKeyPress(e) {
    if (e.key === "Enter") {
      this.say(this.state.whatToSay);
    }
  }

  render() {
    const { busy, whatToSay } = this.state;

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
    );
  }
}

export default App;
