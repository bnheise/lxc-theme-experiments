const collapseMenuButton = fragmentElement.querySelector(
  "#collapse-menu-button"
);

collapseMenuButton.onclick = () => {
  const menuCloseIcon = fragmentElement.querySelector("#menu-open-icon");
  const menuOpenIcon = fragmentElement.querySelector("#menu-close-icon");

  if (menuCloseIcon.classList.contains("d-none")) {
    menuCloseIcon.classList.remove("d-none");
    menuOpenIcon.classList.add("d-none");
    collapseMenuButton.style.backgroundColor = "";
  } else {
    menuCloseIcon.classList.add("d-none");
    menuOpenIcon.classList.remove("d-none");
    collapseMenuButton.style.backgroundColor = "var(--dark)";
  }
};
