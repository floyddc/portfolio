import data from './json/Projects.json';
import Card from './Card.jsx';

function Projects({ onViewChange, setClicked }) {
  const handleCardClick = (title) => {
    if (title === "TEXT ME DIRECTLY") {
      setClicked("TEXT ME DIRECTLY");
      onViewChange("textMeView");
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