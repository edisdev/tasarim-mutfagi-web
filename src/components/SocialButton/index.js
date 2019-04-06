import React from 'react'

function SocialButton({ url, children }) {
  return (
    <a
      className="SocialButton"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default SocialButton
