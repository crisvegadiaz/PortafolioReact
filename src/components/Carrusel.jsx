import { useEffect, useState } from "react";

const initialState = 0;

function Carrusel({ stateTheme, colors, images, enlaces }) {
  const [currentIndex, setCurrentIndex] = useState(initialState);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isMouseOver) {
        setCurrentIndex((prevIndex) =>
          prevIndex >= images.length - 1 ? initialState : prevIndex + 1
        );
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isMouseOver, images.length]);

  const handleLiClick = (index) => {
    setCurrentIndex(index);
  };

  const handleImageMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleImageMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <>
      <article
        className="carousel__imagenes"
        onMouseEnter={handleImageMouseEnter}
        onMouseLeave={handleImageMouseLeave}
        style={{
          backgroundColor: stateTheme ? colors.blackLight : colors.grayLight,
        }}
      >
        <a
          href={enlaces[currentIndex]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            width="1920"
            height="965"
          />
        </a>
      </article>
      <ul className="carousel__lista">
        {images.map((_, index) => (
          <li
            key={index}
            className={index === currentIndex ? "isActiveLi" : ""}
            onClick={() => handleLiClick(index)}
          ></li>
        ))}
      </ul>
    </>
  );
}

export default Carrusel;
