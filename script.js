// Practice Problem Smartwatch

console.clear;
var watchSkin = document.getElementById("timer");
var redSkinBtn = document.getElementById("color-red");
var blueSkinBtn = document.getElementById("color-blue");
var pinkSkinBtn = document.getElementById("color-pink");
var blackSkinBtn = document.getElementById("color-black");
var purpleSkinBtn = document.getElementById("color-purple");
var time3 = document.getElementById("second");
var pulse = document.getElementById("pulse");
var timeBtn = document.getElementById("time-piece");
var pulseBtn = document.getElementById("heart-rate");

redSkinBtn.addEventListener("click", function () {
  watchSkin.style.backgroundImage = 'url("red-watch-skin.png")';
});

blueSkinBtn.addEventListener("click", function () {
  watchSkin.style.backgroundImage = 'url("blue-watch-skin.png")';
});

pinkSkinBtn.addEventListener("click", function () {
  watchSkin.style.backgroundImage = 'url("pink-watch-skin.png")';
});

blackSkinBtn.addEventListener("click", function () {
  watchSkin.style.backgroundImage = 'url("black-watch-skin.png")';
});

purpleSkinBtn.addEventListener("click", function () {
  watchSkin.style.backgroundImage = 'url("purple-watch-skin.png")';
});

timeBtn.addEventListener("click", function () {
  time3.classList.remove("hidden");
  pulse.style.display = "none";
});

pulseBtn.addEventListener("click", function () {
  time3.classList.add("hidden");
  pulse.style.display = "block";
});

setInterval(function () {
  const date = new Date();
  time3.innerHTML = date.toLocaleTimeString();
}, 1000);
