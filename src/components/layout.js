import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { ThemeProvider } from 'styled-components'
import ResetStyle from 'style/resetStyle'
import GlobalStyle from 'style/globalStyle'
import theme from 'style/theme'

import { GridThemeProvider } from 'styled-bootstrap-grid'

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
        <GridThemeProvider gridTheme={theme}>
          <>
            <ResetStyle />
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    )}
  />
)

export default Layout
