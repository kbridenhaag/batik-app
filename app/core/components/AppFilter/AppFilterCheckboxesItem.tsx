import {
  AppLabeledCheckboxesItem,
  AppLabeledCheckboxesItemProps,
} from "../AppLabeledCheckboxesItem"
import { GovukBody, GovukCheckboxes, GovukFieldset, GovukFormGroup, GovukLegend } from "../Govuk"

export interface AppFilterCheckboxesProps {
  legend: string
  checkedCount?: number
  items?: AppLabeledCheckboxesItemProps[]
}

export function AppFilterCheckboxes({ legend, items, checkedCount }: AppFilterCheckboxesProps) {
  const count = typeof checkedCount === "number" ? String(checkedCount) : null

  return (
    <GovukFormGroup>
      <GovukFieldset>
        <GovukLegend size="s">{legend}</GovukLegend>
        {count ? (
          <GovukBody size="s" className="govuk-!-margin-bottom-2">
            {checkedCount} filters selected
          </GovukBody>
        ) : null}
        <GovukCheckboxes small>
          {items?.map((item) => (
            <AppLabeledCheckboxesItem
              key={`filter-option-${item.id || item.name + "-" + item.value}`}
              {...item}
            />
          ))}
        </GovukCheckboxes>
      </GovukFieldset>
    </GovukFormGroup>
  )
}
