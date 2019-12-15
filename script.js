window.addEventListener("DOMContentLoaded", Start);

const header=document.querySelector("header");
let splash;

if(document.querySelector(".splash")!=null)
{splash=document.querySelector(".splash");} 


let menuIsOpen = false;

function Start()
{
    MakeBurgerMenu();
}

function MakeBurgerMenu() {

    let items = header.querySelector(".menuItems");
    let menu = header.querySelector(".burger");
    menu.addEventListener("click", () => {
        if (menuIsOpen == false) {
            menuIsOpen = true;
            items.style.display = "flex";
            menu.src = "files/images/iconmonstr-x-mark-2.svg";
            if(splash!=null)
            {splash.style.display="none";} 
        } else {
            menuIsOpen = false;
            items.style.display = "none";
            menu.src = "files/images/iconmonstr-menu-1.svg";
            if(splash!=null)
            {splash.style.display="block";} 
        }
    })   
}