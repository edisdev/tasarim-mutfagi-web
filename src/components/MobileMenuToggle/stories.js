import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import ToggleButton from '.';

class Toggle extends Component {
  state = {
    isActive: false,
  }

  onToggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    const { isActive } = this.state;
    return (
      <ToggleButton onToggle={this.onToggle} isActive={isActive} />
    );
  }
}

storiesOf('Molecules', module).add('Mobile Toggle Button', () => <Toggle />);
