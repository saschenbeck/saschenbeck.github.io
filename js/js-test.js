"use strict";

console.log("This is a JS Test");





function change (){
    var colorButton = document.getElementById('testButton');
    var colorSection = document.getElementById('colorSection');
    var rainbow = ['red','orange','yellow','green','blue','indigo','violet'];
    var randomButtonColor = rainbow[Math.floor(Math.random()*rainbow.length)];
    var randomSectionColor = rainbow[Math.floor(Math.random()*rainbow.length)];
    colorButton.style.backgroundColor = randomButtonColor;
    colorSection.style.backgroundColor = randomSectionColor;
}


