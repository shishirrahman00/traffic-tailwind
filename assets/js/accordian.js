const accordianItems = document.querySelectorAll(".accordian-item");
accordianItems.forEach((item) => {
  item.querySelector(".accordian-title").addEventListener("click", () => {
    const value = item.getAttribute("data-open") === "true";
    item.setAttribute("data-open", !value);
  });
});
