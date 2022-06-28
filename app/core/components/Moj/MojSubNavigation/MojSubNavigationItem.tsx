import { Link, RouteUrlObject } from "blitz"
import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes, LiHTMLAttributes } from "react"

export interface MojSubNavigationItemProps
  extends Omit<DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "aria-current"> {
  href: string | RouteUrlObject
  a?: Omit<DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "href">
  current?: boolean
}

export function MojSubNavigationItem({
  children,
  className,
  href,
  current,
  ...props
}: MojSubNavigationItemProps) {
  const liClasses = classNames(
    "moj-sub-navigation__item",
    { "moj-sub-navigation__item--current": current },
    className
  )
  const aClasses = classNames("moj-sub-navigation__link", props.a?.className)

  return (
    <li className={liClasses} {...props}>
      <Link href={href} passHref>
        <a className={aClasses} aria-current={current && "page"} {...props.a}>
          {children}
        </a>
      </Link>
    </li>
  )
}
