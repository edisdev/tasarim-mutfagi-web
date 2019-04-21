import React from 'react'
import './style.css'
import Slider from './slider'

class Section extends React.Component {
  state = {
    Flickity: null
  }

  constructor(props) {
    super(props)
    if (typeof window !== 'undefined') {
      this.state.Flickity = require('react-flickity-component')
    }
  }

  render() {
    const { Flickity } = this.state

    return (
      <div className="Section SectionSlider">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              {Flickity && <Slider Flickity={Flickity} />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Section