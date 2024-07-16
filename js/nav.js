const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menuList = document.querySelector("nav ul");
const navScroll = document.querySelector('nav');


// toggle the dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}


// scroll events listener
window.addEventListener('scroll', () => {
    navScroll.classList.toggle('window-scroll', window.scrollY > 0)
})


// nav list animation 
menuBtn.addEventListener("click", function() {
    menuList.style.animation = "sidebar-animation 2.5s forwards";
});


// close and hamurger buttons 
menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
})