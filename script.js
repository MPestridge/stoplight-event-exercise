"use strict"
/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var button = document.querySelector("stopButton");

stopButton.addEventListener("mouseenter", function(){
  console.log("Entered " + this.innerHTML + " button");
});

var button = document.querySelector("slowButton");

slowButton.addEventListener("mouseenter", function(){
  console.log("Entered " + this.innerHTML + " button");
});

var button = document.querySelector("goButton");

goButton.addEventListener("mouseenter", function(){
  console.log("Entered " + this.innerHTML + " button");
});

var button = document.querySelector("stopButton");

stopButton.addEventListener("mouseout", function(){
  console.log("Left " + this.innerHTML + " button");
});

var button = document.querySelector("slowButton");

slowButton.addEventListener("mouseout", function(){
  console.log("Left " + this.innerHTML + " button");
});

var button = document.querySelector("goButton");

goButton.addEventListener("mouseout", function(){
  console.log("Left " + this.innerHTML + " button");
});

var button = document.getElementsByClassName("button");

var logText = function(event) {
  console.log(event.target.textContent);
}

controls.addEventListener("click", logText)

stopButton.addEventListener("click" , function() {
  document.getElementById("stopLight").style.backgroundColor= "red";
  document.getElementById("slowLight").style.backgroundColor= "black";
  document.getElementById("goLight").style.backgroundColor= "black";
});

slowButton.addEventListener("click" , function() {
  document.getElementById("slowLight").style.backgroundColor= "yellow";
  document.getElementById("stopLight").style.backgroundColor= "black";
  document.getElementById("goLight").style.backgroundColor= "black";
});

goButton.addEventListener("click" , function() {
  document.getElementById("goLight").style.backgroundColor= "limegreen";
  document.getElementById("stopLight").style.backgroundColor= "black";
  document.getElementById("slowLight").style.backgroundColor= "black";
});
