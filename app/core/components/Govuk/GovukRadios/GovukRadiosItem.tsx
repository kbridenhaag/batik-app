import classNames from "classnames"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export interface GovukRadiosItemProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export function GovukRadiosItem({ className, children, ...props }: GovukRadiosItemProps) {
  const classes = classNames("govuk-radios__item", className)
  return (
    <div className={classes}>
      <input type="radios" className="govuk-radios__input" {...props} />
      {children}
    </div>
  )
}
