import classNames from "classnames"
import { DetailedHTMLProps, LabelHTMLAttributes } from "react"

export interface GovukLabelProps
  extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  size?: "s" | "m" | "l" | "xl"
  isHeading?: boolean
}

export function GovukLabel({
  children,
  size,
  className,
  isHeading = false,
  ...props
}: GovukLabelProps) {
  const classes = classNames("govuk-label", { [`govuk-label--${size}`]: !!size }, className)
  return isHeading ? (
    <label className={classes} {...props}></label>
  ) : (
    <h1 className="govuk-label-wrapper">
      <label className={classes} {...props}></label>
    </h1>
  )
}
