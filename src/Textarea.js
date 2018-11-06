import React from "react"
import TextareaAutosize from "react-autosize-textarea"

import Styles, { pageWidth } from "./Styles"

const styles = Styles.Create({
  root: {
    width: `100%`,
    font: `${Styles.vars.spacing.regular} monospace`,
    color: Styles.vars.colors.black
  },
  disabled: {
    backgroundColor: Styles.vars.colors.orange
  }
})

const Textarea = props => {
  const { style, children, disabled } = props

  const actualStyle = {
    ...styles.root,
    ...style,
    ...(disabled ? styles.disabled : {})
  }

  return (
    <TextareaAutosize {...props} style={actualStyle}>
      {children}
    </TextareaAutosize>
  )
}

Textarea.defaultProps = {
  disabled: false
}

export default Textarea
