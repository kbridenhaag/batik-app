import classNames from "classnames"
import { GovukHint, GovukHintProps } from "../GovukHint"

export interface GovukRadiosHintProps extends GovukHintProps {}

export function GovukRadiosHint({ children, className, ...props }: GovukRadiosHintProps) {
  const classes = classNames("govuk-radios__hint")
  return (
    <GovukHint className={classes} {...props}>
      {children}
    </GovukHint>
  )
}
