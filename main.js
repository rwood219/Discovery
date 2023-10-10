//Images for main image slider
let mainImageSlider = [
    "/Public/multiple-rings-diff-colors-unsplash.jpg",
    "/Public/jewelry-banner.webp", 
    "/Public/ring-black-bg.jpg",
  ];
  
  let activeImage = document.getElementById("image-slider-active");
  let currentIndex = 0; // Variable to keep track of the current image index
  
  function changeImage() {
    console.log(activeImage.src);
    activeImage.src = mainImageSlider[currentIndex];
    currentIndex = (currentIndex + 1) % mainImageSlider.length; // Move to the next image
  }
  
  // Call changeImage initially
  changeImage();
  
  // Set up an interval to change images every 5 seconds
  setInterval(changeImage, 5000);
  

//changeImage();
