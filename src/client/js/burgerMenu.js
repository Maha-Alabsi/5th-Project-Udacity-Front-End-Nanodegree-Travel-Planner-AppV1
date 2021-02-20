const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
  openMenu.style.display = "none";
}

function close() {
  mainMenu.style.top = "-100%";
  openMenu.style.display = "block";
}

export { show };
export { close };
