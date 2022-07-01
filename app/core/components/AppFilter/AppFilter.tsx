import { DetailedHTMLProps, HTMLAttributes } from "react"
import classNames from "classnames"

export interface AppFilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  visuallyHiddenHeading?: string
}

export function AppFilter({
  children,
  className,
  visuallyHiddenHeading = "Filter",
  ...props
}: AppFilterProps) {
  const classes = classNames("app-filter", className)

  return (
    <>
      <h2 className="app-filter__visually-hidden-heading">{visuallyHiddenHeading}</h2>
      <div className={classes} {...props}>
        {children}
      </div>
    </>
  )
}
