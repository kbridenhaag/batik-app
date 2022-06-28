import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { GovukWidthContainer } from "../Govuk/GovukWidthContainer"

export interface AppPlainMastheadProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const AppPlainMasthead = ({ children, className, ...props }: AppPlainMastheadProps) => {
  const classes = classNames("app-masthead--plain", className)

  return (
    <header className={classes} {...props}>
      <GovukWidthContainer>{children}</GovukWidthContainer>
    </header>
  )
}

export default AppPlainMasthead
