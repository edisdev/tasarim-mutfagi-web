import React from 'react'
import { storiesOf } from '@storybook/react'

import CountCardList from './list'
import accounts from '../../data/accounts'

const filterCard = accounts.filter(o => o.type === 'count-card')

storiesOf('Organism', module).add('Count Card List', () => (
  <CountCardList data={filterCard} />
))
