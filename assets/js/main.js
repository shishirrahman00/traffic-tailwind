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

const accordianItems = document.querySelectorAll(".accordian-item");
accordianItems.forEach((item) => {
  item.querySelector(".accordian-title").addEventListener("click", () => {
    const value = item.getAttribute("data-open") === "true";
    item.setAttribute("data-open", !value);
  });
});

// const accordianItems = document.querySelectorAll(".accordian-item");
// accordianItems.forEach((item) => {
//   item.querySelector(".accordian-title").addEventListener("click", () => {
//     const value = item.getAttribute("data-state") === "true";
//     item.setAttribute("data-state", !value);
//   });
// });

//
const tabBtns = document.querySelectorAll(".tab-btn-list button");
const tabContents = document.querySelectorAll(".tab-contents .tab-content");

tabBtns.forEach((item) => {
  item.addEventListener("click", () => {
    tabBtns.forEach((t) => {
      t.setAttribute("class", "");
    });
    item.setAttribute("class", "py-2 px-5 bg-red-300 rounded-full");
    tabContents.forEach((tc) => {
      tc.setAttribute("class", "hidden tab-content");
    });
    const value = item.getAttribute("data-value");
    document
      .getElementById(value)
      .setAttribute("class", "tab-content border py-7 px-4");
  });
});

// PRACTICE-MYSELF

// const tabBtns = document.querySelectorAll(".tab-items button");
// const tabContentsBody = document.querySelectorAll(
//   ".tab-content-list .tab-content"
// );

// tabBtns.forEach((item) => {
//   item.addEventListener("click", () => {
//     tabBtns.forEach((t) => {
//       t.setAttribute("class", "");
//     });
//     item.setAttribute("class", "py-2 px-5 bg-red-300 rounded-full");

//     tabContentsBody.forEach((tcb) => {
//       tcb.setAttribute("class", "hidden tab-content");
//     });

//     const value = item.getAttribute("data-state");
//     document
//       .getElementById(value)
//       .setAttribute("class", " tab-content border py-7 px-8");
//   });
// });

const btn = document.querySelectorAll(".btn");

// btn.addEventListener("click", (event) => {
//   const value = event.currentTarget.getAttribute("data-click");

//   event.currentTarget.setAttribute("data-click", !(value === "true"));
// });

btn.forEach((item) => {
  item.addEventListener("click", (event) => {
    const value = event.currentTarget.getAttribute("data-click");
    event.currentTarget.setAttribute("data-click", !(value === "true"));
  });
});

const toastBtn = document.querySelector(".toast-btn");
const toastWrapper = document.querySelector(".toast-wrapper");
const toastCloseBtn = toastWrapper.querySelector(".toast-close");

toastBtn.addEventListener("click", (event) => {
  toastWrapper.classList.remove("hidden");
  toastWrapper.classList.add("flex");

  const toastHeading = document.createElement("h1");
  const toastDescription = document.createElement("p");
  toastDescription.innerHTML = new Date().toString();
  toastWrapper.appendChild(toastDescription);
  toastHeading.innerHTML = "Scheduled Catchup";

  toastWrapper.appendChild(toastHeading);
  setTimeout(() => {
    toastWrapper.classList.remove("flex");
    toastWrapper.classList.add("hidden");
    toastWrapper.innerHTML = null;
  }, 3000);
});

toastCloseBtn.addEventListener("click", (event) => {
  toastWrapper.classList.remove("flex");
  toastWrapper.classList.add("hidden");
});

const progressItem = document.querySelector(".progress-item");

document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(" .progress-item .progress-bar");
  let width = 25;

  setInterval(() => {
    if (width >= 50) {
      clearInterval();
    } else {
      width++;
      progressBar.style.width = width + "%";
    }
  }, 20);
});

const comboBox = document.querySelector(".combo-box");
const comboBoxBtn = document.querySelector(".combo-box-btn");
const comboBoxList = comboBox.querySelector(".combo-box-list");
const comboBoxSearch = comboBox.querySelector(".combo-box-search");
const dataList = [
  {
    label: "Laravel",
    value: "laravel",
  },
  {
    label: "PHP",
    value: "PHP",
  },
  {
    label: "React",
    value: "React",
  },
  {
    label: "Next",
    value: "Next",
  },
  {
    label: "Mern",
    value: "Mern",
  },
];

comboBoxBtn.addEventListener("click", () => {
  const value = comboBox.getAttribute("data-state") === "true";
  comboBox.setAttribute("data-state", !value);

  dataList.forEach((item) => {
    const comboBoxListLi = document.createElement("li");
    comboBoxListLi.setAttribute(
      "class",
      "rounded-sm px-5 py-2 hover:bg-[#e9e9e9] cursor-pointer"
    );
    comboBoxListLi.innerHTML = item.label;
    comboBoxList.appendChild(comboBoxListLi);
  });
});

comboBoxSearch.addEventListener("input", (event) => {
  const searchText = String(event.target.value);

  if (searchText.trim() === "") {
    comboBoxList.innerHTML = "";
    dataList.forEach((item) => {
      const comboBoxListLi = document.createElement("li");

      comboBoxListLi.setAttribute(
        "class",
        "rounded-sm px-5 py-2 hover:bg-[#e9e9e9] cursor-pointer"
      );
      comboBoxListLi.innerHTML = item.label;
      comboBoxList.appendChild(comboBoxListLi);
    });
    return;
  }

  const filterdArray = dataList.filter((item) => {
    if (item.value.toLowerCase().startsWith(searchText.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  if (filterdArray.length) {
    comboBoxList.innerHTML = "";
    filterdArray.forEach((item) => {
      const comboBoxListLi = document.createElement("li");

      comboBoxListLi.setAttribute(
        "class",
        "rounded-sm px-5 py-2 hover:bg-[#e9e9e9] cursor-pointer"
      );
      comboBoxListLi.innerHTML = item.label;
      comboBoxList.appendChild(comboBoxListLi);
    });
  } else {
    comboBoxList.innerHTML = "";
    const comboBoxListLi = document.createElement("li");

    comboBoxListLi.setAttribute(
      "class",
      "rounded-sm px-5 py-2 hover:bg-[#e9e9e9] cursor-pointer"
    );

    comboBoxListLi.innerHTML = "No Option Found";
    comboBoxList.appendChild(comboBoxListLi);
  }
});

const form = document.querySelector("form");
const formTodoTask = form.querySelector(".task");
const todoList = document.querySelector(".Todo-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formTaskValue = formTodoTask.value;

  if (formTaskValue === "") {
    alert("no task added");
  } else {
    const todoListLi = document.createElement("li");
    todoListLi.setAttribute(
      "class",
      "rounded-sm px-5 py-2 hover:bg-[#e9e9e9] border-b cursor-pointer"
    );
    todoListLi.innerHTML = formTaskValue;
    todoList.setAttribute("class", "border last:border-b-0");
    todoList.appendChild(todoListLi);
    formTodoTask.value = "";
  }
});
