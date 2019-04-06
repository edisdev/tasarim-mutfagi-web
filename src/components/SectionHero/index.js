import React from 'react'
import './style.css'

function Hero() {
  return (
    <div className="Section SectionHero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <h1>Tasarımı Tasarımcıların Konuştuğu Oluşum</h1>
            <p className="desc c-gray mt-3">
              Nerede kalmıştık? Bundan 2 sene önce topluluğumuzu senle
              oluşturmaya başladığımızda işte tam da bunu hayal ediyorduk, senin
              sayende kocaman bir topluluk olmayı.
            </p>
            <div className="mt-5">
              <button className="Btn Btn-primary mr-3">Topluluğa Katıl</button>
              <button className="Btn Btn-ghost-white">Bize Yazın</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
