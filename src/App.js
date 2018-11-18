import React, { Component } from "react"

import MSWordContainer from "mswordcontainer"
import io from "socket.io-client"

import Nav from "./Nav"
import Textarea from "./Textarea"

import { createEmulatorParent } from "./emulator"

import { timeout, getUserName, getUserVoice, getWelcomeMessage } from "./utils"

import Styles from "./Styles"

const socket = io(process.env.REACT_APP_CHATSERVER_ENDPOINT, {
  transports: ["polling"]
})

const WELCOME_MESSAGE = getWelcomeMessage()

const styles = Styles.Create({
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
      whatToSay: "",
      blockTextEditing: true,
      busy: true,
      busyText: "Please wait...",
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

    this.createEmulator = this.createEmulator.bind(this)
    this.stopEmulator = this.stopEmulator.bind(this)
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
          blockTextEditing: true,
          whatToSay: ""
        })
      }

      const finalWhatToSay = `[:phoneme on]${voice}${whatToSay}213p`
      await this.createEmulator(finalWhatToSay)

      this.setState({
        busy: false,
        busyText: "Type something to say it..."
      })
      if (self) {
        this.setState({ blockTextEditing: false })
      }
    }
  }

  async createEmulator(whatToSay) {
    await createEmulatorParent({
      whatToSay,
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
      },
      onEmulatorFault: () => {
        this.setState({
          busy: false,
          blockTextEditing: false,
          busyText: "Type something to say it..."
        })
      }
    })
  }

  stopEmulator() {
    this.emulator.stop()
    delete this.emulator
  }

  async componentDidMount() {
    socket.on("chat history", msg => {
      const history = JSON.parse(msg)

      history.forEach(({ name, whatToSay }) => {
        this.onUpdateChatHistory(name, whatToSay)
      })
    })
    socket.emit("chat history")

    socket.on("chat message", msg => {
      const { name, whatToSay, voice } = JSON.parse(msg)
      this.onUpdateChatHistory(name, whatToSay)
      this.utterance(voice, whatToSay, false)
    })

    await timeout(1000)
    this.setState({ busy: false, whatToSay: WELCOME_MESSAGE })
    await this.broadcast()
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
    const {
      blockTextEditing,
      busyText,
      whatToSay,
      name,
      voice,
      chatHistory
    } = this.state

    return (
      <MSWordContainer title={"hypertalk.doc"}>
        <Nav
          items={[
            { children: `name: ${name}`, onClick: this.onResetName },
            { children: `voice: ${voice}`, onClick: this.onResetVoice }
          ]}
        />

        <Textarea
          _autoFocus
          placeholder={busyText}
          value={whatToSay}
          disabled={blockTextEditing}
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
      </MSWordContainer>
    )
  }
}

export default App
