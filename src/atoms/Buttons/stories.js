import React from 'react';
import { storiesOf } from '@storybook/react';

function Buttons() {
  return (
    <div className="BtnList">
      <button className="Btn Btn-ghost-white">Bize Yazın</button>
      <button className="Btn Btn-ghost-primary">Detaylari Görüntüle</button>
      <button className="Btn Btn-primary">Topluluğa Katıl</button>
    </div>
  );
}

storiesOf('Atoms', module).add('Buttons', () => (
  <div className="Space">
    <Buttons />
  </div>
));
