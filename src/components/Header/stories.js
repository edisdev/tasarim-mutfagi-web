import React from 'react'
import { storiesOf } from '@storybook/react'

import HeaderView from './index'

storiesOf('Molecules|Header', module).add('Header', () => (
  <HeaderView siteTitle="Hey" />
))
