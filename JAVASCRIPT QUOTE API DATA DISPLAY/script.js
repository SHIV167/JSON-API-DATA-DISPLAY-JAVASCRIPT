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





//RETRIVE API DATA USING FOR EACH LOOP

/* fetch('https://jsonplaceholder.typicode.com/users')
.then(res => { 
return res.json();
})

.then(data =>{
	data.forEach(user =>{
		const markup = `<li>${user.name}</li>`;
		document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
		
	} );
	


})
.catch(error => console.log(error)); */


//RETRIVE API DATA USING MAP FUNCTION

/* async function callAPI(){
	let result = await fetch('https://jsonplaceholder.typicode.com/users');
	
	result = await result.json();
	console.warn(result)
	document.getElementById("userData").innerHTML = result.map((user) => 
     `<tr><td>${user.name}</td><td>${user.id}</td></tr>`


	).join("");
}
callAPI(); */


