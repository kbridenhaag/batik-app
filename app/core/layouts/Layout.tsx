import { Head, BlitzLayout } from "blitz"
import { AppHeader, AppFooter } from "../components"

const Layout: BlitzLayout<{
  title?: string
  children?: React.ReactNode
}> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "batik-dashboard"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppHeader />

      {children}

      <AppFooter />
    </>
  )
}

export default Layout
