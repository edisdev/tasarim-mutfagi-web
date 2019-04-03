import { Link } from 'gatsby'
import React from 'react'

import Container from 'style/Container'

const Header = ({ siteTitle }) => (
  <Container>
    <Link to="/">{siteTitle}</Link>
  </Container>
)

export default Header
