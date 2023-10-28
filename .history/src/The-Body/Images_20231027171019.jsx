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
    <div className="col-6">
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="../../images/image-product-1-thumbnail.jpg" alt="Image 1" width=""/>
        </SplideSlide>
        <SplideSlide>
          <img src="../../images/image-product-2-thumbnail.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="../../images/image-product-2-thumbnail.jpg" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Images;
