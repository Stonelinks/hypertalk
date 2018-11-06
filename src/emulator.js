import seabios from "./bios/seabios.bin"
import vgabios from "./bios/vgabios.bin"

import staticFiles from "./staticFiles"

import { getURLAsBuffer, SHOW_SCREEN } from "./utils"

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

// [:phoneme on][hxae<300,10>piy<300,10> brr<600,12>th<100>dey<600,10> tuw<600,15> yu<1200,14>_<120>][hxae<300,10>piy<300,10> brr<600,12>th<100>dey<600,10> tuw<600,17> yu<1200,15>_<120>][hxae<300,10>piy<300,10>brr<600,22>th<100>dey<600,19>dih<600,15>rdeh<600,14>ktao<600,12>k_<120>_<120>][hxae<300,20>piy<300,20> brr<600,19>th<100>dey<600,15> tuw<600,17> yu<1200,15>]

function createEmulator(opts) {
  const onSerialOutput = opts.onSerialOutput

  return new Promise((resolve, reject) => {
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
      const emulator = new window.V86Starter({
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

      window.emulator = emulator

      emulator.add_listener("emulator-ready", async () => {
        emulator.restore_state(v86State)
        resolve(emulator)
      })

      emulator.add_listener("serial0-output-char", char => {
        onSerialOutput(char)
      })
    })
  })
}

export default createEmulator
