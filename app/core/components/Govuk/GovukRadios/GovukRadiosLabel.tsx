import classNames from "classnames"
import { GovukLabel, GovukLabelProps } from "../GovukLabel"

export interface GovukRadiosLabelProps extends GovukLabelProps {}

export function GovukRadiosLabel({ children, className, ...props }: GovukRadiosLabelProps) {
  const classes = classNames("govuk-radios__label", className)
  return (
    <GovukLabel className={classes} {...props}>
      {children}
    </GovukLabel>
  )
}
