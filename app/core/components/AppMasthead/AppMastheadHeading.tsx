import { GovukHeading, GovukHeadingProps } from "../Govuk"

export interface AppMastheadHeadingProps extends Omit<GovukHeadingProps, "as"> {}

export function AppMastheadHeading({ children, ...props }) {
  return (
    <GovukHeading as="h1" size="xl" {...props}>
      {children}
    </GovukHeading>
  )
}
