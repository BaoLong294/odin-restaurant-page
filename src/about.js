import aboutImg from "./img/about.png";

export function renderAbout() {
  const content = document.querySelector("#content");

  const wrapper = document.createElement("div");
  wrapper.classList.add("about-wrapper");

  const title = document.createElement("h1");
  title.textContent = "Our Story";

  const description = document.createElement("p");
  description.classList.add("about-description");
  description.textContent =
    "True elegance is felt, not just seen. At The Golden Spoon, we believe that the finest flavors emerge from the harmony of simplicity and intention. Every dish tells a story of heritage, crafted with the quiet precision of seasonal ingredients and a passion for culinary artistry. We invite you to linger, to savor, and to find yourself at home in an atmosphere where time slows down and every moment is an occasion.";

  const sign = document.createElement("p");
  sign.classList.add("about-sign");
  sign.textContent = "Long";

  wrapper.append(title, description, sign);

  const image = document.createElement("img");
  image.src = aboutImg;
  image.alt = "Restaurant entrance";

  content.append(wrapper, image);
}
