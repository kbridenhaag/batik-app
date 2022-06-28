import classNames from "classnames"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface AppMastheadProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export function AppMasthead({ children, className, ...props }: AppMastheadProps) {
  const classes = classNames("app-masthead", className)

  return (
    <header className={classes} {...props}>
      <>
        {children}
        <svg
          className="app-masthead__shape-1"
          viewBox="0 0 678 354"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 354C32.0402 198.715 134.399 69.1272 272.314 0H677.861L677.861 354H0Z"
            fill="url(#paint0_linear_601_3972)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_601_3972"
              x1="336.236"
              y1="458"
              x2="336.236"
              y2="-54"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0D559E" stopOpacity="0.93" />
              <stop offset="1" stopColor="#1F77D1" stopOpacity="0.58" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="app-masthead__shape-2"
          viewBox="0 0 250 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 115H249.207C227.925 48.3028 165.452 0 91.6974 0H0V115Z"
            fill="url(#paint0_linear_603_3980)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_603_3980"
              x1="-10"
              y1="0"
              x2="-10"
              y2="165.303"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0D4194" stopOpacity="0" />
              <stop offset="1" stopColor="#0D4194" />
            </linearGradient>
          </defs>
        </svg>
      </>
    </header>
  )
}
