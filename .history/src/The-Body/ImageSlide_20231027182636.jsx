import { Splide, SplideSlide } from "@splidejs/react-splide";

function ImageSlide() {
    
  return (
    <div className="col-5">
      <div id="carouselExampleIndicators" cl="carousel slide" data-bs-ride="carousel">
  <div cl="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" cl="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div cl="carousel-inner">
    <div cl="carousel-item active">
      <img src="..." cl="d-block w-100" alt="..."/>
    </div>
    <div cl="carousel-item">
      <img src="..." cl="d-block w-100" alt="..."/>
    </div>
    <div cl="carousel-item">
      <img src="..." cl="d-block w-100" alt="..."/>
    </div>
  </div>
  <button cl="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span cl="carousel-control-prev-icon" aria-hidden="true"></span>
    <span cl="visually-hidden">Previous</span>
  </button>
  <button cl="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span cl="carousel-control-next-icon" aria-hidden="true"></span>
    <span cl="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}

export default ImageSlide
