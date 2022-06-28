import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface GovukHeadingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: "s" | "m" | "l" | "xl"
}

export function GovukHeading({
  as = "h2",
  size = "m",
  children,
  className,
  ...props
}: GovukHeadingProps) {
  const Component = as
  const classes = classNames(`govuk-heading-${size}`, className)

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
