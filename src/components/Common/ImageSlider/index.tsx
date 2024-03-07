// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

interface SliderProps {
  images: string[];
}

const ImageSlider = ({ images }: SliderProps) => {
  return (
    <div className="sliderWrapper">
      <div className="wrapper">
        <section>
          {images.map((image) => (
            <div className="image" key={image}>
              <img className="sliderImage" src={image} alt={image} />
            </div>
          ))}
        </section>
        <section>
          {images.map((image) => (
            <div className="image" key={image}>
              <img className="sliderImage" src={image} alt={image} />
            </div>
          ))}
        </section>
        <section>
          {images.map((image) => (
            <div className="image" key={image}>
              <img className="sliderImage" src={image} alt={image} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ImageSlider;
