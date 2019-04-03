import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /*
    GLOBAL
  */

  html {
    font-family: ${p => p.theme.font.family};
    font-weight: ${p => p.theme.font.weight.light};
    font-size: ${p => p.theme.font.size.normal + 'px'};
    background-color: ${p => p.theme.color.brand.dark};
    color: ${p => p.theme.color.brand.white};
  }
`

export default GlobalStyle
