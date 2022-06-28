import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export interface GovukWidthContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function GovukWidthContainer({ children, className, ...props }: GovukWidthContainerProps) {
  const classes = classNames("govuk-width-container", className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
