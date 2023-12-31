import "../css/contact.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/brands";

const contactDisplayController = (() => {
  const createContactContainer = () => {
    const contactContainer = document.createElement("main");
    const inputsContainer = document.createElement("div");
    const socialContainer = document.createElement("div");
    const iconsContainer = document.createElement("div");
    const sendButton = document.createElement("button");
    const emailAddressTitle = document.createElement("h3");
    const emailAddress = document.createElement("p");
    const followUsTitle = document.createElement("h3");

    contactContainer.classList.add("contact-container");
    inputsContainer.classList.add("inputs-container");
    socialContainer.classList.add("social-container");
    iconsContainer.classList.add("icons-container");

    sendButton.textContent = "Send";
    sendButton.classList.add("send-button");
    sendButton.type = "button";

    emailAddressTitle.classList.add("social-title");
    emailAddressTitle.textContent = "Email Address";
    emailAddress.textContent = "hello@atypicalrestaurant.com";

    followUsTitle.classList.add("social-title");
    followUsTitle.textContent = "Follow Us";

    inputsContainer.appendChild(createInput("name"));
    inputsContainer.appendChild(createInput("email"));
    inputsContainer.appendChild(createInput("subject"));
    inputsContainer.appendChild(createArea());
    inputsContainer.appendChild(sendButton);

    iconsContainer.appendChild(createSocialIcon("fa-brands fa-facebook"));
    iconsContainer.appendChild(createSocialIcon("fa-brands fa-instagram"));
    iconsContainer.appendChild(createSocialIcon("fa-brands fa-linkedin"));

    socialContainer.appendChild(emailAddressTitle);
    socialContainer.appendChild(emailAddress);
    socialContainer.appendChild(followUsTitle);
    socialContainer.appendChild(iconsContainer);

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

  function createSocialIcon(iconType) {
    const icon = document.createElement("i");
    icon.className = iconType;
    return icon;
  }

  return { createContactContainer };
})();

export { contactDisplayController };
