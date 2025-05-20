import React, { useEffect, useState } from 'react';
import './css/Card.css' 

function Card({ title, description, image, link, buttonImg, onClick }) {
  return (
    <div className="card">
      <img className="cardimg" src={image} alt='' />
      <div className="card-content">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>

      {link ? (
        <a
          href={link}
          onClick={(e) => {
            e.stopPropagation();
            onClick(title);
          }}
        >
          <img src={buttonImg} className='buttonImg' alt='button' />
        </a>
      ) : (
        <img
          src={buttonImg}
          className='buttonImg'
          alt='button'
          onClick={() => onClick(title)}
        />
      )}
    </div>
  );
}



export default Card
