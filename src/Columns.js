import React from "react"
import PropTypes from "prop-types"

import Styles from "./Styles"

const containerBaseStyle = {
  display: "flex"
}

const columnBaseStyle = {
  textAlign: "left",
  padding: `0 ${Styles.vars.spacing.regular.raw / 2}px`
}

const equalStyle = {
  flex: 1
}

const firstStyle = {
  textAlign: "left",
  paddingLeft: 0
}

const lastStyle = {
  textAlign: "right",
  paddingRight: 0
}

const singleStyle = {
  paddingLeft: 0,
  paddingRight: 0,
  textAlign: "center"
}

export const Column = ({
  children,
  first,
  last,
  equalWidth,
  centered,
  style
}) => {
  const colStyle = Styles.Create({
    ...columnBaseStyle,
    ...(first ? firstStyle : {}),
    ...(last ? lastStyle : {}),
    ...((first && last) || centered ? singleStyle : {}),
    ...(first && last ? singleStyle : {}),
    ...(equalWidth ? equalStyle : {}),
    ...(style || {})
  })

  return <div style={colStyle}>{children}</div>
}

Column.propTypes = {
  first: PropTypes.bool,
  last: PropTypes.bool,
  centered: PropTypes.bool,
  equalWidth: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node
}

Column.defaultProps = {
  centered: false,
  equalWidth: true
}

export const Columns = ({ children, alignColumns }) => {
  const columns = React.Children.toArray(children).filter(child => child)
  const childCount = columns.length
  const style = Styles.Create({
    ...containerBaseStyle,
    alignItems: alignColumns
  })

  return (
    <div style={style}>
      {columns.map((column, index) =>
        React.cloneElement(column, {
          first: index === 0,
          last: index === childCount - 1
        })
      )}
    </div>
  )
}

Columns.propTypes = {
  alignColumns: PropTypes.string,
  children: PropTypes.node.isRequired
}
