import React from 'react'
import { storiesOf } from '@storybook/react'

import SocialButton from './index'
import Icon from '../../components/Icon'

import accounts from '../../../data/accounts'
const account = accounts.find(o => o.type === 'social-card')

storiesOf('Molecules', module).add('Social Button', () => (
  <div className="Space">
    <SocialButton {...account}>
      <Icon name={account.name} />
    </SocialButton>
  </div>
))
