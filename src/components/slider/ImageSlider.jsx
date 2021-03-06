import { useState } from "react";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    //make sure that if at end of array, set back to 0 to start at beginning of photos
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    //for left arrow, if index is 0 reset to end of array for next image
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider">
        {slides.map((slide, index) => {
          return (
            <div className={index === current ? "slide-active" : "slide"}>
              {index === current && (
                <img
                  src={slide.src}
                  alt={slide.desc}
                  className="slider-image"
                  key={slide.id}
                />
              )}
            </div>
          );
        })}
      </section>
      <div className="arrows">
        <FaArrowLeft className="arrows-arrow" onClick={prevSlide} />
        <FaArrowRight className="arrows-arrow" onClick={nextSlide} />
      </div>
    </>
  );
};

export default ImageSlider;
