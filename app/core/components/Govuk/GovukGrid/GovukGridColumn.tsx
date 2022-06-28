import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface GovukGridColumnProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  width?: "one-third" | "two-thirds" | "full" | "one-half" | "one-quarter" | "three-quarters"
}

export function GovukGridColumn({
  width = "two-thirds",
  children,
  className,
  ...props
}: GovukGridColumnProps) {
  const classes = classNames(`govuk-grid-column-${width}`, className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
