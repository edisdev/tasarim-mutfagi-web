import React from 'react'
import './style.css'

import HomeBubble1 from '../../images/home/bubble-1.png'
import HomeBubble2 from '../../images/home/bubble-2.png'
import HomeBubble3 from '../../images/home/bubble-3.png'
import HomeBubble4 from '../../images/home/bubble-4.png'

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
              <button className="Btn Btn-primary mr-3">Topluluğa Katıl</button>
              <button className="Btn Btn-ghost-white">Bize Yazın</button>
            </div>
          </div>
        </div>
        <img className="home-bubble-1" src={HomeBubble1} alt="" width="143" />
        <img className="home-bubble-2" src={HomeBubble2} alt="" width="406" />
        <img className="home-bubble-3" src={HomeBubble3} alt="" width="377" />
        <img className="home-bubble-4" src={HomeBubble4} alt="" width="385" />
      </div>
    </div>
  )
}

export default Hero
