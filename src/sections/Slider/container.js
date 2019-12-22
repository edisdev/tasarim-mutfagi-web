import React from 'react';
import './style.css';
import Slider from './slider';

class Section extends React.Component {
  state = {
    Flickity: null,
  }

  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
      this.state = {
        Flickity: require('react-flickity-component'),
      };
    }
  }

  render() {
    const { Flickity } = this.state;
    const { data } = this.props;
    return (
      <div className="Section SectionSlider">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              {!!Flickity && (
                <Slider Flickity={Flickity} data={data} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
