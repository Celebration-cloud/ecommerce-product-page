import { Splide, SplideSlide } from "@splidejs/react-splide";

var main = new Splide("#main-slider", {
  type: "fade",
  heightRatio: 0.5,
  pagination: false,
  arrows: false,
  cover: true,
});

var thumbnails = new Splide("#thumbnail-slider", {
  rewind: true,
  fixedWidth: 104,
  fixedHeight: 58,
  isNavigation: true,
  gap: 10,
  focus: "center",
  pagination: false,
  cover: true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints: {
    640: {
      fixedWidth: 66,
      fixedHeight: 38,
    },
  },
});

main.sync(thumbnails);
main.mount();
thumbnails.mount();
function Images() {
  return (
    <div className="col">
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img src="" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="image3.jpg" alt="Image 3" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Images;
