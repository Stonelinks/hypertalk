import React from "react"
import { TypographyStyle, GoogleFont } from "react-typography"
import Typography from "typography"
import theme from "typography-theme-sutro"

import Styles from "./Styles"

const typography = new Typography({
  ...theme,
  baseFontSize: Styles.vars.fontSize.regular,
  baseLineHeight: Styles.vars.lineHeights.regular,
  blockMarginBottom: 0.5,
  scaleRatio: 1.5
})

const styles = Styles.Create({
  container: {
    backgroundColor: Styles.vars.colors.grey1,
    maxWidth: Styles.vars.pageWidth,
    margin: "0 auto",
    padding: Styles.vars.spacing.large
  }
})

const Page = ({ children }) => {
  return (
    <React.Fragment>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <div style={styles.container}>{children}</div>
    </React.Fragment>
  )
}

export default Page
