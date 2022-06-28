import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface GovukRadiosProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  small?: boolean
}

export function GovukRadios({ children, className, small = false, ...props }: GovukRadiosProps) {
  const classes = classNames("govuk-radios", { "govuk-radios--small": small }, className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
