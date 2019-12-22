import React, { Component } from 'react';
import c from 'classnames';

import './style.css';
import Icon from '../../components/Icon';

import DontaeLittle from '../../images/commend/dontae_little.png';
import YakupBayrak from '../../images/commend/yakup_bayrak.png';


const photos = {
  DontaeLittle,
  YakupBayrak,
};

function CountCol(item) {
  const {
    who, who_photo, who_title, comment,
  } = item.commend;
  const itemindex = item.index;
  const mouseHover = item.hoverEvent;
  return (
    <div className="col-12 col-sm-6 col-lg-4 commendCard" role="button" tabIndex={itemindex} onClick={mouseHover}>
      <div className="who">{ who }</div>
      <div className="who_title">{ who_title }</div>
      <div className="profile">
        <img className="profile_img" src={photos[who_photo]} alt={who} />
        <div className="profile_twitter_logo">
          <Icon name="twitter" />
        </div>
      </div>
      <div className="commend">{ comment }</div>
    </div>
  );
}


function SliderButton(item) {
  const { position, setSliderAction } = item;
  return (
    <button type="button" className={c('sliderButton', position)} onClick={setSliderAction}>
      <Icon name={position} />
    </button>
  );
}

function ActiveCommend(commend) {
  const hasActiveCommend = Object.keys(commend.commend).length > 0;
  if (hasActiveCommend) {
    const {
      who, who_photo, who_title, comment,
    } = commend.commend;
    return (
      <div className="activeCommend">
        <div className="profile">
          <img className="profile_img" src={photos[who_photo]} alt={who} />
          <div className="profile_twitter_logo">
            <Icon name="twitter" />
          </div>
        </div>
        <div className="who">{ who }</div>
        <div className="who_title">{ who_title }</div>
        <div className="commend">{ comment }</div>
      </div>
    );
  }
  return null;
}

class List extends Component {
  state = {
    selectedCommend: {},
  }

  setSelectedCommend = (commend) => {
    this.setState({
      selectedCommend: {
        ...commend,
      },
    });
  }

  setSliderAction = (position) => {
    const { selectedCommend } = this.state;
    const { data } = this.props;
    const hasSelectedComment = Object.keys(selectedCommend).length > 0;
    let currentIndex = 0;
    const isPrev = position === 'left';

    if (hasSelectedComment) {
      const selectedIndex = data.findIndex(item => item.id === selectedCommend.id);
      if (selectedIndex > 1 && isPrev) {
        currentIndex = selectedIndex - 1;
      } else if (selectedIndex < data.length - 1) {
        currentIndex = selectedIndex + 1;
      }
    }
    this.setSelectedCommend(data[currentIndex]);
  }

  componentWillMount() {
    if (typeof window === 'undefined') return;
    window.addEventListener('click', (e) => {
      const sportClickedItem = ['.sliderButton ', '.commendCard', '.commend'];
      if (sportClickedItem.findIndex(item => e.target.closest(item)) === -1) {
        this.setSelectedCommend({});
      }
    });
  }

  render() {
    const { data } = this.props;
    const { selectedCommend } = this.state;

    return (
      <section className="Section SectionComment">
        <div className="container">
          <h2>Yorumlar</h2>
          <div className="comments">
            <SliderButton position="left" setSliderAction={() => this.setSliderAction('left')} />
            <div className="row">
              {data.map((commend, index) => (
                <CountCol
                  commend={commend}
                  index={index}
                  hoverEvent={() => this.setSelectedCommend(commend)}
                  key={commend.id}
                />
              ))}
            </div>
            <ActiveCommend commend={selectedCommend} />
            <SliderButton position="right" setSliderAction={() => this.setSliderAction('right')} />
          </div>
        </div>
      </section>
    );
  }
}

export default List;
