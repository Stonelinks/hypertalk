import React from "react"

import Styles from "./Styles"

const styles = Styles.Create({
  button: {
    border: "none",
    textAlign: "center",
    backgroundColor: Styles.vars.colors.grey0,
    cursor: "pointer",
    padding: `${Styles.vars.spacing.xs} ${Styles.vars.spacing.small}`,
    color: Styles.vars.colors.black
  },
  menuContainer: {
    marginTop: Styles.vars.spacing.small,
    textAlign: "right"
  }
})

const Button = props => {
  const { style, children } = props

  const actualStyle = {
    ...styles.button,
    ...style
  }

  return (
    <button {...props} style={actualStyle}>
      {children}
    </button>
  )
}

export default Button

const ButtonMenu = props => {
  const { style, children } = props
  const buttons = React.Children.toArray(children).filter(child => child)

  const actualStyle = {
    ...styles.menuContainer,
    ...style
  }

  return (
    <div {...props} style={actualStyle}>
      {buttons.map((button, index) =>
        React.cloneElement(button, {
          style: { marginLeft: Styles.vars.spacing.regular }
        })
      )}
    </div>
  )
}

export { ButtonMenu }
