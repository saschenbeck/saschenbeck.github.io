"use strict";

console.log("This is a JS Test");

var colorButton = document.getElementById('testButton');
var colorSection = document.getElementById('colorSection');



function change (){
    var rainbow = ['red','orange','yellow','green','blue','indigo','violet'];
    var randomButtonColor = rainbow[Math.floor(Math.random()*rainbow.length)];
    var randomSectionColor = rainbow[Math.floor(Math.random()*rainbow.length)];
    colorButton.style.backgroundColor = randomButtonColor;
    var newButtonColor = randomButtonColor
    colorSection.style.backgroundColor = randomSectionColor;
    var newSectionColor = randomButtonColor
    console.log(newButtonColor,newSectionColor);
}


