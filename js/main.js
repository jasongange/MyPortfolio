//select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu =  document.querySelector('.menu');
const menuNav =  document.querySelector('.menu-nav');
const menuBranding =  document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const body = document.querySelector('body')
const spinner = document.querySelector('.lds-spinner')
const download = document.querySelector('#download')




//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        //Set Menu State
        showMenu = true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //Set Menu State
        showMenu = false;

    }
}

//Spinner on reload
document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        body.style.visibility= "hidden"; 
        spinner.style.visibility = "visible"; 
    } else { 
        spinner.style.display = "none"; 
        body.style.visibility = "visible"; 
    } 
}; 
