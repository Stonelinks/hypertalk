import React, { Component } from "react"

import { Columns, Column } from "./Columns"
import Button, { ButtonMenu } from "./Button"

import Styles from "./Styles"
import logo from "./logo.svg"

const styles = Styles.Create({
  img: {
    height: "80px",
    width: "auto"
  },
  root: {
    marginBottom: Styles.vars.spacing.regular
  }
})

class Nav extends Component {
  render() {
    const { items } = this.props
    return (
      <div style={styles.root}>
        <Columns>
          <Column>
            <img style={styles.img} src={logo} alt="logo" />
          </Column>
          <Column style={{ flex: 3 }}>
            <ButtonMenu>
              {items.map((itemProps, i) => {
                return <Button key={i} {...itemProps} />
              })}
            </ButtonMenu>
          </Column>
        </Columns>
      </div>
    )
  }
}

Nav.defaultProps = {
  items: []
}

export default Nav
