import data from './json/Projects.json';
import Card from './Card.jsx';

function Projects({ onViewChange, setClicked }) {
  const handleCardClick = (title) => {
    if (title === "REQUEST A SERVICE") {
      setClicked("REQUEST A SERVICE");
      onViewChange("requestView");
    }
  };

  return (
    <>
      {
        data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
            buttonImg={item.buttonImg}
            onClick={handleCardClick}
          />
        ))
      }
    </>
  );
}

export default Projects