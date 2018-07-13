import React, { Component } from "react";
import _ from "underscore";
import logo from "./logo.svg";
import "./App.css";

import { V86Starter } from "v86/build/libv86";

import seabios from "./bios/seabios.bin";
import vgabios from "./bios/vgabios.bin";

import freedos from "./images/freedos722.img";
// import msdos from "./images/msdos.img";

const SCREEN_WIDTH = 80;
const SCREEN_HEIGHT = 25;
const SCREEN = new Uint8Array(SCREEN_WIDTH * SCREEN_HEIGHT);

function screen_to_text() {
  let s = "";
  for (var i = 0; i < SCREEN_HEIGHT; i++) {
    s += line_to_text(i) + "\n";
  }
  return s;
}

function line_to_text(y) {
  return bytearray_to_string(get_line(y));
}

function get_line(y) {
  return SCREEN.subarray(y * SCREEN_WIDTH, (y + 1) * SCREEN_WIDTH);
}

function bytearray_to_string(arr) {
  return String.fromCharCode.apply(String, arr);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: "",
      booted: false
    };

    this.sendCommand = this.sendCommand.bind(this);
    window.sendCommand = this.sendCommand;

    this.updateScreen = _.debounce(this.updateScreen.bind(this), 100);
  }

  sendCommand(string) {
    string.split("").forEach(c => {
      this.emulator.keyboard_adapter.simulate_char(c);
    });
    this.emulator.keyboard_adapter.simulate_press(13);
  }

  updateScreen() {
    this.setState({ screen: screen_to_text() });
    const { screen, booted } = this.state;
    if (!booted && screen.trim().endsWith("A:\\>")) {
      this.setState({ booted: true });
      this.sendCommand("dir");
    }
  }

  componentDidMount() {
    this.emulator = new V86Starter({
      // screen_container: document.getElementById("screen_container"),
      bios: { url: seabios },
      vga_bios: { url: vgabios },
      fda: { url: freedos },
      // cdrom: { url: msdos },
      autostart: true,
      // memory_size: 256 * MB,
      // vga_memory_size: 10 * MB,
      boot_order: 0,
      disable_mouse: true,
      disable_keyboard: false
    });

    this.emulator.add_listener("screen-put-char", chr => {
      var y = chr[0];
      var x = chr[1];
      var code = chr[2];
      SCREEN[x + SCREEN_WIDTH * y] = code;
      this.updateScreen();
    });
  }

  render() {
    const { screen, booted } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to hypertalk</h1>
        </header>

        <pre>{booted ? "Ready" : "Please wait, loading..."}</pre>
        <hr />
        <pre>{screen}</pre>
      </div>
    );
  }
}

export default App;
