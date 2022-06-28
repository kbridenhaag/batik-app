import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface AppMastheadWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export function AppMastheadWrapper({ children, className, ...props }: AppMastheadWrapperProps) {
  const classes = classNames("app-masthead__wrapper", className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
