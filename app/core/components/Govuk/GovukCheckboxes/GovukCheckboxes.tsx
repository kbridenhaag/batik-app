import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface GovukCheckboxesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  small?: boolean
}

export function GovukCheckboxes({
  children,
  className,
  small = false,
  ...props
}: GovukCheckboxesProps) {
  const classes = classNames("govuk-checkboxes", { "govuk-checkboxes--small": small }, className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
