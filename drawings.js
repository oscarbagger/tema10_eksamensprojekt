window.addEventListener("DOMContentLoaded", Start);

let content=[];
//const pageURl = "https://oscarbagger.dk/kea/10_Eksamensprojekt/wordpress/wp-json/wp/v2/pages/?&per_page=99";


let lists = document.querySelectorAll(".listDrawings");

function Start()
{
    lists.forEach( list => {
        let arrow=list.querySelector(".menuArrow");
        let grid=list.querySelector(".gridView");
        arrow.addEventListener("click", () => {
            console.log("click");
            if (arrow.alt=="arrowUp") {
                console.log("true");
                grid.style.display = "grid";
                arrow.alt="arrowDown";
                arrow.src= "files/images/arrow_down.svg";
            } else {
                console.log("false");
                grid.style.display = "none";
                arrow.alt="arrowUp";
                arrow.src= "files/images/arrow_up.svg";
            }
        })
    })
}