const themeChange = document.querySelector('header img');


let theme = true; //true if theme is dark, false otherwise

themeChange.addEventListener('click', ()=>{
    document.body.classList.toggle('body-light');

    if(theme){
        themeChange.src = './images/icon-moon.svg';
        theme = false;
    }
    else{
        themeChange.src = './images/icon-sun.svg';
        theme = true;
    }
}); //Change the theme to light or dark