import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '../../components/Icon'

function Icons() {
  return (
    <div className="IconList">
      <Icon name="left" />
      <Icon name="right" />
      <Icon name="facebook" />
      <Icon name="twitter" />
      <Icon name="youtube" />
      <Icon name="meetup" />
      <Icon name="instagram" />
      <Icon name="medium" />
    </div>
  )
}

storiesOf('Atoms', module).add('Icons', () => (
  <div className="Space">
    <Icons />
  </div>
))
