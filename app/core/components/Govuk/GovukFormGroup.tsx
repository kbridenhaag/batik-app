import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface GovukFormGroupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isError?: boolean
}

export function GovukFormGroup({ children, isError, className, ...props }: GovukFormGroupProps) {
  const classes = classNames("govuk-form-group", { "govuk-form-group--error": isError }, className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
