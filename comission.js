window.addEventListener("DOMContentLoaded", Start);

let drawings=[];
const drawingUrl = "https://oscarbagger.dk/kea/10_Eksamensprojekt/wordpress/wp-json/wp/v2/comission/?&per_page=99";


const temp = document.querySelector("template");
const comList = document.querySelector(".comissionList");


function Start()
{
    GetJson();
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

        comList.appendChild(clone);
    })
}