import React from 'react'
import { storiesOf } from '@storybook/react'

import CardCount from './'

import accounts from '../../../data/accounts'
const account = accounts.find(o => o.type === 'count-card')

storiesOf('Molecules', module).add('Count Card', () => (
  <div className="Space">
    <CardCount {...account} />
  </div>
))
