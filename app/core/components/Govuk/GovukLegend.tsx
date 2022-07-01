import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface GovukLegendProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement> {
  size?: "s" | "m" | "l" | "xl"
  isHeading?: boolean
}

export function GovukLegend({
  children,
  className,
  size,
  isHeading = false,
  ...props
}: GovukLegendProps) {
  const classes = classNames(
    "govuk-fieldset__legend",
    { [`govuk-fieldset__legend--${size}`]: !!size },
    className
  )
  return isHeading ? (
    <legend className={classes} {...props}>
      <h1 className="govuk-fieldset__heading">{children}</h1>
    </legend>
  ) : (
    <legend className={classes} {...props}>
      {children}
    </legend>
  )
}
