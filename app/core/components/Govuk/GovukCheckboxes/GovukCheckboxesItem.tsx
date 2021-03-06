import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react"

export interface GovukCheckboxesItemProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export function GovukCheckboxesItem({ children, className, ...props }: GovukCheckboxesItemProps) {
  const classes = classNames("govuk-checkboxes__item", className)
  return (
    <div className={classes}>
      <input type="checkbox" className="govuk-checkboxes__input" {...props} />
      {children}
    </div>
  )
}
