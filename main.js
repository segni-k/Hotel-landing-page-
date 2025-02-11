const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOPen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOPen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "150px",
    origin: "bottom",
    duration: 1000,

};
const scrollRevealOptionL = {
    distance: "150px",
    origin: "left",
    duration: 1000,

};
const scrollRevealOptionR = {
    distance: "150px",
    origin: "right",
    duration: 1000,

};



ScrollReveal().reveal('.header__container .section__subheader', {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay:1500
});


//booking
ScrollReveal().reveal('.booking__container label', {
    ...scrollRevealOptionL,
    delay:500
});
ScrollReveal().reveal(".booking__container input", {
    ...scrollRevealOptionR,
    delay:1500
});
ScrollReveal().reveal(".booking__container .btn", {
    ...scrollRevealOption,
    delay:2000
});

//about

ScrollReveal().reveal('.about__container .first__image', {
    ...scrollRevealOption,
    delay:500
});
ScrollReveal().reveal(".about__container .first__card", {
    ...scrollRevealOption,
    delay:1500
});
ScrollReveal().reveal('.about__container .second__image', {
    ...scrollRevealOption,
    delay:2500
});
ScrollReveal().reveal(".about__container .second__card", {
    ...scrollRevealOption,
    delay:3500
});



ScrollReveal().reveal('.about__container .section__subheader', {
    ...scrollRevealOptionL,
    delay:500
});
ScrollReveal().reveal(".about__container .section__header", {
    ...scrollRevealOptionR,
    delay:1000
});
ScrollReveal().reveal('.about__container .section__description', {
    ...scrollRevealOptionL,
    delay:1500
});
ScrollReveal().reveal(".about__container .btn", {
    ...scrollRevealOptionR,
    delay:2000
});





//room container

ScrollReveal().reveal('.room__container .section__subheader', {
    ...scrollRevealOptionL,
    delay:500
});
ScrollReveal().reveal(".room__container .section__header", {
    ...scrollRevealOptionR,
    delay:1000
});

ScrollReveal().reveal(".room__card", {
    ...scrollRevealOption,
    interval: 1000,
});

//intro container
ScrollReveal().reveal('.intro__container .section__subheader', {
    ...scrollRevealOptionL,
    delay:500
});
ScrollReveal().reveal(".intro__container .section__header", {
    ...scrollRevealOptionR,
    delay:1000
});
ScrollReveal().reveal('.intro__container .section__description', {
    ...scrollRevealOptionL,
    delay:1500
});
ScrollReveal().reveal(".intro__container .btn", {
    ...scrollRevealOptionR,
    delay:2000
});
//feature container
ScrollReveal().reveal('.feature__container .section__subheader', {
    ...scrollRevealOptionL,
    delay:500
});
ScrollReveal().reveal(".feature__container .section__header", {
    ...scrollRevealOptionR,
    delay:1000
});
ScrollReveal().reveal(".feature__card", {
    ...scrollRevealOption,
    interval: 1000,
});

//menu container
ScrollReveal().reveal('.menu__items h4', {
    ...scrollRevealOptionL,
    delay:500
});
ScrollReveal().reveal(".menu__items p", {
    ...scrollRevealOptionR,
    delay:1000
});
ScrollReveal().reveal(".menu__items li", {
    ...scrollRevealOption,
    interval: 1000,
});
ScrollReveal().reveal('.menu__container .section__subheader', {
    ...scrollRevealOptionL,
    delay:500
});
ScrollReveal().reveal(".menu__container .section__header", {
    ...scrollRevealOptionR,
    delay:1000
});

//menu__images
ScrollReveal().reveal(".menu__images img", {
    ...scrollRevealOption,
    interval:1000
});

//menu banner

ScrollReveal().reveal(".menu__banner", {
    ...scrollRevealOption,
    delay:500
});
//news container

ScrollReveal().reveal('.news__container .section__subheader', {
    ...scrollRevealOptionL,
    delay:500
});
ScrollReveal().reveal(".news__container .section__header", {
    ...scrollRevealOptionR,
    delay:1000
});

ScrollReveal().reveal(".news__card", {
    ...scrollRevealOption,
    interval: 1000,
});