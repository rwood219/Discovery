//Images for main image slider
let mainImageSlider = [
  "/Public/multiple-rings-diff-colors-unsplash.jpg",
 // "/Public/jewelry-banner.webp",
  "/Public/ring-black-bg.jpg",
];

let activeImage = document.getElementById("image-slider-active");
let currentIndex = 0;
function changeImage(arr) {
  activeImage.src = arr[currentIndex];
  currentIndex = (currentIndex + 1) % arr.length;
}

changeImage(mainImageSlider);
setInterval(() => changeImage(mainImageSlider), 5000);
