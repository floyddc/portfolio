import React, { useState, useEffect } from 'react';
import './css/BackButton.css';

function BackButton({ onViewChange, setClicked }) {
    const [buttonVisible, setButtonVisible] = useState(false);

    useEffect(() => { 
        const timer = setTimeout(() => {                  //imposta un ritardo di 100ms
            setButtonVisible(true);                         //per poi cambiare lo stato di visibilità del button
        }, 100);                                                  

        return () => clearTimeout(timer);                         //pulisce il timeout se il componente BackButton.jsx non è più montato
    }, []);                                                     /*array vuoto come secondo argomento = useEffect() eseguito solo una volta,
                                                                ovvero quando il componente BackButton.jsx viene montato*/

    return (                                                    /*button sarà di classe BackButton.show se buttonVisible è vera*/
        <button
            onClick={() => {
                setClicked(null);               // resetta clicked
                onViewChange('home');          // torna alla home
            }}
            className={`backbutton ${buttonVisible ? 'show' : ''}`}
        >
            <img src='/back.ico' alt='back icon' />
        </button>
                )
}

export default BackButton