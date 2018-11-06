import React, { Component } from "react"

import io from "socket.io-client"

import Page from "./Page"
import Nav from "./Nav"
import Textarea from "./Textarea"

import * as serviceWorker from "./serviceWorker"

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
      busyText: "Please wait...",
      serialOutput: "",
      name: getUserName(),
      voice: getUserVoice(true),
      chatHistory: []
    }

    this.broadcast = this.broadcast.bind(this)
    window.say = this.broadcast
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
        busy: true,
        busyText: "Please wait, text to speech processing"
      })

      if (self) {
        this.setState({
          serialOutput: "",
          whatToSay: ""
        })
      }

      const sayText = `[:phoneme on]${voice}${whatToSay}213p`

      this.emulator.serial0_send(sayText)

      while (true) {
        await timeout(1000)
        const { serialOutput } = this.state
        if (serialOutput.indexOf("ready") !== -1) {
          this.setState({
            busy: false,
            busyText: "Type something to say it..."
          })
          return
        }
      }
    }
  }

  async componentDidMount() {
    socket.on("chat history", msg => {
      const history = JSON.parse(msg)

      history.forEach(({ name, whatToSay }) => {
        this.onUpdateChatHistory(name, whatToSay)
      })
    })
    socket.emit("chat history")
    this.emulator = await createEmulator({
      onSerialOutput: char => {
        let { serialOutput } = this.state
        serialOutput += char
        this.setState({ serialOutput })
      },
      onXHRProgress: e => {
        if (e.lengthComputable) {
          const percentComplete = e.loaded / e.total * 100
          this.setState({
            busyText: `Please wait... ${parseInt(
              percentComplete,
              10
            )}% loaded. Oh make sure ur sound is on.\nThis doesn't really work on mobile yet (at least not on my phone).`
          })
        }
      }
    })

    // register service worker after emulator loads
    serviceWorker.register()

    await timeout(1000)
    this.setState({
      busy: false
    })
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
    const { busy, busyText, whatToSay, name, voice, chatHistory } = this.state

    return (
      <Page>
        <Nav
          items={[
            { children: `name: ${name}`, onClick: this.onResetName },
            { children: `voice: ${voice}`, onClick: this.onResetVoice }
          ]}
        />

        <Textarea
          placeholder={busyText}
          value={whatToSay}
          disabled={busy}
          onChange={this.onChangeWhatToSay}
          onKeyPress={this.onMaybeSubmitWhatToSay}
        />

        <div style={styles.chatHistory}>
          {chatHistory.map(({ name, whatToSay }, i) => {
            const msg = `${name}: ${whatToSay}`
            return (
              <Textarea
                style={styles.chatHistoryItem}
                key={`${i}-${msg}`}
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
