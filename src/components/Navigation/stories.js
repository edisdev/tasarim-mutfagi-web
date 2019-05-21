import React from 'react'
import { storiesOf } from '@storybook/react'

import Navigation from './'
import navigation from '../../../data/navigation'

storiesOf('Molecules', module)
  .add('Navigation Desktop', () => (
    <div className="Space">
      <Navigation data={navigation} />
    </div>
  ))
  .add('Navigation Mobile', () => (
    <div className="Space">
      <Navigation data={navigation} isMobile={true} />
    </div>
  ))
