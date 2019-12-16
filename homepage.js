window.addEventListener("DOMContentLoaded", Start);


let splashList=[];
const homepageUrl = "https://oscarbagger.dk/kea/10_Eksamensprojekt/wordpress/wp-json/wp/v2/homepage/";

let splashIndex=0;
let splashAmount;
let timer=5000;

const splashImg=document.querySelector(".currentSplash");
const prevSplash=document.querySelector(".prevSplash");

function Start()
{
    GetSplash();
}

async function GetSplash()
{
    const response = await fetch(homepageUrl);
    let homepageList = await response.json();
    splashList=homepageList[0].splash;
    console.log(splashList);
    splashImg.src=splashList[splashIndex].guid;
    
    splashAmount=splashList.length;
    // start udskiftning
    setTimeout(ChangeSplash, timer);
}

function ChangeSplash() {
    splashImg.classList.remove("transitionIn");
    prevSplash.src=splashList[splashIndex].guid;
    prevSplash.onload=() => {
        if (splashIndex+1<splashAmount)
        {splashIndex++}
        else {
            splashIndex=0;
        }
        splashImg.src=splashList[splashIndex].guid;
        splashImg.onload= () => {
            splashImg.classList.add("transitionIn");
        }
        setTimeout(ChangeSplash, timer);
    }
}