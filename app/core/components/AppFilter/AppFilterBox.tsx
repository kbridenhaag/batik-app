import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface AppFilterBoxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isCollapsed?: boolean
}

export function AppFilterBox({
  className,
  children,
  isCollapsed = true,
  ...props
}: AppFilterBoxProps) {
  const classes = classNames(
    "app-filter-box",
    { "app-filter-box--is-collapsed": isCollapsed },
    className
  )
  return (
    <div className={classes} tabIndex={-1} {...props}>
      {children}
    </div>
  )
}
