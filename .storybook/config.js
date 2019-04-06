import React from 'react'
import { addParameters, addDecorator, configure } from '@storybook/react'
import { create } from '@storybook/theming'
import { withA11y } from '@storybook/addon-a11y'

import '../src/styles/app.css'
import './style.css'

// function Layout(storyFn) {
//   return <div style={{ padding: '30px' }}>{storyFn()}</div>
// }

// addDecorator(Layout)
addDecorator(withA11y)

const theme = create({
  // brandTitle: 'My custom storybook',
  // brandUrl: 'https://tm19.com',
  // brandImage: 'https://placehold.it/350x150',
})

addParameters({
  viewport: {
    viewports: {
      Desktop: {
        name: 'Desktop',
        styles: {
          width: '1200px',
          height: '800px'
        }
      }
    }
  },
  options: {
    theme
  }
})

// https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
}
global.__PATH_PREFIX__ = ''
window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}

configure(function() {
  require('./stories')
}, module)
