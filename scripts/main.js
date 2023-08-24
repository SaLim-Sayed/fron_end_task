const workItemElements = document.getElementsByClassName("how-works-item");

const unActiveAll = () => {
  [...workItemElements].forEach((item) => {
    item.classList.remove("active");
  });
};

[...workItemElements].forEach((item) => {
  item.addEventListener("click", (e) => {
    unActiveAll();
    e.currentTarget.classList.add("active");
  });
});
