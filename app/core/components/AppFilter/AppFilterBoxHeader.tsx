import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { GovukBody, GovukHeading } from "../Govuk"

export interface AppFilterBoxHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onClear?: () => void
  onClose?: () => void
  filterCount?: number
}

export function AppFilterBoxHeader({
  onClear,
  onClose,
  filterCount,
  className,
  children,
  ...props
}: AppFilterBoxHeaderProps) {
  const count = typeof filterCount === "number" ? String(filterCount) : null
  const classes = classNames("app-filter-box__header", className)

  return (
    <>
      <div className="app-filter-box__mobile-header">
        <GovukHeading as="h2" className="govuk-!-margin-bottom-0">
          Filter
        </GovukHeading>
        <GovukBody size="s" className="govuk-!-margin-bottom-0">
          <a
            href=""
            className="app-filter-box__close-button"
            role="button"
            onClick={(e) => {
              e.preventDefault()
              onClose && onClose()
            }}
          >
            Close
          </a>
        </GovukBody>
      </div>
      <div className={classes} {...props}>
        <div className="app-filter-box__header-wrapper">
          <h3 className="app-filter-box__header-heading">Selected filters</h3>

          {filterCount && filterCount > 0 ? (
            <GovukBody size="s" className="govuk-!-margin-bottom-0">
              <a
                href=""
                className="govuk-link--no-visited-state"
                role="button"
                onClick={(e) => {
                  e.preventDefault()
                  onClear && onClear()
                }}
              >
                Clear filters
              </a>
            </GovukBody>
          ) : null}
        </div>
        {count && (
          <GovukBody size="s" className="govuk-!-margin-bottom-2 govuk-!-margin-top-2">
            {count} filters selected
          </GovukBody>
        )}
        {children}
      </div>
    </>
  )
}
