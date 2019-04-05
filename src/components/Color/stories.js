import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Atoms|Colors', module).add('Colors', () => (
  <div style={{ display: 'flex' }}>
    <div className="color --primary">primary</div>
    <div className="color --dark">dark</div>
    <div className="color --hide">hide</div>
    <div className="color --gray">gray</div>
    <div className="color --white">white</div>
    <div className="color --alert">alert</div>
  </div>
))
