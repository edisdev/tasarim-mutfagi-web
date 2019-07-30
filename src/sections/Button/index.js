import React from 'react';
import c from 'classnames';

import './style.css';

function SocialButton({ name, url, children }) {
  return (
    <a
      className={c('BtnIcon', 'SocialButton', `--${name}`)}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default SocialButton;
