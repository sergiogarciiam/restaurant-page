import HomeImage from "../images/home-image.jpg";
import "../css/home.css";

const createHomeContainer = () => {
  const homeContainer = document.createElement("main");
  const image = new Image();
  const opacityContainer = document.createElement("div");
  const question = document.createElement("h2");
  const bookButton = document.createElement("button");

  homeContainer.classList.add("home-container");

  image.src = HomeImage;
  image.classList.add("home-image");

  opacityContainer.classList.add("opacity-container");

  question.textContent = "Wanna eat with us?";
  question.classList.add("question");

  bookButton.textContent = "Book now";
  bookButton.type = "button";
  bookButton.classList.add("book-button");

  homeContainer.appendChild(image);
  homeContainer.appendChild(opacityContainer);
  homeContainer.appendChild(question);
  homeContainer.appendChild(bookButton);

  return homeContainer;
};

export default createHomeContainer;
