import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Images.css";

document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#main-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
  });

  var thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    fixedHeight: 60,
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
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
