import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface AppFilterBoxBodyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function AppFilterBoxBody({ children, className, ...props }: AppFilterBoxBodyProps) {
  const classes = classNames("app-filter-box__body", className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
