const testimonialSlider = document.querySelector(".testimonial-slider");
const caseStudySlider = document.querySelector(".case-study-slider");
const caseSliderElement = document.querySelector(".case-slider");

if (testimonialSlider) {
  tns({
    container: testimonialSlider,
    items: 1,
    slideBy: "page",
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
  });
}

if (caseStudySlider) {
  tns({
    container: caseStudySlider,
    items: 3,
    slideBy: "page",
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
    gutter: 20,
    responsive: {
      425: {
        gutter: 20,
        items: 1,
      },
      768: {
        gutter: 30,
        items: 2,
      },
      1024: {
        gutter: 20,
        items: 3,
      },
    },
  });
}

if (caseSliderElement) {
  tns({
    container: caseSliderElement,
    items: 5,
    slideBy: "page",
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
  });
}
