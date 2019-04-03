import { createGlobalStyle } from 'styled-components'
import { up } from 'styled-breakpoints'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${p => p.theme.font.family};
    font-weight: ${p => p.theme.font.weight.regular};
    font-size: ${p => p.theme.font.size.body.mobile}px;
    background-color: ${p => p.theme.color.brand.dark};
    color: ${p => p.theme.color.brand.white};
  
    ${up('desktop')} {
      font-size: ${p => p.theme.font.size.body.desktop}px;
    }
  }
  
  small {
    font-size: ${p => p.theme.font.size.small.mobile}px;
  }
  
  h1 {
    font-size: ${p => p.theme.font.size.h1.mobile}px;
  
    ${up('desktop')} {
      font-size: ${p => p.theme.font.size.h1.desktop}px;
    }
  }
  
  
  h2 {
    font-size: ${p => p.theme.font.size.h2.mobile}px;
  }
  
  h3 {
    font-size: ${p => p.theme.font.size.h3.mobile}px;
  
    ${up('desktop')} {
      font-size: ${p => p.theme.font.size.h3.desktop}px;
    }
  }
  
  h4 {
    font-size: ${p => p.theme.font.size.h4.mobile}px;
  
    ${up('desktop')} {
      font-size: ${p => p.theme.font.size.h4.desktop}px;
    }
  }
  
  h5 {
    font-size: ${p => p.theme.font.size.h5.mobile}px;
  }
`

export default GlobalStyle
