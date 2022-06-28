import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface MojSubNavigationListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}

export interface MojSubNavigationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ul?: MojSubNavigationListProps
}

export function MojSubNavigation({
  children,
  "aria-label": ariaLabel = "Sub navigation",
  className,
  ...props
}: MojSubNavigationProps) {
  const navClasses = classNames("moj-sub-navigation", className)

  const ulClasses = classNames("moj-sub-navigation__list", props.ul?.className)

  return (
    <nav className={navClasses} aria-label={ariaLabel} {...props}>
      <ul className={ulClasses} {...props.ul}>
        {children}
      </ul>
    </nav>
  )
}
