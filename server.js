const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

const http = require("http").Server(app)
const io = require("socket.io")(http, { origins: "*:*" })

const PORT = parseInt(process.env.PORT, 10) || 9002

if (process.env.REACT_APP_USE_LOCAL_ASSETS === "true") {
  app.use("/static", express.static("static"))
}

app.get("/", (req, res) => {
  res
    .status(200)
    .send("hello")
    .end()
})

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
})

io.on("connection", function(socket) {
  console.log("a user connected")
})

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
  console.log("press ctrl+c to quit")
})
