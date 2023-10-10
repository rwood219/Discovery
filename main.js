console.log("conn");

let imageSlider = ["./Public/jewerly banner.webp", "./logo.webp"];
let testArray = [1, 2, 3, 4, 5];
let activeImage = document.querySelector("#image-slider-active");

changeImage = () => {
  //change image and create dom emelent for each array item in imageslider
  for (i = 0; i <= testArray.length; i++) {
    setInterval(() => {
      // console.log(testArray[i]);

    },5000)
  }
};
changeImage()