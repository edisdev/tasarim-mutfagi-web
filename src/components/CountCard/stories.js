import React from 'react'
import { storiesOf } from '@storybook/react'

import CountCard from './'

import accounts from '../../data/accounts'
const account = accounts[0]

storiesOf('Molecules|Count Card', module).add('Card', () => (
  <CountCard {...account} />
))
