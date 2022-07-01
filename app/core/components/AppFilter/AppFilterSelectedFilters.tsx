import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface AppFilterSelectedFiltersProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label: string
  active?: {
    key: string
    label: string
    onClick: () => void
  }[]
}

export function AppFilterSelectedFilters({
  children,
  className,
  label,
  active,
  ...props
}: AppFilterSelectedFiltersProps) {
  const classes = classNames("app-filter-selected-filters", className)
  return active && active.length > 0 ? (
    <div className={classes} {...props}>
      <h3 className="app-filter__selected-filters-header">{label}</h3>
      <ul className="app-filter__selected-filters-list">
        {active.map((selected) => (
          <li key={`selected-${selected}`} className="app-filter__selected-filter-item">
            <button onClick={selected.onClick} className="app-filter__selected-filter-button">
              {selected.label}
            </button>
          </li>
        ))}
      </ul>
      {children}
    </div>
  ) : null
}
