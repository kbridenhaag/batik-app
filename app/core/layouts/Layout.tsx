import { Head, BlitzLayout } from "blitz"
import classNames from "classnames"
import { AppHeader, AppFooter } from "../components"

const Layout: BlitzLayout<{
  title?: string
  children?: React.ReactNode
  beforeMain?: () => JSX.Element
  includeMainWrapper?: boolean
}> = ({ title, includeMainWrapper = true, beforeMain, children }) => {
  const mainClasses = classNames({
    "": includeMainWrapper,
  })
  return (
    <>
      <Head>
        <title>{title || "batik-dashboard"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppHeader />

      {beforeMain && beforeMain()}

      <main id="main-content" className={mainClasses}>
        {children}
      </main>

      <AppFooter />
    </>
  )
}

export default Layout
