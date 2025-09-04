import React from "react";
import { useState, useEffect } from "react";
import "./customcarousel.css";

import { Carousel } from "react-bootstrap";

const FirstCarousel = () => {
  const [key, setKey] = useState("Overview");

  const images = [
    "/assets/pictures/video.png",
    "/assets/pictures/video.png",
    "/assets/pictures/video.png",
    "/assets/pictures/video.png",
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="customcars">
      <Carousel
        activeIndex={index}
        onSelect={() => {}}
        controls={false}
        indicators={false}
        interval={null} // disable default auto-slide since we handle it manually
      >
        {images.map((img, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={img}
              alt={`Slide ${i + 1}`}
              style={{ height: "fit-content", objectFit: "contain" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="d-flex mt-3 buttons justify-content-center align-items-center lastbtns">
        {/* Prev */}
        <button
          className="custom-carousel-prev"
          onClick={() =>
            setIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 1L1.5 6L6.5 11"
              stroke="#B18C07"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Indicators */}
        <div className="custom-carousel-indicators mx-3 d-flex justify-content-center">
          {images.map((_, i) => (
            <span
              key={i}
              className={`indicator-shape ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>

        {/* Next */}
        <button
          className="custom-carousel-next"
          onClick={() =>
            setIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 11L6.5 6L1.5 1"
              stroke="#B18C07"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FirstCarousel;
