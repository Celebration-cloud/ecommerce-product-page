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
      <section
  id="thumbnail-carousel"
  cla="splide"
  aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
>
  <div cla="splide__track">
		<ul cla="splide__list">
			<li cla="splide__slide">
				<img src="thumbnail01.jpg" alt=""/>
			</li>
			<li cla="splide__slide">
				<img src="thumbnail02.jpg" alt=""/>
			</li>
			<li cla="splide__slide">
				<img src="thumbnail03.jpg" alt=""/>
			</li>
		</ul>
  </div>
</section>
    </div>
  );
}

export default Images;
