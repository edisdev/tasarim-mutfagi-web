import { createGlobalStyle } from 'styled-components'
import { media } from 'styled-bootstrap-grid'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${p => p.theme.font.family};
    font-weight: ${p => p.theme.font.weight.regular};
    font-size: ${p => p.theme.font.size.body.mobile};
    background-color: ${p => p.theme.color.brand.dark};
    color: ${p => p.theme.color.brand.white};
  
    ${media.md`
      font-size: ${p => p.theme.font.size.body.desktop};
    `}
  }
  
  input, textarea, select, button {
    font-weight: ${p => p.theme.font.weight.regular};
  }
  
  small {
    font-size: ${p => p.theme.font.size.small.mobile};
  }
  
  h1 {
    font-size: ${p => p.theme.font.size.h1.mobile};
  
     ${media.md`
      font-size: ${p => p.theme.font.size.h1.desktop};
    `}
  }
  
  
  h2 {
    font-size: ${p => p.theme.font.size.h2.mobile};
  }
  
  h3 {
    font-size: ${p => p.theme.font.size.h3.mobile};
  
     ${media.md`
      font-size: ${p => p.theme.font.size.h3.desktop};
    `}
  }
  
  h4 {
    font-size: ${p => p.theme.font.size.h4.mobile};
  
     ${media.md`
      font-size: ${p => p.theme.font.size.h4.desktop};
    `}
  }
  
  h5 {
    font-size: ${p => p.theme.font.size.h5.mobile};
  }
`

export default GlobalStyle
