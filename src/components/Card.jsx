import React, { useEffect, useState } from 'react';
import './css/Card.css' 

function Card({ title, description, image, link, buttontext, onClick}) {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
            </div>
            <button className="cardbutton">{buttontext}</button>
        </div>


    )
}

export default Card