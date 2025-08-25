import { useState } from 'react';
import data from './json/Contacts.json';
import Card from './Card.jsx';
import Form from './Form.jsx';

function Contacts({ onViewChange, setClicked }) {
    const handleCardClick = (title) => {
        if (title === "TEXT ME DIRECTLY") {
            setClicked(title);
            onViewChange('textMeView');
        }
    };

    return (
        <>
            {data.map((item) => (
                <Card
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    link={item.link}
                    buttonImg={item.buttonImg || "/link.ico"}
                    onClick={handleCardClick}
                />
            ))}
        </>
    );
}

export default Contacts;