import { Splide, SplideSlide } from "@splidejs/react-splide";
import './Images.css'
import './Images.js'
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';

function Images() {
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
              <img src="thumbnail01.jpg" alt="" />
            </li>
            <li className="splide__slide">
              <img src="thumbnail02.jpg" alt="" />
            </li>
            <li className="splide__slide">
              <img src="thumbnail03.jpg" alt="" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Images;
