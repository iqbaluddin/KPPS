const boxToggle = document.querySelector('.boxToggle');
const navActive = document.querySelector('nav');
const ulActive = document.querySelector('ul');
const header = document.querySelector('header');


boxToggle.addEventListener('click', function(){
    boxToggle.classList.toggle('activeToggle');
    navActive.classList.toggle('navActive');
    ulActive.classList.toggle('ulActive');
});

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.documentElement.scrollTop > 1) {
        header.style.background = ('#fff');
        header.style.boxShadow = '0px 0 5px rgba(0, 0, 0, .2)';      
    } else {
        header.style.background = '';
        header.style.boxShadow = '';        
    }
  } 
