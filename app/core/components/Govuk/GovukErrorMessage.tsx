import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface GovukErrorMessageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  screenReaderPrefix?: string
}

export function GovukErrorMessage({
  children,
  className,
  screenReaderPrefix = "Error:",
  ...props
}: GovukErrorMessageProps) {
  const classes = classNames("govuk-error-message", className)
  return (
    <p className={classes} {...props}>
      {screenReaderPrefix && <span className="govuk-visually-hidden">{screenReaderPrefix}</span>}
      {children}
    </p>
  )
}
