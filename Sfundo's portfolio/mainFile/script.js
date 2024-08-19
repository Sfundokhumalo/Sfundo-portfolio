const heroBtn = document.getElementById('hero-button');
const toggleBtn = document.getElementById('toggle-button');
var toggleContent = document.getElementById('nav-links');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3')
const developer = document.getElementById('developer');
const designer = document.getElementById('designer');
const links = document.getElementById('links');
const aboutBtn = document.getElementById('hero-button');
const about = document.getElementById('about-section');

const fonts = ["inter", "Foldit", "honk", "Bungee spice",];
let currentFont = 0

video1.playbackRate = 2.5;
video2.playbackRate = 2.5;
video3.playbackRate = 2.5;

heroBtn.addEventListener('mouseover', () =>{
    document.getElementById('hero-about').style.opacity = '1'; 
    heroBtn.textContent = 'Read more'
})
heroBtn.addEventListener('mouseleave', () =>{
    document.getElementById('hero-about').style.opacity = '0';
    heroBtn.textContent = 'About me' 
})

toggleBtn.addEventListener('click', () => {
    toggleContent.style.display = toggleContent.style.display === "block" ? "none" : "block";

    toggleContent.classList.toggle('active')
})

links.addEventListener('click', () => {
    toggleContent.style.display = "none"
})

video1.addEventListener('mouseover',() => {
    video1.play();
})
video1.addEventListener('mouseleave',() => {
    video1.pause();
})

video2.addEventListener('mouseover',() => {
    video2.play();
})
video2.addEventListener('mouseleave',() => {
    video2.pause();
})

video3.addEventListener('mouseover',() => {
    video3.play();
})
video3.addEventListener('mouseleave',() => {
    video3.pause();
})

function changeFont() {
    // developer.style.fontFamily = fonts[currentFont];
    designer.style.fontFamily = fonts[currentFont];

    currentFont = (currentFont + 1) % fonts.length;
}

setInterval(changeFont, 1000);

aboutBtn.addEventListener('click', () =>{
    about.scrollIntoView({behavior: "smooth"})
})


