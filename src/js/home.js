import HomeImage from "../images/home-image.jpg";
import "../css/global.css";
import "../css/home.css";

const homeDisplayController = (() => {
  let pageContainer = null;

  const setUp = () => {
    pageContainerSetUp();
    headerContainerSetUp();
    mainContainerSetUp();
  };

  function pageContainerSetUp() {
    pageContainer = document.createElement("div");
    pageContainer.classList.add("page-container");
    document.body.appendChild(pageContainer);
  }

  function headerContainerSetUp() {
    const headerContainer = document.createElement("header");
    const buttonsContainer = document.createElement("div");
    const title = document.createElement("h1");
    const typicalSpan = document.createElement("span");
    const menuButton = document.createElement("button");
    const contactButton = document.createElement("button");

    headerContainer.classList.add("header-container");
    buttonsContainer.classList.add("buttons-container");

    title.classList.add("title");
    typicalSpan.textContent = "Typical";

    menuButton.textContent = "Menu";
    menuButton.type = "button";
    menuButton.classList.add("menu-button");

    contactButton.textContent = "Contact";
    contactButton.type = "button";
    contactButton.classList.add("menu-button");

    title.appendChild(document.createTextNode("A "));
    title.appendChild(typicalSpan);
    title.appendChild(document.createTextNode(" Restaurant"));

    buttonsContainer.appendChild(menuButton);
    buttonsContainer.appendChild(contactButton);

    headerContainer.appendChild(title);
    headerContainer.appendChild(buttonsContainer);

    pageContainer.appendChild(headerContainer);
  }

  function mainContainerSetUp() {
    const mainContainer = document.createElement("main");
    const image = new Image();
    const opacityContainer = document.createElement("div");
    const question = document.createElement("h2");
    const bookButton = document.createElement("button");

    mainContainer.classList.add("main-container");

    image.src = HomeImage;
    image.classList.add("home-image");

    opacityContainer.classList.add("opacity-container");

    question.textContent = "Wanna eat with us?";
    question.classList.add("question");

    bookButton.textContent = "Book now";
    bookButton.type = "button";
    bookButton.classList.add("book-button");

    mainContainer.appendChild(image);
    mainContainer.appendChild(opacityContainer);
    mainContainer.appendChild(question);
    mainContainer.appendChild(bookButton);

    pageContainer.appendChild(mainContainer);
  }

  return { setUp };
})();

export { homeDisplayController };
