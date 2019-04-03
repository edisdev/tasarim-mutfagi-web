import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'style/globalStyle'
import theme from 'style/theme'

import Header from 'components/header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
        </>
      </ThemeProvider>
    )}
  />
)

export default Layout
