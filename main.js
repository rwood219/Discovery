//Images for main image slider
//Add arrays for each image slider//name consecutivly
let mainImageSlider = [
  "https://placehold.co/800x400", //Replace with company images for main slider
  "https://placehold.co/600x400",
  "https://placehold.co/700x400",
];

let secondImageSlider = [
  "https://placehold.co/1800x400", 
  "https://placehold.co/1600x400",
  "https://placehold.co/1700x400",
];
//Handles changing what image is displayed; this function iterates over the array thats passed to it
let activeImage = document.getElementById("image-slider-active");
let secondActiveImage = document.getElementById("second-image-slider-active");
let currentIndex = 0;
function changeImage(target, arr) {
  target.src = arr[currentIndex];
  currentIndex = (currentIndex + 1) % arr.length;
}
//Call funtions for image sliders
//Here you can specify which image array you want to use and set the time interval for photo changes
changeImage(secondActiveImage, secondImageSlider);
setInterval(() => changeImage(secondActiveImage, secondImageSlider), 4000);
changeImage(activeImage, mainImageSlider); //start slider and pass array to be used;
setInterval(() => changeImage(activeImage, mainImageSlider), 5000); //set interval for slider; change inteval in ms

//Sets banner logo image.
let logoText = document.querySelectorAll(".company-logo");
logoText.forEach((elem) => {
  elem.src = "https://placehold.co/800x400"; //-Replace with company Logo
});

//Set Store Hours
let sundayHours = document.querySelector("#sunday-hours");
let mondayHours = document.querySelector("#monday-hours");
let tuesdayHours = document.querySelector("#tuesday-hours");
let wednesdayHours = document.querySelector("#wednesday-hours");
let thursdayHours = document.querySelector("#thursday-hours");
let fridayHours = document.querySelector("#friday-hours");
let saturdayHours = document.querySelector("#saturday-hours");
sundayHours.innerHTML = "Sunday 10-5"; //-Change store hours here
mondayHours.innerHTML = "Monday 9-5";
tuesdayHours.innerHTML = "Tuesday 9-5";
wednesdayHours.innerHTML = "Wednesday 9-5";
thursdayHours.innerHTML = "Thursday 9-5";
fridayHours.innerHTML = "Friday 9-5";
saturdayHours.innerHTML = "Saturday 9-5";

//handle mobile nav bar collapse function
let navButton = document.querySelector(".nav-bar-expand");
navButton.addEventListener("click", () => {
  let mobileNavLinks = document.querySelector(".nav-links-mobile");
  mobileNavLinks.classList.toggle("disabled");
});
