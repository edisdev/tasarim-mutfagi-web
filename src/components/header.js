import { Link } from 'gatsby'
import React from 'react'

import Container from 'style/Container'
import styled from 'styled-components'

const Header = styled.header`
  padding: 4em;
  background-color: #333;
`

const HeaderView = ({ siteTitle }) => (
  <Container>
    <Header>
      <Link to="/">{siteTitle}</Link>
    </Header>
  </Container>
)

export default HeaderView
