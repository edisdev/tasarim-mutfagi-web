import React from 'react';

import Left from './svg/Left';
import Right from './svg/Right';
import Menu from './svg/Menu';
import Close from './svg/Close';
import Facebook from './svg/Facebook';
import Youtube from './svg/Youtube';
import Twitter from './svg/Twitter';
import Medium from './svg/Medium';
import Instagram from './svg/Instagram';
import Meetup from './svg/Meetup';

function Icon({ name }) {
  switch (name) {
    case 'left':
      return <Left />;
    case 'right':
      return <Right />;
    case 'facebook':
      return <Facebook />;
    case 'youtube':
      return <Youtube />;
    case 'twitter':
      return <Twitter />;
    case 'medium':
      return <Medium />;
    case 'instagram':
      return <Instagram />;
    case 'meetup':
      return <Meetup />;
    case 'menu':
      return <Menu />;
    case 'close':
      return <Close />;
    default:
      return <></>;
  }
}

export default Icon;
