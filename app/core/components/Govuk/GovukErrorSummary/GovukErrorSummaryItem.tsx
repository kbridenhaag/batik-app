import { DetailedHTMLProps, LiHTMLAttributes } from "react"

export interface GovukErrorSummaryItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  path: string
}

export function GovukErrorSummaryItem({ children, path, ...props }: GovukErrorSummaryItemProps) {
  const href = `#${path}`

  return (
    <li {...props}>
      <a href={href}>{children}</a>
    </li>
  )
}
