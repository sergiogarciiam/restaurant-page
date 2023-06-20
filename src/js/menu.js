import "../css/menu.css";
import plate1 from "../images/plate1.jpg";
import plate2 from "../images/plate2.jpg";
import plate3 from "../images/plate3.jpg";
import plate4 from "../images/plate4.jpg";
import plate5 from "../images/plate5.jpg";

const createMenuContainer = () => {
  const menuContainer = document.createElement("main");
  const platesContainer = document.createElement("div");

  menuContainer.classList.add("menu-container");
  platesContainer.classList.add("plates-container");

  platesContainer.appendChild(createImage(plate1));
  platesContainer.appendChild(createImage(plate2));
  platesContainer.appendChild(createImage(plate3));
  platesContainer.appendChild(createImage(plate4));
  platesContainer.appendChild(createImage(plate5));

  menuContainer.appendChild(createTitle());
  menuContainer.appendChild(platesContainer);

  return menuContainer;
};

function createTitle() {
  const title = document.createElement("h3");
  title.classList.add("menu-title");

  const popularSpan = document.createElement("span");
  popularSpan.textContent = "popular";

  title.appendChild(document.createTextNode("Some of our "));
  title.appendChild(popularSpan);
  title.appendChild(document.createTextNode(" plates..."));

  return title;
}

function createImage(plate) {
  const image = new Image();
  image.src = plate;
  return image;
}

export default createMenuContainer;
