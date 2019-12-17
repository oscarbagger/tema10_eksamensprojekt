window.addEventListener("DOMContentLoaded", Start);

let drawings=[];
const drawingUrl = "https://oscarbagger.dk/kea/10_Eksamensprojekt/wordpress/wp-json/wp/v2/drawing/?&per_page=99";


const temp = document.querySelector("template");
const classic = document.querySelector("#classic");
const live = document.querySelector("#live");
const personal = document.querySelector("#personal");

const lists= document.querySelectorAll(".listDrawings")

function Start()
{
    GetJson();
    lists.forEach( list => {
        let arrow=list.querySelector(".menuArrow");
        let grid=list.querySelector(".gridView");
        arrow.alt="arrowUp";
        arrow.src= "files/images/arrow_up.svg"; 
    })
    CheckIfDesktop();
}
                      
function CheckIfDesktop()
{
    console.log(window.screen.width);
    if (window.screen.width>800 )   
    {
        lists.forEach( list => {
            let arrow=list.querySelector(".menuArrow");
            let grid=list.querySelector(".gridView");
            grid.style.display = "flex";
            arrow.alt="arrowDown";
            arrow.src= "files/images/arrow_down.svg"; 
        })
    }       
}

async function GetJson() {
    const response = await fetch(drawingUrl);
    drawings = await response.json();
    console.log(drawings);
    ShowDrawings();
}


function ShowDrawings() {
    drawings.forEach(draw => {
        let clone = temp.cloneNode(true).content;
        clone.querySelector("img").src = draw.billede.guid;
        clone.querySelector("img").alt = draw.title.rendered;
        clone.querySelector(".drawingTitle").textContent =draw.title.rendered;
        clone.querySelector(".drawingText").textContent =draw.beskrivelse;
        switch(draw.kategori[0])
            {
                case "Classical longstudies":
                    classic.appendChild(clone);
                    break;
                case "Live drawing sessions":
                    live.appendChild(clone);
                    break;
                case "Personal projects":
                    personal.appendChild(clone);
                    break;
                default:
                    console.log("No match for:"+draw.title.rendered);
                    break;
            }
    })
    ActivateArrows();
}

function ActivateArrows()
{
    lists.forEach( list => {
        let arrow=list.querySelector(".menuArrow");
        let headerText=list.querySelector("h2");
        let grid=list.querySelector(".gridView");
        arrow.addEventListener("click", () => {
            if (arrow.alt=="arrowUp") {
                arrow.alt="arrowDown";
                arrow.src= "files/images/arrow_down.svg";
                if (window.screen.width<800)
                {
                    grid.style.display = "grid";
                }
                else {
                    grid.style.display = "flex";
                }
            } 
            else 
            {
                grid.style.display = "none";
                arrow.alt="arrowUp";
                arrow.src= "files/images/arrow_up.svg";
            }
        })
        headerText.addEventListener("click", () => {
            if (arrow.alt=="arrowUp") {
                arrow.alt="arrowDown";
                arrow.src= "files/images/arrow_down.svg";
                if (window.screen.width<800)
                {
                    grid.style.display = "grid";
                }
                else {
                    grid.style.display = "flex";
                }
            } 
            else 
            {
                grid.style.display = "none";
                arrow.alt="arrowUp";
                arrow.src= "files/images/arrow_up.svg";
            }
        })
    })
}