window.addEventListener("DOMContentLoaded", Start);

let content=[];
const header=document.querySelector("header");
const footerUrl = "";
const navUrl = "";
//const pageURl = "https://oscarbagger.dk/kea/10_Eksamensprojekt/wordpress/wp-json/wp/v2/pages/?&per_page=99";


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
            menu.src = src = "files/images/iconmonstr-x-mark-2.svg";
        } else {
            menuIsOpen = false;
            items.style.display = "none";
            menu.src = src = "files/images/iconmonstr-menu-1.svg";
        }
    })   
}