import { Link, RouteUrlObject } from "blitz"
import classNames from "classnames"
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

export type GovukButtonProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  start?: boolean
  color?: "secondary" | "warning"
  href: string | RouteUrlObject
} & ComponentPropsWithoutRef<T>

export function GovukButton<T extends ElementType = "button">({
  children,
  color,
  className,
  start = false,
  as,
  href,
  ...props
}: GovukButtonProps<T>) {
  const classes = classNames("govuk-button", {
    [`govuk-button--${color}`]: !!color,
    "govuk-button--start": start,
  })
  const Component = as || "button"
  if (Component === "a") {
    return (
      <Link href={href} passHref>
        <a className={classes} {...props}></a>
      </Link>
    )
  } else {
    return (
      <Component className={classes} {...props}>
        {children}
      </Component>
    )
  }
}
