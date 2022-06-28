import {
  GovukErrorMessage,
  GovukHint,
  GovukLabel,
  GovukTextInput,
  GovukTextInputProps,
  GovukFormGroup,
} from "../Govuk"

export interface AppLabeledTextFieldProps extends GovukTextInputProps {
  label: string
  errorMessage?: string
  isHeading?: boolean
  hint?: string
}

export function AppLabeledTextField({
  label,
  hint,
  errorMessage,
  name,
  id,
  isHeading = false,
  ...props
}: AppLabeledTextFieldProps) {
  const computedId = id || name

  return (
    <GovukFormGroup isError={!!errorMessage}>
      <GovukLabel htmlFor={computedId} isHeading={isHeading}>
        {label}
      </GovukLabel>
      {hint && <GovukHint>{hint}</GovukHint>}
      {errorMessage && <GovukErrorMessage>{errorMessage}</GovukErrorMessage>}
      <GovukTextInput id={computedId} {...props} />
    </GovukFormGroup>
  )
}
