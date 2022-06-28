import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface GovukSectionBreakProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  visible?: boolean
  size?: "m" | "l" | "xl"
}

export function GovukSectionBreak({
  children,
  size,
  visible = true,
  ...props
}: GovukSectionBreakProps) {
  const classes = classNames("govuk-section-break", {
    "govuk-section-break--visible": !!visible,
    [`govuk-section-break--${size}`]: !!size,
  })
  return <hr {...props} />
}
