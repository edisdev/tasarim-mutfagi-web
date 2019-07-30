import React from 'react';
import { storiesOf } from '@storybook/react';

function Colors() {
  return (
    <div className="ColorList">
      <div className="Color --primary">primary</div>
      <div className="Color --dark">dark</div>
      <div className="Color --hide">hide</div>
      <div className="Color --gray">gray</div>
      <div className="Color --white">white</div>
      <div className="Color --alert">alert</div>
    </div>
  );
}

storiesOf('Atoms', module).add('Colors', () => (
  <div className="Space">
    <Colors />
  </div>
));
