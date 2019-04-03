import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// import { Button, Welcome } from '@storybook/react/demo'

import { H1 } from '../src/style/Head'

storiesOf('Typography', module).add('h1', () => (
  <H1>Tasarımı Tasarımcıların Konuştuğu Oluşum</H1>
))

/*storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))*/

/*storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))*/
