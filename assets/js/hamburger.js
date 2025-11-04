const barButton = document.querySelector(".hamburger");
const sidebar = document.getElementById("mobileSidebar");
const closeSidebar = document.getElementById("closeSidebar");

barButton.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
});
