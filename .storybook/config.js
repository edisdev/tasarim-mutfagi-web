import React from 'react'
import { addParameters, addDecorator, configure } from '@storybook/react'
import { create } from '@storybook/theming'

import { ThemeProvider } from 'styled-components'
import ResetStyle from '../src/style/resetStyle'
import GlobalStyle from '../src/style/globalStyle'
import ThemeStyle from '../src/style/theme'

function Layout(storyFn) {
  return (
    <ThemeProvider theme={ThemeStyle}>
      <>
        <ResetStyle />
        <GlobalStyle />
        {storyFn()}
      </>
    </ThemeProvider>
  )
}

addDecorator(Layout)

const theme = create({
  // brandTitle: 'My custom storybook',
  // brandUrl: 'https://tm19.com',
  // brandImage: 'https://placehold.it/350x150',
})

addParameters({
  options: {
    theme
  }
})

const req = require.context('../stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
