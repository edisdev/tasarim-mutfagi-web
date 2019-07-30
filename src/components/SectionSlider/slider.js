import React from 'react';
import Youtube from '../../images/sliders/youtube.png';

const flickityOptions = {
  selectedAttraction: 0.2,
  friction: 0.8,
  prevNextButtons: false,
  pageDots: false,
};

const SliderData = [
  {
    id: 1,
    logo: Youtube,
    title: 'YouTube’da Bizi Takip Etmeyi Unutma',
    desc:
      'Birbirinden farklı konuklar ve konularda YouTube kanalımızda tasarıma dair her şeyi konuşuyoruz.',
    action: {
      text: 'Abone Ol',
      link: '',
    },
  },
  {
    id: 2,
    logo: Youtube,
    title: 'YouTube’da Bizi Takip Etmeyi Unutma',
    desc:
      'Birbirinden farklı konuklar ve konularda YouTube kanalımızda tasarıma dair her şeyi konuşuyoruz.',
    action: {
      text: 'Abone Ol',
      link: '',
    },
  },
  {
    id: 3,
    logo: Youtube,
    title: 'YouTube’da Bizi Takip Etmeyi Unutma',
    desc:
      'Birbirinden farklı konuklar ve konularda YouTube kanalımızda',
    action: {
      text: 'Abone Ol',
      link: '',
    },
  },
];

function SliderItem({
  logo, title, desc, action,
}) {
  return (
    <div className="SliderItem">
      <img className="SliderItem-logo" src={logo} alt="" />
      <div className="SliderItem-body">
        <h3>{title}</h3>
        <p className="c-gray mt-2">{desc}</p>
        <button className="Btn Btn-primary mt-3">{action.text}</button>
      </div>
    </div>
  );
}

function Slider({ Flickity }) {
  return (
    <Flickity options={flickityOptions}>
      {SliderData.map(item => (
        <SliderItem key={item.id} {...item} />
      ))}
    </Flickity>
  );
}

export default Slider;
