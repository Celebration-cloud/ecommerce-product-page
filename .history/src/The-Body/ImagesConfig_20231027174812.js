fdocument.addEventListener("DOMContentLoaded", function () {
  new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    gap: 10,
    rewind: true,
    pagination: false,
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    fixedHeight: 60,
    gap: 10,
    rewind: true,
    pagination: false,
  }).mount();
});

export default ImagesConfig