import "../css/contact.css";

const createContactContainer = () => {
  const contactContainer = document.createElement("main");
  const inputsContainer = document.createElement("div");
  const socialContainer = document.createElement("div");
  const emailAddressTitle = document.createElement("h3");
  const emailAddress = document.createElement("p");
  const followUsTitle = document.createElement("h3");

  contactContainer.classList.add("contact-container");
  inputsContainer.classList.add("inputs-container");
  socialContainer.classList.add("social-container");

  emailAddressTitle.classList.add("social-title");
  emailAddressTitle.textContent = "Email Address";

  emailAddress.textContent = "hello@atypicalrestaurant.com";

  followUsTitle.classList.add("social-title");
  followUsTitle.textContent = "Follow Us";

  inputsContainer.appendChild(createInput("name"));
  inputsContainer.appendChild(createInput("email"));
  inputsContainer.appendChild(createInput("subject"));
  inputsContainer.appendChild(createArea());

  socialContainer.appendChild(emailAddressTitle);
  socialContainer.appendChild(emailAddress);
  socialContainer.appendChild(followUsTitle);
  socialContainer.appendChild(createAuthor());

  contactContainer.appendChild(inputsContainer);
  contactContainer.appendChild(socialContainer);

  return contactContainer;
};

function createInput(name) {
  const label = document.createElement("label");
  const input = document.createElement("input");

  label.classList.add("label");
  label.htmlFor = name + "-input";
  label.textContent = name;

  input.classList.add("input");
  input.id = name + "-input";
  input.name = name + "-input";

  label.appendChild(input);
  return label;
}

function createArea() {
  const label = document.createElement("label");
  const area = document.createElement("textarea");

  label.classList.add("label");
  label.htmlFor = "message-area";
  label.textContent = "message";

  area.classList.add("area");
  area.id = "message-area";
  area.name = "message-area";

  label.appendChild(area);

  return label;
}

function createAuthor() {
  const pageAuthor = document.createElement("p");

  pageAuthor.classList.add("author");
  pageAuthor.textContent = "By Sergio García";

  return pageAuthor;
}

export default createContactContainer;
