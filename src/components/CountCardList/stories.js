import React from 'react'
import { storiesOf } from '@storybook/react'

import CountCardList from './list'
import accounts from '../../data/accounts'

storiesOf('Molecules|Count Card List', module).add('Card', () => (
  <CountCardList data={accounts} />
))
