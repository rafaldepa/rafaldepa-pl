const trigger = document.querySelectorAll('.app__button');
const image = document.querySelector('.app__image');

trigger.forEach(function(button) {
    button.addEventListener("mouseenter", () => {   
        image.classList.add('app__image--colored');
    });
    button.addEventListener("mouseleave", () => {   
        image.classList.remove('app__image--colored');
    });
});