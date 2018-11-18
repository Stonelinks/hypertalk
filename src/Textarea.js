import React, { Component } from "react"
import TextareaAutosize from "react-autosize-textarea"

import Styles from "./Styles"

const styles = Styles.Create({
  root: {
    border: "none",
    width: `100%`,
    font: `${Styles.vars.spacing.regular} monospace`,
    color: Styles.vars.colors.black
  },
  disabled: {
    backgroundColor: Styles.vars.colors.orange
  }
})

class Textarea extends Component {
  constructor(props) {
    super(props)

    this.focus = this.focus.bind(this)
  }

  componentDidMount() {
    this.focus()
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.disabled && this.props.disabled) {
      setTimeout(this.focus, 500)
    }
  }

  focus() {
    const { _autoFocus } = this.props
    console.log(`focus textarea-autofocus`)

    if (_autoFocus) {
      const nodeList = window.document.querySelectorAll(`.textarea-autofocus`)
      if (nodeList.length) {
        nodeList[0].focus()
        nodeList[0].select()
        nodeList[0].click()
      }
    }
  }

  render() {
    const { style, children, disabled } = this.props

    const actualStyle = {
      ...styles.root,
      ...style,
      ...(disabled ? styles.disabled : {})
    }

    return (
      <TextareaAutosize
        className={`textarea-autofocus`}
        {...this.props}
        style={actualStyle}
      >
        {children}
      </TextareaAutosize>
    )
  }
}

Textarea.defaultProps = {
  disabled: false,
  _autoFocus: false
}

export default Textarea
