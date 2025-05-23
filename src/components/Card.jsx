import React, { useEffect, useState } from 'react';
import './css/Card.css' 


function Card({ title, description, image, link, buttonImg, onClick }) {

  const handleButtonClick = (e) => {
    onClick(title);
  };

  return (
    <div className="card">
        <img className="cardImg" src={image} alt="" />
        <div className="cardText">
          <h2 className="title">{title}</h2>
          {description ? (
            <p className="description">{description}</p>
          ) : <></>}
        </div>
        {link ? (
          <a href={link} onClick={handleButtonClick} >
            <img src={buttonImg} className="buttonImg" alt="button"/>
          </a>
        ) : (
          <a>
            <img src={buttonImg} className="buttonImg" alt="button" onClick={handleButtonClick}/>
          </a>
        )}
    </div>
  );
}

export default Card;
