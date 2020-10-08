// select items DOM
const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-navigation");
const menuStyle = document.querySelector(".menu-style");

const itemNav = document.querySelectorAll(".nav-item");

//Set Initial Menu Overlay

let showMenu = false;

menuButton.addEventListener("click", rotateMenu);

function rotateMenu() {
  if (!showMenu) {
    menuButton.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuStyle.classList.add("show");

    itemNav.forEach((item) => item.classList.add("show"));

    showMenu = true;
  } else {
    menuButton.classList.remove("close");
    menu.classList.remove("showe");
    menuNav.classList.remove("show");
    menuStyle.classList.remove("show");

    itemNav.forEach((item) => item.classList.remove("show"));

    showMenu = false;
  }
}
