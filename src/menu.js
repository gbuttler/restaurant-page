const loadMenu = () => {
  console.log("menu has been loaded");
  //create page div
  let menuContent = document.createElement("div");

  //drinks div with a title and grid of available drinks (6)
  let drinksContent = document.createElement("div");

  //drinks heading
  let drinksTitle = document.createElement("h2");
  drinksTitle.className = "menu-title";
  drinksTitle.textContent = "Drinks";
  drinksContent.appendChild(drinksTitle);

  //drinks list
  let drinksList = document.createElement("div");
  drinksList.className = "menu-text";

  let drink1 = document.createElement("p");
  drink1.className = "avail-drinks";
  drink1.textContent = "drink 1";
  drinksList.appendChild(drink1);

  let drink2 = document.createElement("p");
  drink2.className = "avail-drinks";
  drink2.textContent = "drink 2";
  drinksList.appendChild(drink2);

  let drink3 = document.createElement("p");
  drink3.className = "avail-drinks";
  drink3.textContent = "drink 3";
  drinksList.appendChild(drink3);

  let drink4 = document.createElement("p");
  drink4.className = "avail-drinks";
  drink4.textContent = "drink 4";
  drinksList.appendChild(drink4);

  let drink5 = document.createElement("p");
  drink5.className = "avail-drinks";
  drink5.textContent = "drink 5";
  drinksList.appendChild(drink5);

  let drink6 = document.createElement("p");
  drink6.className = "avail-drinks";
  drink6.textContent = "drink 6";
  drinksList.appendChild(drink6);

  drinksContent.appendChild(drinksList);

  //create food div with a title and grid of available meals (9)
  let foodContent = document.createElement("div");

  //drinks heading
  let foodTitle = document.createElement("h2");
  foodTitle.className = "menu-title";
  foodTitle.textContent = "Food";
  drinksContent.appendChild(foodTitle);

  //drinks list
  let foodList = document.createElement("div");
  foodList.className = "menu-text";

  let food1 = document.createElement("p");
  food1.className = "avail-food";
  food1.textContent = "food 1";
  foodList.appendChild(food1);

  let food2 = document.createElement("p");
  food2.className = "avail-food";
  food2.textContent = "food 2";
  foodList.appendChild(food2);

  let food3 = document.createElement("p");
  food3.className = "avail-food";
  food3.textContent = "food 3";
  foodList.appendChild(food3);

  let food4 = document.createElement("p");
  food4.className = "avail-food";
  food4.textContent = "food 4";
  foodList.appendChild(food4);

  let food5 = document.createElement("p");
  food5.className = "avail-food";
  food5.textContent = "food 5";
  foodList.appendChild(food5);

  let food6 = document.createElement("p");
  food6.className = "avail-food";
  food6.textContent = "food 6";
  foodList.appendChild(food6);

  foodContent.appendChild(foodList);

  //append food and drinks to main page div
  menuContent.appendChild(drinksContent);
  menuContent.appendChild(foodContent);

  return menuContent;
};

export { loadMenu };
