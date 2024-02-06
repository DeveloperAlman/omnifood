// Set current year in copyright
const year = document.querySelector(".current-year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

//Mobile navigation
const html = document.querySelector("html");
const btnNav = document.querySelector(".btn-mobile-nav");
const mobileNav = document.querySelector(".header__nav-list");

btnNav.addEventListener("click", function () {
    mobileNav.classList.toggle("mobile-open");
    html.classList.toggle("html-overflow");
});

// Hamburger animation
const menu = document.querySelector("svg");
menu.addEventListener("click", morph);

function morph() {
    menu.classList.toggle("open");
}

// Smooth scrolling
const allLinks = document.querySelectorAll("a[href^='#']");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                behavior: "smooth"
            });
        }

        // Close mobile naviagtion
        if (link.classList.contains("header__nav-link"))
            mobileNav.classList.toggle("mobile-open"),
            menu.classList.toggle("open"),
            html.classList.toggle("html-overflow");
    });
});

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// Scrollbar
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

// Animation on scroll
window.onscroll = () => {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
    const nav = document.querySelector(".header__nav");
    const logo = document.querySelector(".header__nav-logo");

    if (this.scrollY <= 50)
        nav.style.backgroundColor = 'rgba(0,0,0,0)',
        nav.style.boxShadow = '0 1rem 3rem rgba(0,0,0,0)',
        nav.style.padding = '3rem';
    else
        nav.style.backgroundColor = 'rgba(255,255,255,0.75)',
        nav.style.boxShadow = '0 1rem 3rem rgba(0,0,0,0.07)',
        nav.style.padding = '1.2rem 3rem';
    if (this.scrollY <= 50)
        logo.style.width = '26.5rem';

    else
        logo.style.width = '26.5rem';
}