import React from 'react'
import { storiesOf } from '@storybook/react'
import './style.css'

import Typography from './Typography'
import Colors from './Colors'
import Icons from './Icons'

storiesOf('Atoms', module).add('Colors', () => <Colors />)
storiesOf('Atoms', module).add('Typography', () => <Typography />)
storiesOf('Atoms', module).add('Icons', () => <Icons />)

import '../src/components/SocialButton/stories'
import '../src/components/CountCard/stories'
import '../src/components/SectionCountCard/stories'
import '../src/components/Header/stories'
