import React from 'react'
import { storiesOf } from '@storybook/react'

import SocialButton from './'
import Icon from '../Icon'

import accounts from '../../data/accounts'
const account = accounts.find(o => o.type === 'social-card')

storiesOf('Molecules', module).add('Social Button', () => (
  <SocialButton {...account}>
    <Icon name={account.name} />
  </SocialButton>
))
