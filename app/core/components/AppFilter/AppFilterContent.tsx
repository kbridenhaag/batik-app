import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface AppFilterContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function AppFilterContent({ className, children, ...props }: AppFilterContentProps) {
  const classes = classNames("app-filter-content", className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
