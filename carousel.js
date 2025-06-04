let slideIndex = 1;
arata_slide(slideIndex);

function urm_slide(n) {
  arata_slide(slideIndex += n);
}

function slide_actual(n) {
  arata_slide(slideIndex = n);
}

function arata_slide(n) {
  let slides = document.getElementsByClassName("slide");
  let indicators = document.getElementsByClassName("indicator");
  
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("fade");
  }
  
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", "");
  }
  
  let currentSlide = slides[slideIndex - 1];
  currentSlide.style.display = "block";
  currentSlide.classList.add("fade");
  currentSlide.addEventListener("animationend", function() {
    currentSlide.classList.remove("fade");
  }, { once: true });
  
  if (indicators.length > 0) {
    indicators[slideIndex - 1].className += " active";
  }
}