import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Child from "./Child"

import { isChild } from "./utils"

if (!isChild()) {
  ReactDOM.render(<App />, document.getElementById("root"))
} else {
  ReactDOM.render(<Child />, document.getElementById("root"))
}
