import React from 'react'
import './style.css'

import desktop1 from '../../images/home-desktop-1.png'
import desktop2 from '../../images/home-desktop-2.png'
import desktop3 from '../../images/home-desktop-3.png'
import desktop4 from '../../images/home-desktop-4.png'

function Hero() {
  return (
    <div className="Section SectionHero">
      <div className="container">
        <div className="row align-items-center">
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
        <img className="bg-desktop-1" src={desktop1} alt="" width="143" />
        <img className="bg-desktop-2" src={desktop2} alt="" width="406" />
        <img className="bg-desktop-3" src={desktop3} alt="" width="377" />
        <img className="bg-desktop-4" src={desktop4} alt="" width="385" />
      </div>
    </div>
  )
}

export default Hero
