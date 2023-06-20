import createHomeContainer from "./home.js";
import createMenuContainer from "./menu.js";
import createContactContainer from "./contact.js";
import "../css/global.css";

const displayController = (() => {
  let pageContainer = null;

  const setUp = () => {
    pageContainerSetUp();
    headerContainerSetUp();
    setHome();
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
    title.addEventListener("click", setHome);

    typicalSpan.textContent = "Typical";

    menuButton.textContent = "Menu";
    menuButton.type = "button";
    menuButton.classList.add("menu-button");
    menuButton.addEventListener("click", setMenu);

    contactButton.textContent = "Contact";
    contactButton.type = "button";
    contactButton.classList.add("menu-button");
    contactButton.addEventListener("click", setContact);

    title.appendChild(document.createTextNode("A "));
    title.appendChild(typicalSpan);
    title.appendChild(document.createTextNode(" Restaurant"));

    buttonsContainer.appendChild(menuButton);
    buttonsContainer.appendChild(contactButton);

    headerContainer.appendChild(title);
    headerContainer.appendChild(buttonsContainer);

    pageContainer.appendChild(headerContainer);
  }

  function setHome() {
    clearActive();

    cleanBody();
    pageContainer.appendChild(createHomeContainer());
  }

  function setMenu(event) {
    clearActive();
    event.target.classList.add("active");

    cleanBody();
    pageContainer.appendChild(createMenuContainer());
  }

  function setContact(event) {
    clearActive();
    event.target.classList.add("active");

    cleanBody();
    pageContainer.appendChild(createContactContainer());
  }

  function clearActive() {
    const preActiveButton = document.querySelector(".active");
    if (preActiveButton !== null) preActiveButton.classList.remove("active");
  }

  function cleanBody() {
    const main = document.querySelector("main");

    console.log("main");
    if (main !== null) {
      main.remove();
    }
  }

  return { setUp };
})();

export { displayController };
