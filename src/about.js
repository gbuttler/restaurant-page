import enterprise from "./images/enterprise.jpg";

const loadAbout = () => {
  console.log("about has been loaded");

  //overall content div
  let aboutContent = document.createElement("div");
  aboutContent.className = "about-content";

  //left hand div (containing about para and image)
  let leftAbout = document.createElement("div");
  leftAbout.className = "left-about";

  //ship image
  let shipImage = document.createElement("img");
  shipImage.id = "ship-image";
  shipImage.src = enterprise;
  leftAbout.appendChild(shipImage);

  //about div
  let about = document.createElement("div");
  about.className = "about-about";
  leftAbout.appendChild(about);

  //about title (h2)
  let aboutTitle = document.createElement("h2");
  aboutTitle.className = "about-title";
  aboutTitle.textContent = "About";
  about.appendChild(aboutTitle);

  //about para
  let aboutPara = document.createElement("p");
  aboutPara.className = "about-text";
  aboutPara.textContent =
    "Ten Forward is the best (and only) real-life lounge aboard the USS Enterprise (NCC-1701-D).";
  about.appendChild(aboutPara);

  //right hand div (to contain find us and contact)
  let rightAbout = document.createElement("div");
  rightAbout.className = "right-about";

  //find us div
  let findUs = document.createElement("div");
  findUs.className = "find-us-about";
  rightAbout.appendChild(findUs);

  //find us title (h2)
  let findUsTitle = document.createElement("h2");
  findUsTitle.className = "about-title";
  findUsTitle.textContent = "Find Us";
  findUs.appendChild(findUsTitle);

  //find us para
  let findUsPara = document.createElement("p");
  findUsPara.className = "about-text";
  findUsPara.textContent =
    "You can find us at the front of Deck 10. You obviously have to be on-board the ship. If you aren't on-board the ship, we reccomend you contact Starfleet command.";
  findUs.appendChild(findUsPara);

  //contact div
  let contactUs = document.createElement("div");
  contactUs.className = "contact-us-about";
  rightAbout.appendChild(contactUs);

  //contact title (h2)
  let contactUsTitle = document.createElement("h2");
  contactUsTitle.className = "about-title";
  contactUsTitle.textContent = "Contact Us";
  contactUs.appendChild(contactUsTitle);

  //contact para
  let contactUsPara = document.createElement("p");
  contactUsPara.className = "about-text";
  contactUsPara.textContent =
    "Contact us using your comm badge, or your nearest comm panel.";
  contactUs.appendChild(contactUsPara);

  //append everything to about content
  aboutContent.appendChild(leftAbout);
  aboutContent.appendChild(rightAbout);

  return aboutContent;
};

export { loadAbout };
