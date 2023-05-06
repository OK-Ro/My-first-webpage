
//SLIDE-SHOW-SCRIPT

//current slide displayed
  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  // Resetting slide index if it exceeds the total number of slides
  if (n > slides.length) { slideIndex = 1 }

  // Resetting slide index if it goes below 1
  if (n < 1) { slideIndex = slides.length }

   // Hiding all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Displaying the current slide
  slides[slideIndex - 1].style.display = "block";
}

//NAV-TOGGLER SCRIPT
var menu = document.getElementById("bar");
var items = document.getElementById("navbar");

items.style.right = "-360px";

menu.onclick = function() {
  if (items.style.right == "-360px") {
      items.style.right = "0";
  }
  else {
      items.style.right = "-360px";
  }
}



