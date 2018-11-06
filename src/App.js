import React, { Component } from "react"

import io from "socket.io-client"

import Page from "./Page"
import Nav from "./Nav"
import Textarea from "./Textarea"

import { timeout, SHOW_SCREEN, getUserName, getUserVoice, getWelcomeMessage } from "./utils"

import createEmulator from "./emulator"
import Styles from "./Styles"

const socket = io(process.env.REACT_APP_CHATSERVER_ENDPOINT, {
  transports: ["polling"]
})

const WELCOME_MESSAGE = getWelcomeMessage()

const styles = Styles.Create({
  screen: {
    whiteSpace: "pre",
    font: `${Styles.vars.spacing.medium} monospace`,
    lineHeight: Styles.vars.spacing.medium
  }
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      whatToSay: WELCOME_MESSAGE,
      busy: true,
      serialOutput: "",
      name: getUserName(),
      voice: getUserVoice(true)
    }

    this.say = this.say.bind(this)

    this.onResetName = this.onResetName.bind(this)
    this.onResetVoice = this.onResetVoice.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  async say(string) {
    const { voice } = this.state
    if (!this.state.busy) {
      this.setState({ busy: true, serialOutput: "" })
      const sayText = `[:phoneme on]${voice}${string}213p`
      console.log(sayText)
      this.emulator.serial0_send(sayText)

      while (true) {
        await timeout(500)
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
    this.emulator = await createEmulator({
      onSerialOutput: char => {
        let { serialOutput } = this.state
        serialOutput += char
        this.setState({ serialOutput })
      }
    })

    window.emulator = this.emulator

    await timeout(1000)
    this.setState({ busy: false })
    await this.say(WELCOME_MESSAGE, true)
  }

  onResetName() {
    delete window.localStorage.name
    this.setState({
      name: getUserName()
    })
  }

  onResetVoice() {
    delete window.localStorage.voice
    this.setState({
      voice: getUserVoice()
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
    const { busy, whatToSay, name, voice } = this.state

    return (
      <Page>
        <div>
          <Nav
            items={[
              { children: `name: ${name}`, onClick: this.onResetName },
              { children: `voice: ${voice}`, onClick: this.onResetVoice }
            ]}
          />

          <Textarea
            value={whatToSay}
            disabled={busy}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />

          <pre>{busy ? "Please wait, loading..." : "Say something"}</pre>

          {SHOW_SCREEN && (
            <div>
              <div id="screen_container">
                <div style={styles.screen} />
                <canvas style={{ display: "none" }} />
              </div>
            </div>
          )}
        </div>
      </Page>
    )
  }
}

export default App
