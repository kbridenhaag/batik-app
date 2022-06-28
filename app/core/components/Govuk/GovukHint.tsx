import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface GovukHintProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "m" | "l" | "xl"
}

export function GovukHint({ children, className, size, ...props }: GovukHintProps) {
  const classes = classNames("govuk-label", { [`govuk-label--${size}`]: !!size }, className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
