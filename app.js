const imgs = document.querySelector("#imgs");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const img = document.querySelectorAll("#imgs img");
console.log(img);
let index = 0;

function sladeFunct() {
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }
  imgs.style.cssText = `transform: translateX(${-index * 500}px);`;
}
right.addEventListener("click", function change() {
  index++;
  sladeFunct();
  resentInteval();
});
left.addEventListener("click", function change() {
  index--;
  sladeFunct();
  resentInteval();
});
let interval = setInterval(run, 3000);

function run() {
  index++;
  sladeFunct();
}
function resentInteval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}
