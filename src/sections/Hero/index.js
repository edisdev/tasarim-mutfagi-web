import React from 'react'
import './style.css'

import HomeBubble1 from '../../../static/assets/home/bubble-1.png'
import HomeBubble2 from '../../../static/assets/home/bubble-2.png'
import HomeBubble3 from '../../../static/assets/home/bubble-3.png'
import HomeBubble4 from '../../../static/assets/home/bubble-4.png'

function Hero() {
  return (
    <div className="Section SectionHero">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* content */}
            <h1>Tasarımı Tasarımcıların Konuştuğu Oluşum</h1>
            <p className="desc c-gray mt-3">
              Nerede kalmıştık? Bundan 2 sene önce topluluğumuzu senle
              oluşturmaya başladığımızda işte tam da bunu hayal ediyorduk, senin
              sayende kocaman bir topluluk olmayı.
            </p>
            {/* buttons */}
            <div className="mt-5">
              <a
                href=""
                className="Btn Btn-primary mr-3"
                rel="noopener noreferrer"
              >
                Topluluğa Katıl
              </a>
              <a
                href=""
                className="Btn Btn-ghost-white"
                rel="noopener noreferrer"
              >
                Bize Yazın
              </a>
            </div>
          </div>
        </div>
        <img
          className="home-bubble-1"
          src={HomeBubble1}
          alt="home bubble 1"
          width="143"
        />
        <img
          className="home-bubble-2"
          src={HomeBubble2}
          alt="home bubble 2"
          width="406"
        />
        <img
          className="home-bubble-3"
          src={HomeBubble3}
          alt="home bubble 3"
          width="377"
        />
        <img
          className="home-bubble-4"
          src={HomeBubble4}
          alt="home bubble 4"
          width="385"
        />
      </div>
    </div>
  )
}

export default Hero
