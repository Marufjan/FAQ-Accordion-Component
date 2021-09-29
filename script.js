"use strict";

const arrows = document.querySelectorAll(".icon");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", function (arr) {
    const items = document.querySelectorAll(".item");

    items.forEach((item) => {
      const itemContainer = arrow.closest(".item");
      const text = arrow.previousElementSibling;

      if (item === itemContainer) {
        itemContainer.classList.toggle("open");
        arr.currentTarget.classList.add("rotate");
        text.classList.add("text-bold");
      } else if (item !== itemContainer) {
        item.classList.remove("open");
      }
    });
  });
});
