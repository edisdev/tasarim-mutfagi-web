import React from 'react'

function SliderItem({ logo, title, desc, btnText }) {
  return (
    <div className="SliderItem">
      <img className="SliderItem-logo" src={logo} alt="" />
      <div className="SliderItem-body">
        <h3>{title}</h3>
        <p className="c-gray mt-2">{desc}</p>
        <button className="Btn Btn-primary mt-3">{btnText}</button>
      </div>
    </div>
  )
}

export default SliderItem
