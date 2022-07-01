import {
  GovukCheckboxesItem,
  GovukCheckboxesItemProps,
  GovukCheckboxesLabel,
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
    <GovukCheckboxesItem id={computedId} {...props}>
      <GovukCheckboxesLabel htmlFor={computedId} size={labelSize}>
        {label}
      </GovukCheckboxesLabel>
      {hint && <GovukRadiosHint>{hint}</GovukRadiosHint>}
    </GovukCheckboxesItem>
  )
}
