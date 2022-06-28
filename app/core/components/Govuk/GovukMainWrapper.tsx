import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface GovukMainWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  autoSpacing?: boolean
}

export function GovukMainWrapper({
  children,
  autoSpacing = true,
  id = "main-content",
  className,
  ...props
}: GovukMainWrapperProps) {
  const classes = classNames(
    "govuk-main-wrapper",
    { "govuk-main-wrapper--auto-spacing": autoSpacing },
    className
  )

  return (
    <main id={id} className={classes} {...props}>
      {children}
    </main>
  )
}
