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

$(document).ready(function(){
    setTimeout(function(){
        $('#imagepopup').css('display','block');
    },2000)
}
    
    
);

