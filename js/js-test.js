"use strict";

console.log("This is a JS Test");

var colorButton = document.getElementById('testButton');
var rainbow = ['red','orange','yellow','green','blue','indigo','violet'];
var randomColor = rainbow[Math.floor(Math.random()*rainbow.length)];


// colorButton.onclick = function () {
//     this.style.backgroundColor = randomColor;
// };

function change (){
    colorButton.style.backgroundColor = randomColor;
    var newColor = randomColor
    console.log(newColor);
}

