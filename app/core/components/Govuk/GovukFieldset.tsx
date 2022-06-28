import classNames from "classnames"
import { DetailedHTMLProps, FieldsetHTMLAttributes } from "react"

export interface GovukFieldsetProps
  extends DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement> {}

export function GovukFieldset({ children, className, ...props }: GovukFieldsetProps) {
  const classes = classNames("govuk-fieldset", className)
  return (
    <fieldset className={classes} {...props}>
      {children}
    </fieldset>
  )
}
