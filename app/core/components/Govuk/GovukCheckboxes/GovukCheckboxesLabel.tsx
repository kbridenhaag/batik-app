import classNames from "classnames"
import { GovukLabelProps } from "../GovukLabel"

export interface GovukCheckboxesLabelProps extends GovukLabelProps {}

export function GovukCheckboxesLabel({ children, className, ...props }: GovukCheckboxesLabelProps) {
  const classes = classNames("govuk-checkboxes__label", className)
  return (
    <label className={classes} {...props}>
      {children}
    </label>
  )
}
