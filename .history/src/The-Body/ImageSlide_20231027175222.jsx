import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Images.css";
function ImageSlide() {
  return (
    <div className="col-6">
      <section
        id="thumbnail-carousel"
        className="splide"
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
      >
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <img src="../../images/image-product-1-thumbnail.jpg" alt="" />
            </li>
            <li className="splide__slide">
              <img src="../../images/image-product-2-thumbnail.jpg" alt="" />
            </li>
            <li className="splide__slide">
              <img src="../../images/image-product-3-thumbnail.jpg" alt="" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ImageSlide
