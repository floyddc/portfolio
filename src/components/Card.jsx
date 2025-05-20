import React, { useEffect, useState } from 'react';
import './css/Card.css' 


function Card({ title, description, image, link, buttonImg, onClick }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Previene il flip quando si clicca sul bottone
    onClick(title);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      {/* Front Face */}
      <div className="card-front">
        <img className="cardimg" src={image} alt="" />
        <div className="card-content">
          <h2 className="title">{title}</h2>
        </div>
        {link ? (
          <a href={link} onClick={handleButtonClick} >
            <img src={buttonImg} className="buttonImg" alt="button" />
          </a>
        ) : (
          <a>
            <img src={buttonImg} className="buttonImg" alt="button" onClick={handleButtonClick}/>
          </a>
        )}
      </div>

      {/* Back Face */}
      <div className="card-back">
        <div className="card-content">
          <p className="description">{description}</p>
        </div>
        {link ? (
          <a href={link} onClick={handleButtonClick}>
            <img src={buttonImg} className="buttonImg" alt="button" />
          </a>
        ) : (
          <img
            src={buttonImg}
            className="buttonImg"
            alt="button"
            onClick={handleButtonClick}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
