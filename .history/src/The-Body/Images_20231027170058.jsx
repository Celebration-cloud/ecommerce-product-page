import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/themes/default.min.css';
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
