import React, { Component } from 'react';
import './style.css';
import Icon from '../Icon';

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

  componentWillMount() {
    window.addEventListener('click', (e) => {
      if (!e.target.closest('.commendCard')) {
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
          </div>
        </div>
      </section>
    );
  }
}

export default List;
