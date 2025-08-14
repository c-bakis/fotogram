
const imagesContainer = document.getElementById("imgDiv");
const dialog = document.getElementById("dialogContent");

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
  images.forEach((image, index) => {
    imagesContainer.innerHTML += `
      <img src="./assets/img/${image}" class="img-thumbnail" 
      id="${index}"
      onclick="openDialog(this)" alt="${image.slice(0, -4)}" />
    `;
  });
}

function openDialog(item) {
  createDialog(item);
  dialog.showModal();
}

createDialog = (item) => {
  dialog.innerHTML = "";
  dialog.innerHTML += `
  <div class="inner-dialog">
      <button class="close" onclick="closeDialog()" aria-label="Ansicht Schließen">&times;</button>
      ${item.outerHTML}
      <div class="next-and-prev-buttons">
        <button class="prev-image" id="prev" onclick="prevImage(${item.id})" aria-label="vorheriges Bild"><-</button>
        <button class="next-image" id="next" onclick="nextImage(${item.id})" aria-label="nächstes Bild">-></button>
      </div>
  </div>`;
}

function closeDialogOnClickOutside(event) {
  // Check if the click is outside the dialog content
  if (event.target === dialog) {
    closeDialog();
  }
}
function closeDialog() {
  // Check if the dialog is open before trying to close it
  if (dialog.open) {
    dialog.close();
    dialog.innerHTML = "";
  }
}

// showing next and previous image onclick
function nextImage(id) {
let nextId = id + 1; 
  if (id == images.length - 1) {
  nextId = 0;
  }
  const nextImage = document.getElementById(nextId);
createDialog(nextImage);
}

function prevImage(id) {
let prevId = id - 1; 
  if (id == 0) {
  prevId = images.length - 1;
  }
  const prevImage = document.getElementById(prevId);
createDialog(prevImage);
}