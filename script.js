// NAV SECTION 
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");

    // icon change
    hamburger.innerHTML = menu.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// HERO_SECTION
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide(){
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide(){
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

/* Auto sliding */
setInterval(nextSlide, 4000);

// **************************CALL SECTION **************************
document.querySelectorAll(".call-btn").forEach(btn => {
  btn.onclick = () => {
    window.location.href = "tel:7777059620";
  };
});

document.querySelectorAll(".wa-btn").forEach(btn=>{
  btn.onclick = () => window.open("https://wa.me/917777059620", "_blank");
});

