import * as serviceWorker from "./serviceWorker"

let cache = {}

function getURLAsBuffer(url, onProgress = function() {}) {
  return new Promise((resolve, reject) => {
    if (cache[url]) {
      resolve(cache[url])
      return
    }
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.responseType = "arraybuffer"
    xhr.addEventListener(
      "load",
      () => {
        if (xhr.status === 200) {
          cache[url] = xhr.response
          resolve(xhr.response)

          // register service worker after loading large asset?
          serviceWorker.register()
        } else {
          reject()
        }
      },
      false
    )
    xhr.addEventListener("progress", onProgress)
    xhr.send()
  })
}

export { getURLAsBuffer }

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export { timeout }

// export const SHOW_SCREEN = true
export const SHOW_SCREEN = false

function chooseRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

export { chooseRandom }

function getUserName() {
  const randomName = chooseRandom([
    "Moon unit",
    "Ravioli",
    "Anthoni",
    "Mookie",
    "Diesel",
    "Ulysses",
    "Jose",
    "‎Lasernut",
    "‎Martha",
    "‎Big boy",
    "‎Baby girl",
    "‎McNugget",
    "Frederico",
    "Sloan",
    "Miller",
    "Gordon",
    "Lafayette",
    "Jethro",
    "Naomi",
    "‎Towelette",
    "Demitri",
    "‎Lopez",
    "‎Sullivan",
    "‎Satchmo",
    "Armando",
    "Tiberius",
    "Phoebe",
    "Titan",
    "Janus",
    "Callisto",
    "Puck",
    "Belinda",
    "Bianca",
    "Dugan",
    "Kiplet",
    "Gomez",
    "Kermit",
    "Cedric",
    "Solomon",
    "‎Eustace",
    "‎Zero",
    "Flash",
    "Tonto",
    "Lazarus",
    "Forbes",
    "Skippy",
    "Ripto",
    "Sierra",
    "Gilligan",
    "Seymour",
    "Mordechai",
    "Vincent",
    "Stacia",
    "Poot",
    "Janet",
    "Penelope"
  ])

  const name = window.localStorage.name
    ? window.localStorage.name
    : window.prompt("whats ur name?", randomName)
  window.localStorage.name = name
  return name
}

export { getUserName }

// https://steamcommunity.com/sharedfiles/filedetails/?id=128648903
function getUserVoice(noPrompt = false) {
  const randomVoice = chooseRandom([
    "[:nb]",
    "[:nh]",
    "[:nk]",
    "[:nf]",
    "[:nd]",
    "[:dv ap 10]",
    "[:dv ap 200]",
    "[:dv hs 1]",
    "[:dv pr 1]",
    "[:dv gv 100]",
    "[:nb][:dv pr 1][:dv br 200][:dv gv 40][:dv hs 50][:rate 30]"
  ])

  const voice = window.localStorage.voice
    ? window.localStorage.voice
    : noPrompt
      ? randomVoice
      : window.prompt("whats ur voice?", randomVoice)
  window.localStorage.voice = voice
  return voice
}

export { getUserVoice }

function getWelcomeMessage(noPrompt = false) {
  return chooseRandom([
    "How are you gentlemen?",
    "happy birthday",
    "Sure why not",
    "Listen",
    "Lets circle back on that",
    "Who cares",
    "Are you f’realz",
    "Welcome to my world",
    "I have thoughts on that",
    "Uh",
    "Last time for everything",
    "Need you to get real aware",
    "there's no there there",
    "Show me the data",
    "bulbous",
    "Who fuks"
  ])
}

export { getWelcomeMessage }

function isChild() {
  return window.location.href.indexOf("child") !== -1
}

export { isChild }
