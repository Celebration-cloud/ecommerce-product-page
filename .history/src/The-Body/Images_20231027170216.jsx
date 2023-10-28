import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
function Images() {
  return (
    <div className="col">
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="image1.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Images;
