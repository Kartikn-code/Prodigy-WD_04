// Add event listeners to navbar links
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetSection = document.querySelector(`.${event.target.textContent.toLowerCase()}`);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to hero button
document.querySelector('.hero button').addEventListener('click', event => {
    event.preventDefault();
    const aboutMeSection = document.querySelector('.about-me');
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
});

var popup=document.querySelector('.popup');
var login=document.querySelector('.login').addEventListener('click',()=>{
    popup.style.display="none";
})

