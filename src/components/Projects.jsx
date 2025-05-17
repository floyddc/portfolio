import data from './json/Projects.json';
import Card from './Card.jsx';

function Projects() {
    return (
        <>
        {
            data.map((item) => (
              <Card
                key = {item.id}
                title = {item.title}
                description = {item.description}
                image = {item.image}
                link = {item.link} 
                buttonImg = {item.buttonImg}
              ></Card>
            ))
        }
        </>
    )
}

export default Projects