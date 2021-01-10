const element = document.querySelectorAll(".btn");
element.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    button.classList.add("btn__color");
  });
  button.addEventListener("mouseleave", (e) => {
    button.classList.remove("btn__color");
  });
});

const viewAll = document.querySelectorAll(".featured__btn");
viewAll.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    button.classList.add("featured__click");
  });
  button.addEventListener("mouseleave", (e) => {
    button.classList.remove("featured__click");
  });
});
