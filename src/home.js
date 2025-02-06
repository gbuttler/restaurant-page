import tenForwardView from "./images/ten-forward-view.jpg";
import drink from "./images/drink.jpg";

const loadHome = () => {
  console.log("home has been loaded");
  //create homepage div
  let homeContent = document.createElement("div");
  homeContent.className = "home-content";

  //create first image on page
  let viewImage = document.createElement("img");
  viewImage.id = "view-image";
  viewImage.src = tenForwardView;

  //create page description paragraph within a div
  let describeHome = document.createElement("div");
  describeHome.id = "describe-home";
  let describeText = document.createElement("p");
  describeText.className = "home-text";
  describeText.textContent =
    "Situated at the very front of the ship, view space in all it's glory while enjoying a glass of your favourite Aldebaran whiskey.";
  describeHome.appendChild(describeText);

  //create quote para within a div
  let testimonyHome = document.createElement("div");
  testimonyHome.id = "testimony-home";
  let testimonyText = document.createElement("p");
  testimonyText.className = "home-text";
  testimonyText.textContent = `"Ten Forward is the hub of the ship's social activity. Everyone on board comes here." Jean-Luc Picard`;
  testimonyHome.appendChild(testimonyText);

  //create final image
  let drinkImage = document.createElement("img");
  drinkImage.id = "drink-image";
  drinkImage.src = drink;

  //append them all to homeContent
  homeContent.appendChild(viewImage);
  homeContent.appendChild(describeHome);
  homeContent.appendChild(testimonyHome);
  homeContent.appendChild(drinkImage);

  return homeContent;
};

export { loadHome };
