// Инициализация слайдера
var slideIndex = 0;
showSlides();

let dots = document.querySelectorAll(".slider_dots--item");
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => currentSlide(i));
}

let next = document.querySelector(".slider--next");
next.addEventListener('click', plusSlide);

let prev = document.querySelector(".slider--prev");
prev.addEventListener('click', minusSlide);

let slider = document.querySelector('.slider');
let mc = new Hammer(slider);
mc.on("panleft", function (ev) {
    minusSlide();
});
mc.on("panright", function (ev) {
    plusSlide();
});

//-------------------
//     Функции
//-------------------

// Функция увеличивает индекс на 1, показывает следующй слайд
function plusSlide() {
    slideIndex += 1;
    showSlides();
}

// Функция уменьшает индекс на 1, показывает предыдущий слайд
function minusSlide() {
    slideIndex -= 1;
    showSlides();
}

// Устанавливает текущий слайд 
function currentSlide(index) {
    slideIndex = index;
    showSlides();
}

// Основная функция слайдера
function showSlides() {
    let slides = document.querySelectorAll(".slider--item");
    let dots = document.querySelectorAll(".slider_dots--item");

    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}
