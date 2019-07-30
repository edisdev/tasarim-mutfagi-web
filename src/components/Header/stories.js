import React from 'react';
import { storiesOf } from '@storybook/react';

import Content from './content';
import navigation from '../../data/navigation';

storiesOf('Organism', module).add('Header', () => <Content data={navigation} />);
