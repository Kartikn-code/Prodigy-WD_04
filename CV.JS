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


/*var popup=document.querySelector('.popup');
var togglepopup=document.querySelector('.togglepopup');
var login=document.querySelector('.login').addEventListener('click',()=>{
    popup.style.display="block";
    togglepopup.style.display="block";
});
var cancel=document.querySelector(".cancel").addEventListener('click',()=>{
    popup.style.display="none";
    togglepopup.style.display="none";
});*/
var blackdisplay=document.querySelector('.blackdisplay');
var projects=document.querySelector('.projects');
var parapopup =document.querySelector('.pro1-para');
var popup1=document.querySelector('.pro2-para');
var popup2=document.querySelector('.pro3-para');
var pro=document.querySelector('.pro');


var cancel1=document.querySelector('.cancel1').addEventListener('click',()=>{
    blackdisplay.style.display='none';
    parapopup.style.display='none';
    
})
 var buttonpopup=document.querySelector('.popup1').addEventListener('click',()=>{
    parapopup.style.display='block';
    parapopup.style.transition=" all 2s ease";
    blackdisplay.style.display='block';
   
   
   
})
var div2popup=document.querySelector('.popup2').addEventListener('click',()=>{
    popup1.style.display='block';
    blackdisplay.style.display='block';
    
})
var cancel2=document.querySelector('.cancel2').addEventListener('click',()=>{
    blackdisplay.style.display='none';
    popup1.style.display='none';
    
})
var button2=document.querySelector('.popup3').addEventListener('click',()=>{
    blackdisplay.style.display='block';
    popup2.style.display='block';
    
});
var cancel3=document.querySelector(".cancel3").addEventListener('click',()=>{
    blackdisplay.style.display='none';
    popup2.style.display='none';
})
