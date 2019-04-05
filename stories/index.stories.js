import React from 'react'
import { storiesOf } from '@storybook/react'

import '../src/components/CountCard/stories'
import '../src/components/CountCardList/stories'
import '../src/components/Header/stories'

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
    <div className="color --primary">primary</div>
    <div className="color --dark">dark</div>
    <div className="color --gray">gray</div>
    <div className="color --white">white</div>
  </div>
))

// storiesOf('Atoms|Buttons', module)
//   .add('White Ghost', () => <BtnWhiteGhost>Bize Yaz</BtnWhiteGhost>)
//   .add('Primary Ghost', () => <BtnPrimaryGhost>Bilet Al</BtnPrimaryGhost>)
//   .add('Primary Fill', () => <BtnPrimaryFill>Topluluğa Katıl</BtnPrimaryFill>)
