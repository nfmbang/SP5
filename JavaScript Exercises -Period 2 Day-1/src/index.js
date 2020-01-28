import 'bootstrap/dist/css/bootstrap.css'
//import jokes from "./jokes";

//const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
//document.getElementById("jokes").innerHTML = allJokes.join("");


function getJoke(){
    let response = fetch("https://studypoints.info/jokes/api/jokes/period/hour").then(response => response.json()).then(function(data){
    document.getElementById("2div").innerHTML = data.joke;
    })
}

function resetDiv(){
    document.getElementById("2div").innerHTML=""
}


document.getElementById("2button").addEventListener("click",getJoke())
document.getElementById("2divreset").addEventListener("click",resetDiv())



