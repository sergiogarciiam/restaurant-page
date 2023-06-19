import "../css/menu.css";

const createMenuContainer = () => {
  const menuContainer = document.createElement("main");

  menuContainer.classList.add("main-container");

  return menuContainer;
};

export default createMenuContainer;
