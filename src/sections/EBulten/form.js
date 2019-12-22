import React from 'react';


function ElbultenForm() {
  return (
    <form className="ebultenForm">
      <input className="Txt" name="user" placeholder="Adın Soyadın" />
      <input className="Txt" name="email" placeholder="Email Adresin" />
      <input className="Txt" name="title" placeholder="Unvan" />
      <button className="Btn Btn-primary">KAYDOL</button>
    </form>
  );
}

export default ElbultenForm;
