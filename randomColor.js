const title = document.querySelector("div h1");

function handleTitleClick(){
const randomColor = ["blue","red","green","yellow","black"];

let num = Math.floor(Math.random() * randomColor.length);
title.style.color = randomColor[num];
}

title.addEventListener("click",handleTitleClick);