var images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Array of image file names
var currentIndex = 0; // Current index of the displayed image

function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  document.getElementById("image").src = images[currentIndex];
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  document.getElementById("image").src = images[currentIndex];
}


