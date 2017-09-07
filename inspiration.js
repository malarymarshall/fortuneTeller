console.log("Hello, JS.");

var image = document.querySelector("img");
var header = document.querySelector("h1");

image.onclick = function() {
    console.log("Clicked");
    var r = Math.floor(Math.random() * inspirations.length);
    var randomInsp = inspirations[r];
    header.innerHTML = randomInsp;
    var p = document.createElement("p");
    p.innerHTML = randomInsp;
    document.body.appendChild(p);
}
    
var inspirations;
fetch('https://api.myjson.com/bins/fvbk9').then(function (response) {
    return response.json();
}).then(function (data) { 
    inspirations = data;

});
    
             