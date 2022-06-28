import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface GovukGridRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function GovukGridRow({ children, className, ...props }: GovukGridRowProps) {
  const classes = classNames("govuk-grid-row", className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
