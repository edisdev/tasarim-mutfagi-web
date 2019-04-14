import React from 'react'

const flickityOptions = {
  selectedAttraction: 0.2,
  friction: 0.8,
  prevNextButtons: false,
  pageDots: false
}

function Slider({ Flickity }) {
  return (
    <Flickity options={flickityOptions}>
      <div className="carousel-cell">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        aspernatur deleniti ea, ex expedita id impedit magni modi mollitia
        numquam quis voluptate. Commodi, vitae voluptate! Harum nobis recusandae
        ullam vel.
      </div>
      <div className="carousel-cell">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        aspernatur deleniti ea, ex expedita id impedit magni modi mollitia
        numquam quis voluptate. Commodi, vitae voluptate! Harum nobis recusandae
        ullam vel.
      </div>
      <div className="carousel-cell">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        aspernatur deleniti ea, ex expedita id impedit magni modi mollitia
        numquam quis voluptate. Commodi, vitae voluptate! Harum nobis recusandae
        ullam vel.
      </div>
      <div className="carousel-cell">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        aspernatur deleniti ea, ex expedita id impedit magni modi mollitia
        numquam quis voluptate. Commodi, vitae voluptate! Harum nobis recusandae
        ullam vel.
      </div>
    </Flickity>
  )
}

export default Slider
