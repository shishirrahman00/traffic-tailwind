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
    autoplayTimeout: 3000,
    responsive: {
      425: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      },
      1170: {
        items: 5,
      },
    },
  });
}

const sidebarMenu = document.querySelector("#sidebar-menu-btn");
const homepage4Sidebar = document.querySelector("#home-page-4-sidebar");
const sidebarMenuSearch = document.querySelector("#sidebar-menu-search");
const homepage4SidebarMenuCLose = document.querySelector(
  "#home-page-4-menu-close"
);
const homepage4SidebarMenuSearch = document.querySelector(
  "#home-page-4-menu-search"
);
if (sidebarMenu) {
  sidebarMenu.addEventListener("click", () => {
    homepage4Sidebar.setAttribute("data-state", "open");
  });
}
if (homepage4SidebarMenuCLose) {
  homepage4SidebarMenuCLose.addEventListener("click", () => {
    homepage4Sidebar.setAttribute("data-state", "close");
  });
}

if (sidebarMenuSearch) {
  sidebarMenuSearch.addEventListener("click", () => {
    homepage4SidebarMenuSearch.setAttribute("data-state", "open");
  });
}
