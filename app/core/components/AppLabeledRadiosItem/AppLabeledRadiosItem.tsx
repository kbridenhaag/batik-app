import { GovukRadiosHint, GovukRadiosItem, GovukRadiosItemProps, GovukRadiosLabel } from "../Govuk"

export interface AppLabeledRadiosItemProps extends GovukRadiosItemProps {
  label: string
  labelSize?: "s" | "m" | "l" | "xl"
  hint?: string
}

export function AppLabeledRadiosItem({
  label,
  hint,
  labelSize,
  ...props
}: AppLabeledRadiosItemProps) {
  const computedId = props.id || props.name + "-" + props.value

  return (
    <GovukRadiosItem {...props}>
      <GovukRadiosLabel htmlFor={computedId} size={labelSize}>
        {label}
      </GovukRadiosLabel>
      {hint && <GovukRadiosHint>{hint}</GovukRadiosHint>}
    </GovukRadiosItem>
  )
}
