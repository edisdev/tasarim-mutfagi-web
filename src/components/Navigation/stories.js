import React from 'react'
import { storiesOf } from '@storybook/react'

import Navigation from './'
import navigation from '../../data/navigation'

storiesOf('Molecules', module).add('Navigation', () => (
  <div className="Space">
    <Navigation data={navigation} />
  </div>
))
