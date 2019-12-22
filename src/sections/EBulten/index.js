import React from 'react';
import './style.css';

import Form from './form';

function EBulten() {
  return (
    <section className="Section SectionEBulten">
      <div className="container">
        <h2>E-Bültene Kaydol</h2>
        <div className="ebultenContent">
          <div className="description">
            <h4>Bültenlerden ve Gelişmelerden Haberdar Ol</h4>
            <p>
              Gelişi güzel ya da haftalık, aylık gibi bültenler sanada gelsin istiyorsan
              ve güncel duyuruları, haberleri kaçırmamak için Tasarım Mutfağı bülten mail listesine
              sen de adını ve mailini bırakmalısın. Emin ol faydasını göreceksin.
            </p>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EBulten;
