import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  BtnWhiteGhost,
  BtnPrimaryGhost,
  BtnPrimaryFill
} from '../src/style/Button'
import Color from '../src/style/Color'
import theme from '../src/style/theme'
import CountCard from '../src/components/CountCard'

storiesOf('Atoms|Typography', module)
  .add('Head 1', () => <h1>Tasarımı Tasarımcıların Konuştuğu Oluşum</h1>)
  .add('Head 2', () => <h2>Neden Katılmalıyım?</h2>)
  .add('Head 3', () => <h3>YouTube’da Bizi Takip Etmeyi Unutma</h3>)
  .add('Head 4', () => <h4>Tasarımı Tasarımcıların Konuştuğu Oluşum</h4>)
  .add('Head 5', () => <h5>Bültenlerden ve Gelişmelerden Haberdar Ol</h5>)
  .add('Paragraph', () => (
    <p>
      Nerede kalmıştık? Bundan 1 sene önce topluluğumuzu senle oluşturmaya
      başladığımızda işte tam da bunu hayal ediyorduk, senin sayende kocaman bir
      topluluk olmayı.
    </p>
  ))
  .add('Small', () => (
    <small>
      Successful businesses have many things in common, today we’ll look at the
      big ‘R’of recognition and how a digital advertising network may help.
    </small>
  ))

storiesOf('Atoms|Colors', module).add('Colors', () => (
  <div style={{ display: 'flex' }}>
    <Color color="primary">{theme.color.brand.primary}</Color>
    <Color color="dark">{theme.color.brand.dark}</Color>
    <Color color="gray">{theme.color.brand.gray}</Color>
    <Color color="white" style={{ color: theme.color.brand.dark }}>
      {theme.color.brand.white}
    </Color>
  </div>
))

storiesOf('Molecules|Count Card', module)
  .add('Card', () => <CountCard count={123} type="twitter" label="Twitter" />)
  .add('Card List', () => (
    <div>
      <CountCard count={123} label="Twitter" />
      <CountCard count={53} label="Youtube" />
    </div>
  ))

storiesOf('Atoms|Buttons', module)
  .add('White Ghost', () => <BtnWhiteGhost>Bize Yaz</BtnWhiteGhost>)
  .add('Primary Ghost', () => <BtnPrimaryGhost>Bilet Al</BtnPrimaryGhost>)
  .add('Primary Fill', () => <BtnPrimaryFill>Topluluğa Katıl</BtnPrimaryFill>)
