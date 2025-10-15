<img align="left" src="https://github.com/c-bakis/fotogram/blob/main/assets/icons/favicon.svg" width="100" alt="logo"/> 
<br/>

# Fotogram
\
\
This is one of the projects I am creating as part of my advanced training at the Developer Akademie.
<br>
<br>
<br clear="left"/>

## Features

<img align="center" src="https://github.com/c-bakis/fotogram/blob/main/assets/img/readme_img.png" alt="fotogram" width="730"/>
<br/>
<img align="center" src="https://github.com/c-bakis/fotogram/blob/main/assets/img/readme_img_2.png" alt="fotogram" width="730"/>
<br/>
<p align="center">For this project, I choose to use pictures of my own flowers.</p>

<p align="center">All pictures are arranged in a grid and displayed in small format. Through a click on one of the pictures, you open a dialog that shows the original sized pictures.</p>

## My Process 

### Built with

 - HTML 5
 - CSS 3
 - Vanilla JavaScript

### Learning experience

One click on an image opens a dialog. As you can see below, I wrote a template for filling the dialog dynamically with the image that was clicked. 
But the real challenging part was to be able, to click through all the images from this dialog and also show the first picture 
after the last one and the other way around.

```bash

function openDialog(item) {
  createDialog(item);
  dialog.showModal();
}

let createDialog = (item) => {
  dialog.innerHTML = "";
  dialog.innerHTML += getDialogTemplate(item);
}     

function getDialogTemplate(item) {
  return `
  <div class="inner-dialog">
      <button class="close" onclick="closeDialog()" aria-label="Ansicht Schließen">&times;</button>
      ${item.outerHTML}
      <div class="next-and-prev-buttons">
        <button class="prev-image" id="prev" onclick="prevImage(${item.id})" aria-label="vorheriges Bild">
          <img src="./assets/icons/arrow.svg" aria-labelledby="next" class="arrow next" id="nextArrow" 
            alt="Next Image">
        </button>
        <button class="next-image" id="next" onclick="nextImage(${item.id})" aria-label="nächstes Bild">
          <img src="./assets/icons/arrow.svg" aria-labelledby="next" class="arrow prev" id="nextArrow" 
            alt="Next Image">
        </button>
      </div>
  </div>
  `;
}
```
<br/>

## Installation

clone repository:
```bash
git clone https://github.com/c-bakis/fotogram.git
```

Navigate to the project repository
```bash
cd fotogram
```


<br/>

## Contributing

You are welcome to contribute to my project by creating an issure or making a pull request

## Author 

my Profile [ch-bakis](https://github.com/c-bakis)

## License

MIT License
