import { Link, RouteUrlObject } from "blitz"
import classNames from "classnames"
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react"

export interface GovukBackLinkProps
  extends Omit<
    DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    "href"
  > {
  href: string | RouteUrlObject
}

export function GovukBackLink({
  children = "Back",
  href,
  className,
  ...props
}: GovukBackLinkProps) {
  const classes = classNames("govuk-back-link", className)

  return (
    <Link href={href} passHref>
      <a className={classes} {...props}>
        {children}
      </a>
    </Link>
  )
}
