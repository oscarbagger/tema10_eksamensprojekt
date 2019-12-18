window.addEventListener("DOMContentLoaded", Start);


let splashList=[];
const homepageUrl = "https://oscarbagger.dk/kea/10_Eksamensprojekt/wordpress/wp-json/wp/v2/homepage/";

let splashIndex=0;
let splashAmount;
let timer=6000;

let splashImgList=[];

const splashImg=document.querySelector(".currentSplash");
const prevSplash=document.querySelector(".prevSplash");
const splashButton=document.querySelector(".splash button");

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

    splashAmount=splashList.length;
    
    // preload images for splash
    for(i=0; i<splashAmount; i++)
        {
            splashImgList[i]=preloadImage(splashList[i].guid);
        }
    splashImg.src=splashImgList[splashIndex].src;
    if (window.screen.width>800 )  
        {
            splashImg.onload=()=> {
                splashButton.style.display="block"; 
            }
        }
    // start udskiftning
    setTimeout(ChangeSplash, timer);
}

function preloadImage(url)
{
    var img=new Image();
    img.src=url;
    return img;
}

function ChangeSplash() {
    
    prevSplash.src=splashImgList[splashIndex].src;
    if (splashIndex+1<splashAmount)
    {splashIndex++}
    else {
        splashIndex=0;
    }
    splashImg.src=splashImgList[splashIndex].src;
    splashImg.classList.add("transitionIn");
    splashImg.addEventListener("animationend", () => {
        splashImg.classList.remove("transitionIn");
    })
    setTimeout(ChangeSplash, timer);
}