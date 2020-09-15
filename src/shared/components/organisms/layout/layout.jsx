import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "../../molecules/footer/footer"
import Header from "../../molecules/header/header"
import "./layout.scss"
import NavMenu from "../../atoms/nav-menu/nav-menu"


const Layout = props => {
  const { children, activeMenu } = props

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <NavMenu activeMenu={activeMenu} />
        <main className="f-main-container">{children}</main>
        <Footer />
      </div>
    </>
  )
}
export default Layout
