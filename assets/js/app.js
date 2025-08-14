
const imagesContainer = document.getElementById("imgDiv");

let images = [
  "orangene Taglilie.jpg",
  "Hortensie blau.jpg",
  "schwarzäugige Rudbeckie.jpg",
  "tiefrote Nelke.jpg",
  "Dahlie und Zinnine in rot.jpg",
  "Ringelblumen.jpg",
  "rosafarbene Kosmeen.jpg",
  "weisse kosmeen.jpg",
  "Purpur Sonnenhut in rosa.jpg",
  "Feuer Lilie.jpg",
  "orangene Dahlien.jpg",
  "Bauernnelken.jpg",
];

function displayImages() {
  images.forEach((image) => {
    imagesContainer.innerHTML += `
      <img src="./assets/img/${image}" class="img-thumbnail" alt="${image.slice(0, -4)}" />
    `;
  });
}