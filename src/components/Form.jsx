import React, { useState, useRef } from 'react';
import './css/Form.css';
import './css/ContactSelector.css';
import ContactSelector from './ContactSelector.jsx';
import emailjs from '@emailjs/browser';

function Form() {

    const [emailError, setEmailError] = useState(false);            //setta a falso tutti gli stati dei possibili errori
    const [nameError, setNameError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [invioOK, setInvioOK] = useState(false);                  //setta a falso invioOK, perchè all'inizio non c'è nulla da inviare       

    const [email, setEmail] = useState('');                         //setta a vuoto le variabili da utilizzare
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [contactMethod, setContactMethod] = useState('Whatsapp'); //setta a "Whatsapp" il metodo di contatto predefinito

    const form = useRef();

    const handleButtonClick = () => {                               //funzione che si triggera quando viene premuto il button del form
        const isNameValid = name.trim() !== '';                     //verifica che nome e messaggio non siano stringhe vuote
        const isMessageValid = message.trim() !== '';
        const isEmailValid = contactMethod === 'Email' ? /@.*\./.test(email) : true;    /*verifica prima che email sia metodo di contatto
                                                                                          poi che contenga . e @, con test()*/
        setNameError(!isNameValid);                                 //se nome, messaggio o email non validi, setta gli errori
        setMessageError(!isMessageValid);
        setEmailError(!isEmailValid);

        if (isEmailValid && isNameValid && isMessageValid) {        //se nome, messaggio ed email sono validi contemporaneamente
            if (contactMethod === 'Email') {                        //se, inoltre, email è metodo di contatto
                emailjs                    //utilizza funzione emailjs (servizio esterno, invia 200 email al mese, rinnovo il 10 di ogni mese
                    .sendForm('service_wzkk11p', 'template_ozv51uc', form.current, 'kwEXqmIR0kpK96xxn') /*setta le chiavi*/
                    .then(                                                                              
                        () => {                         //se non vi sono errori nell'invio
                            console.log('SUCCESS!');
                            setInvioOK(true);           //setta a vero invioOK    
                            setName('');                //svuota le variabili, quindi anche i campi di testo
                            setEmail('');
                            setMessage('');
                        },
                        (error) => {                    //se vi è un errore nell'invio
                            console.log('FAILED...', error.text);
                        }
                    );
            } else {                                       //se, invece, email non è metodo di contatto, ma lo è whatsapp
                const messageToSend = `${message}`;        //assegna a messageToSend il messaggio e genera link whatsappUrl
                const whatsappUrl = `https://api.whatsapp.com/send?phone=+393711140284&text=${encodeURIComponent(messageToSend)}`;
                window.open(whatsappUrl, '_blank');        //apre finestra nel browser con quel link

                setName('');                               //svuota le variabili, quindi anche i campi di testo
                setEmail('');
                setMessage('');
            }
        }
        else{setInvioOK(false);}                    //se nome, messaggio o email non validi, setta a falso invioOK
    };

    return (
        <form ref={form} className="form">

            {invioOK ? (<div className='invioOK'>Email sent successfully!</div>):(<></>)} {/*se invioOK è vera, genera div con messaggio di invio
                                                                                   avvenuto con successo*/}
            <div className='row'>
                <ContactSelector contactMethod={contactMethod} setContactMethod={setContactMethod} />  {/*passa setContactMethod come*/}
            </div>                                                                                     {/*parametro del Selector*/}

            <div className='row'>
                {contactMethod === 'Email' && (                      //se email è metodo di contatto, genera relativo campo di testo
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        name="user_email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                )}
            </div>  

            <div className='row'>
                <input 
                    type="text" 
                    placeholder="Your name"
                    name="user_name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <textarea 
                type="text" 
                placeholder="Message"
                name="message"
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            {emailError && <p>ERR.MAIL: Invalid email address.</p>}         {/*se gli errori sono veri, stampa <p> con messaggi di errore*/}   
            {nameError && <p>ERR.NAME: Name cannot be empty.</p>}
            {messageError && <p>ERR.MSG: Message cannot be empty.</p>}
            
            <button type="button" className="button" onClick={handleButtonClick}>
              {
                contactMethod === 'Email' ? (           //se email è metodo di contatto, genera relativo button con icona
                  <>Send me an email!
                  <img src='/email.ico' className='ico' alt='icomail' /></>) 
                  : (                                   //altrimenti genera button con icona whatsapp
                  <>Send me a message!
                  <img src='/whatsapp.ico' className='ico' alt='icoWA' /></>)
              }
            </button>
        </form>
    )
}

export default Form