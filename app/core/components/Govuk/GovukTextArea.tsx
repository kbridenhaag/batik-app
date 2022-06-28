import classNames from "classnames"
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react"

export interface GovukTextAreaProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

export function GovukTextArea({ children, className, ...props }) {
  const classes = classNames("govuk-textarea", className)
  return (
    <textarea className={classes} {...props}>
      {children}
    </textarea>
  )
}
