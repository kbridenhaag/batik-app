import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface GovukErrorSummaryProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string
}

export function GovukErrorSummary({
  children,
  title = "There is a problem",
  className,
  ...props
}: GovukErrorSummaryProps) {
  const classes = classNames("govuk-error-summary", className)
  return (
    <div className={classes} role="alert" {...props}>
      <h2 className="govuk-error-summary__title" id={props["aria-labelledby"]}>
        {title}
      </h2>
      <div className="govuk-error-summary__body">
        <ul className="govuk-list govuk-error-summary__list">{children}</ul>
      </div>
    </div>
  )
}
