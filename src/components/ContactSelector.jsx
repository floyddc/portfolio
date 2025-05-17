import React from 'react';
import './css/ContactSelector.css';

const ContactSelector = ({ contactMethod, setContactMethod }) => {

  const handleContactChange = (event) => {        //funzione per settare il cambiamento di scelta nel Selector
    setContactMethod(event.target.value);         //prende value dal Selector e usa setContactMethod(), passato come parametro da Form.jsx
  };

  return (
    <div className='contact-selector'>
      <select id="contactMethod" value={contactMethod} onChange={handleContactChange}> {/*ad ogni cambio di opzione, usa handleContactChange()*/}
        <option value="Whatsapp">Method: WhatsApp</option>
        <option value="Email">Method: Email</option>
      </select>
    </div>
  )
}

export default ContactSelector