import React, { Component } from "react"

import { SHOW_SCREEN } from "./utils"

import { createEmulatorChild } from "./emulator"

import Styles from "./Styles"

const styles = Styles.Create({
  screen: {
    whiteSpace: "pre",
    font: `${Styles.vars.spacing.medium} monospace`,
    lineHeight: Styles.vars.spacing.medium
  }
})

class Child extends Component {
  componentDidMount() {
    createEmulatorChild()
  }

  render() {
    return (
      <div>
        {SHOW_SCREEN && (
          <div>
            <div id="screen_container">
              <div style={styles.screen} />
              <canvas style={{ display: "none" }} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Child
