import React, { useEffect, useState } from 'react';
import './css/Card.css' 

function Card({ title, description, image, link, buttonImg, onClick}) {
    return (
        <div className="card">
            <img className="cardimg" src={image} alt=''/>
            <div className="card-content">
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
            </div>
            <a href={link}><img src={buttonImg} className='buttonImg'/></a>
        </div>


    )
}

export default Card