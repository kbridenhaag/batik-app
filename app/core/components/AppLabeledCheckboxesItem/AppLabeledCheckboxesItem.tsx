import {
  GovukCheckboxesItem,
  GovukCheckboxesItemProps,
  GovukRadiosHint,
  GovukRadiosLabel,
} from "../Govuk"

export interface AppLabeledCheckboxesItemProps extends GovukCheckboxesItemProps {
  label: string
  labelSize?: "s" | "m" | "l" | "xl"
  hint?: string
}

export function AppLabeledCheckboxesItem({
  label,
  hint,
  labelSize,
  ...props
}: AppLabeledCheckboxesItemProps) {
  const computedId = props.id || props.name + "-" + props.value

  return (
    <GovukCheckboxesItem {...props}>
      <GovukRadiosLabel htmlFor={computedId} size={labelSize}>
        {label}
      </GovukRadiosLabel>
      {hint && <GovukRadiosHint>{hint}</GovukRadiosHint>}
    </GovukCheckboxesItem>
  )
}
