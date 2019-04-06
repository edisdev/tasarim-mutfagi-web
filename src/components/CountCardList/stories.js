import React from 'react'
import { storiesOf } from '@storybook/react'

import CountCardList from './list'
import accounts from '../../data/accounts'

storiesOf('Organism', module).add('Count Card List', () => (
  <CountCardList data={accounts} />
))
