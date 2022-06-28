import classNames from "classnames"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export interface GovukTextInputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  width?: 30 | 20 | 10 | 5 | 4 | 3 | 2
}

export function GovukTextInput({ className, width, type = "text", ...props }: GovukTextInputProps) {
  const classes = classNames("govuk-input", { [`govuk-input--width-${width}`]: !!width }, className)
  return <input className={classes} type="text" {...props} />
}
