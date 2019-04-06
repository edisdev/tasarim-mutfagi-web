import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Atoms', module).add('Input', () => (
  <div className="Space">
    <input className="Txt" type="text" />
  </div>
))
