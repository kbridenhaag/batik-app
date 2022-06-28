import {
  GovukFieldset,
  GovukLegend,
  GovukFormGroup,
  GovukFormGroupProps,
  GovukHint,
  GovukErrorMessage,
} from "../Govuk"

export interface AppFieldsetProps extends GovukFormGroupProps {
  legend?: string
  isHeading?: boolean
  hint?: string
  legendSize?: "s" | "m" | "l" | "xl"
  errorMessage?: string
}

export function AppFieldset({
  children,
  legend,
  errorMessage,
  legendSize,
  isHeading = false,
  hint,
  ...props
}: AppFieldsetProps) {
  return (
    <GovukFormGroup {...props} isError={!!errorMessage}>
      <GovukFieldset>
        {legend && (
          <GovukLegend size={legendSize} isHeading={isHeading}>
            {legend}
          </GovukLegend>
        )}
        {hint && <GovukHint>{hint}</GovukHint>}
        {errorMessage && <GovukErrorMessage>{errorMessage}</GovukErrorMessage>}
        {children}
      </GovukFieldset>
    </GovukFormGroup>
  )
}
