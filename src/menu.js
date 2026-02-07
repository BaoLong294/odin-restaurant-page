import menu1 from "./img/menu1.png";
import menu2 from "./img/menu2.png";
import menu3 from "./img/menu3.png";
import menu4 from "./img/menu4.png";
import menu5 from "./img/menu5.png";

export function renderMenu() {
  const content = document.querySelector("#content");

  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-wrapper");

  const title = document.createElement("h1");
  title.classList.add("menu-title");
  title.textContent = "Our Exquisite Offerings";

  const menu = document.createElement("div");
  menu.classList.add("menu-grid");

  const dishes = [
    {
      name: "Duck & Plum",
      description: "Crispy skin duck with rich plum reduction",
      price: 58,
      img: menu2,
    },
    {
      name: "Butter Poached Cod",
      description: "Flaky cod, young carrots, asparagus spears",
      price: 62,
      img: menu5,
    },
    {
      name: "Saffron Scallop Risotto",
      description: "Pan-seared scallops over golden saffron rice",
      price: 45,
      img: menu1,
    },
    {
      name: "Pea & Prosciutto",
      description: "Poached egg, mint mousse, crispy ham.",
      price: 32,
      img: menu3,
    },
    {
      name: "Chocolate Lava Noir",
      description: "Molten cacao, vanilla bean, fresh raspberry",
      price: 28,
      img: menu4,
    },
  ];

  dishes.forEach((dish) => {
    const item = document.createElement("div");
    item.classList.add("menu-item");

    item.innerHTML = `
      <img src="${dish.img}" alt="${dish.name}">
      <h2>${dish.name}</h2>
      <p class="description">${dish.description}</p>
      <p class="price">$${dish.price}</p>
    `;

    menu.appendChild(item);
  });

  menuWrapper.append(title, menu);
  content.appendChild(menuWrapper);
}
