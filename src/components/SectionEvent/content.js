import React from 'react'

function EventContent() {
  return (
    <div className="col-12 col-md-6 col-lg-5 col-xl-4 SectionEvent-content">
      {/* header */}
      <h2>Etkinlikler</h2>
      <p className="desc c-gray mt-3">
        Bazen kendimiz konuşuyoruz, bazen siz. Bazen ise hepimiz geçip,
        birbirinden değerli tasarımcıları dinliyoruz ve kaynaşıyoruz.
      </p>
      {/* event card */}
      <div className="mt-5">this come here event card</div>
      {/* buttons */}
      <div className="mt-5">
        <button className="Btn Btn-primary mr-3">Tüm Etkinlikler</button>
      </div>
    </div>
  )
}

export default EventContent
