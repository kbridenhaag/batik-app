import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface GovukBodyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: "s" | "m" | "l"
}

export function GovukBody({ className, children, size = "m", ...props }: GovukBodyProps) {
  const classes = classNames(
    { "govuk-body": size === "m", [`govuk-body-${size}`]: size !== "m" },
    className
  )

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}
