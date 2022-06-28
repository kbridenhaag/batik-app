import classNames from "classnames"
import { GovukHint, GovukHintProps } from "../GovukHint"

export interface GovukCheckboxesHintProps extends GovukHintProps {}

export function GovukCheckboxesHint({ children, className, ...props }: GovukCheckboxesHintProps) {
  const classes = classNames("govuk-checkboxes__hint", className)
  return (
    <GovukHint className={classes} {...props}>
      {children}
    </GovukHint>
  )
}
