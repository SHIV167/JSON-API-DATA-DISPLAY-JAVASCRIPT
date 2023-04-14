//variable declaration
const button = document.querySelector("button");
const p = document.querySelector("p");
p.style.color = "#45C5B0";
p.style.fontSize = "3rem";
const API = "http://api.quotable.io/random";



//click function with data output
button.addEventListener("click", ()=>{
fetch(API).then(res => res.json().then(data =>{
p.innerText = data.content;

}).catch(() => alert("Something went wrong"))

)});

//Slider Effect
$(document).ready(()=>{
  $("button").click(()=>{
    $("p").slideToggle("1200");
  });
});
