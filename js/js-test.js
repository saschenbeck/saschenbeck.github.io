"use strict";

console.log("This is a JS Test");

var colorButton = document.getElementsByClassName('colorChange');
var rainbow = ['red','orange','yellow','green','blue','indigo','violet'];

colorButton.onclick = function () {
    this.style.backgroundColor = 'blue'
};