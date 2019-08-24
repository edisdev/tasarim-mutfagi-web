import React from 'react'

const flickityOptions = {
  selectedAttraction: 0.2,
  friction: 0.8,
  prevNextButtons: false,
  pageDots: false
}

function SliderItem({ thumbnail, title, description, button }) {
  return (
    <div className="SliderItem">
      <img className="SliderItem-logo" src={thumbnail} alt={title} />
      <div className="SliderItem-body">
        <h3>{title}</h3>
        <p className="c-white-gray mt-2">{description}</p>
        <button className="Btn Btn-primary mt-3">{button.text}</button>
      </div>
    </div>
  )
}

function Slider({ Flickity, data }) {
  return (
    <Flickity options={flickityOptions}>
      {data.map(item => (
        <SliderItem key={item.id} {...item.frontmatter} />
      ))}
    </Flickity>
  )
}

export default Slider
