function dump_file(ab, name) {
  if (!(ab instanceof Array)) {
    ab = [ab]
  }

  var blob = new Blob(ab)
  download(blob, name)
}

function download(file_or_blob, name) {
  var a = document.createElement("a")
  a["download"] = name
  a.href = window.URL.createObjectURL(file_or_blob)
  a.dataset["downloadurl"] = [
    "application/octet-stream",
    a["download"],
    a.href
  ].join(":")

  if (document.createEvent) {
    var ev = document.createEvent("MouseEvent")
    ev.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    )
    a.dispatchEvent(ev)
  } else {
    a.click()
  }

  window.URL.revokeObjectURL(a.href)
}

emulator.save_state(function(error, result) {
  if (error) {
    console.log(error.stack)
    console.log("Couldn't save state: ", error)
  } else {
    dump_file(result, "v86state.bin")
  }
})
