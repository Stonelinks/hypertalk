import React, { Component } from "react"

import io from "socket.io-client"

import Page from "./Page"
import Nav from "./Nav"
import Textarea from "./Textarea"

import {
  timeout,
  SHOW_SCREEN,
  getUserName,
  getUserVoice,
  getWelcomeMessage
} from "./utils"

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
  },
  chatHistory: {
    // backgroundColor: Styles.vars.colors.white
  },
  chatHistoryItem: {
    marginTop: Styles.vars.spacing.medium
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
      voice: getUserVoice(true),
      chatHistory: []
    }

    this.broadcast = this.broadcast.bind(this)
    this.utterance = this.utterance.bind(this)

    this.onResetName = this.onResetName.bind(this)
    this.onResetVoice = this.onResetVoice.bind(this)

    this.onChangeWhatToSay = this.onChangeWhatToSay.bind(this)
    this.onMaybeSubmitWhatToSay = this.onMaybeSubmitWhatToSay.bind(this)
    this.onUpdateChatHistory = this.onUpdateChatHistory.bind(this)
  }

  onUpdateChatHistory(name, whatToSay) {
    let { chatHistory } = this.state
    chatHistory = [{ name, whatToSay }].concat(chatHistory)

    this.setState({
      chatHistory
    })
  }

  broadcast() {
    const { voice, name, whatToSay } = this.state

    this.utterance(voice, whatToSay, true)
    this.onUpdateChatHistory(name, whatToSay)
    socket.emit(
      "chat message",
      JSON.stringify({
        name,
        whatToSay,
        voice
      })
    )
  }

  async utterance(voice, whatToSay, self) {
    if (!this.state.busy) {
      this.setState({
        busy: true
      })

      if (self) {
        this.setState({
          serialOutput: "",
          whatToSay: "say something..."
        })
      }

      const sayText = `[:phoneme on]${voice}${whatToSay}213p`

      this.emulator.serial0_send(sayText)

      while (true) {
        await timeout(1000)
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

    await timeout(1000)
    this.setState({ busy: false })
    await this.broadcast(WELCOME_MESSAGE, true)

    socket.on("chat message", msg => {
      const { name, whatToSay, voice } = JSON.parse(msg)
      this.onUpdateChatHistory(name, whatToSay)
      this.utterance(voice, whatToSay, false)
    })
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

  onChangeWhatToSay(e) {
    this.setState({
      whatToSay: e.target.value
    })
  }

  onMaybeSubmitWhatToSay(e) {
    if (e.key === "Enter") {
      this.broadcast(this.state.whatToSay)
    }
  }

  render() {
    const { busy, whatToSay, name, voice, chatHistory } = this.state

    return (
      <Page>
        <Nav
          items={[
            { children: `name: ${name}`, onClick: this.onResetName },
            { children: `voice: ${voice}`, onClick: this.onResetVoice }
          ]}
        />

        {!busy && (
          <Textarea
            value={whatToSay}
            disabled={busy}
            onChange={this.onChangeWhatToSay}
            onKeyPress={this.onMaybeSubmitWhatToSay}
          />
        )}

        <pre>{busy ? "Please wait, loading..." : "Ready!"}</pre>

        <div style={styles.chatHistory}>
          {chatHistory.map(({ name, whatToSay }) => {
            const msg = `${name}: ${whatToSay}`
            return (
              <Textarea
                style={styles.chatHistoryItem}
                key={msg}
                value={msg}
                disabled={true}
              />
            )
          })}
        </div>

        {SHOW_SCREEN && (
          <div>
            <div id="screen_container">
              <div style={styles.screen} />
              <canvas style={{ display: "none" }} />
            </div>
          </div>
        )}
      </Page>
    )
  }
}

export default App
