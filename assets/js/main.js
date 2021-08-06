/* ========== Nav Toggle ========== */
const navToggle = document.getElementById("nav-toggle-icon"),
    navMenu = document.getElementById("nav-menu"),
    links = document.querySelectorAll(".nav__link");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");

        if (navToggle.classList.contains("ri-function-line")) {
            navToggle.classList.remove("ri-function-line");
            navToggle.classList.add("ri-close-fill");
        } else {
            navToggle.classList.add("ri-function-line");
            navToggle.classList.remove("ri-close-fill");
        }
    });
}

document.addEventListener("click", (e) => {
    /* ========== REMUVE MENU MOBILE ========= */
    if (e.target.id !== "nav-toggle-icon" && e.target.id !== "nav-menu") {
        navMenu.classList.remove("show-menu");
        navToggle.classList.add("ri-function-line");
        navToggle.classList.remove("ri-close-fill");
    }

    /* ========== ACTIVE LINK ========== */
    if (e.target.className === "nav__link") {
        links.forEach((link) => link.classList.remove("active"));
        e.target.classList.add("active");
    }
    if (e.target.matches(".nav__icon")) {
        links.forEach((link) => link.classList.remove("active"));
        e.target.parentElement.classList.add("active");
    }
});

/* ========== SCROLL SECTIONS ACTIVE LINK ========== */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/* ========== SWIPER JS ========== */
var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 252,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

/* ========== SCROLL REVEAL ANIMATION ========= */
const sr = ScrollReveal({
    distance: "60px",
    duration: 2800,
    reset: true,
});

sr.reveal(`.home__data`, {
    origin: "top",
    interval: 100,
});

sr.reveal(`.section__title, .services__description, .services__card`, {
    origin: "bottom",
    interval: 100,
});

sr.reveal(`.home__social, .about__img`, {
    origin: "left",
});

sr.reveal(`.about__data`, {
    origin: "right",
    interval: 100,
});

sr.reveal(`.contact__data, .contact__form`, {
    distance: "0px",
    opacity: 0,
});
