const progressBar = document.querySelector("#progressbar");
const section = document.querySelector("section");

const animateProgressBar = () => {
    let scrollDistance = 1123 - section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / section.getBoundingClientRect().height) * 10;
    let value = Math.floor(progressWidth);

    progressBar.style.width = value + '%'
}

window.addEventListener('scroll', animateProgressBar)