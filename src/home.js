import homeImg from "./img/home.png";

export function renderHome() {
  const content = document.querySelector("#content");

  const wrapper = document.createElement("div");
  wrapper.classList.add("home-wrapper");

  const textWrapper = document.createElement("div");
  textWrapper.classList.add("text-wrapper");

  const title = document.createElement("h1");
  title.classList.add("home-title");
  title.textContent = "Experience Culinary Excellence";

  const description = document.createElement("p");
  description.classList.add("home-description");
  description.textContent =
    "Savor exquisite flavors in the heart of curated elegance.";

  textWrapper.append(title, description);

  const image = document.createElement("img");
  image.src = homeImg;
  image.classList.add("home-image");

  wrapper.append(textWrapper, image);
  content.appendChild(wrapper);
}
