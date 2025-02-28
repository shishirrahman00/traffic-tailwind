// const searchBox = document.querySelector(".search-box");
// const searchBtn = searchBox.querySelector(".search-btn");
// const searchBoxHover = searchBox.querySelector(".search-box-hover");

// searchBtn.addEventListener("click", () => {
//   const value = searchBtn.getAttribute("data-state");
//   if (value === "false") {
//     searchBtn.setAttribute("class", " hidden");
//     searchBoxHover.classList.remove("hidden");
//   }
// });

const searchBox = document.querySelector(".search-box");
const searchBtn = searchBox.querySelector(".search-btn");
const searchBoxHover = searchBox.querySelector(".search-box-hover");

searchBtn.addEventListener("click", (event) => {
  const value = event.currentTarget.getAttribute("data-state");
  if (value === "false") {
    searchBtn.setAttribute("class", "hidden text-[#ffffff]");
    searchBoxHover.classList.remove("hidden");
  }
});

// searchBox.addEventListener("focusout", () => {
//   searchBoxHover.classList.add("hidden");
//   searchBtn.classList.remove("hidden");
// });

document.addEventListener("click", (event) => {
  // const clickTarget = searchBox.contains(event.target);
  // console.log(clickTarget);

  if (!searchBox.contains(event.target)) {
    searchBoxHover.classList.add("hidden");
    searchBtn.classList.remove("hidden");
  }
});

// ------------------  2  -------------

const headerMenu = document.querySelector(".header-menu");
const searchIcon = document.querySelector(".search-icon");
const searchHover = document.querySelector(".search-hover");
const closeBtn = document.querySelector(".close-btn");

searchIcon.addEventListener("click", (event) => {
  const value = event.currentTarget.getAttribute("data-open");

  if (value === "false") {
    searchIcon.setAttribute("class", "hidden text-[#ffffff] text-2xl");
    headerMenu.classList.add("hidden");
    searchHover.classList.remove("hidden");
    closeBtn.classList.remove("hidden");
  }
});

closeBtn.addEventListener("click", (event) => {
  closeBtn.classList.add("hidden");
  searchHover.classList.add("hidden");
  headerMenu.classList.remove("hidden");
  searchIcon.setAttribute("class", "text-[#ffffff] text-2xl");
});
