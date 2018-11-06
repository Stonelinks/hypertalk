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

const users = {}
const chatHistory = []
const chatHistoryLimit = 10

io.on("connection", function(socket) {
  console.log("a user connected")
  users[socket.id] = socket

  socket.on("chat history", function(msg) {
    socket.emit("chat history", JSON.stringify(chatHistory))
  })

  socket.on("chat message", function(msg) {
    console.log("a user sent a message: ", msg)
    socket.broadcast.emit("chat message", msg)
    chatHistory.push(JSON.parse(msg))
    if (chatHistory.length > chatHistoryLimit) {
      chatHistory.shift()
    }
  })

  socket.on("disconnect", function() {
    delete users[socket.id]
  })
})

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
  console.log("press ctrl+c to quit")
})
