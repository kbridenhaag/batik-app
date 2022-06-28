import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface AppMastheadBodyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export function AppMastheadBody({ children, className, ...props }: AppMastheadBodyProps) {
  const classes = classNames("app-masthead__body", className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
