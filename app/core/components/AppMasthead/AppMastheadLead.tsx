import { GovukBodyProps, GovukBody } from "../Govuk"

export interface AppMastheadLeadProps extends GovukBodyProps {}

export function AppMastheadLead({ children, ...props }: GovukBodyProps) {
  return (
    <GovukBody size="l" {...props}>
      {children}
    </GovukBody>
  )
}
