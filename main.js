//SVG FRAME
const svgWrapEl = document.querySelector(".svg-wrap");
const svgEl = document.querySelector(".svg-el");

let wrapWidth = svgWrapEl.offsetWidth;
let wrapHeight = svgWrapEl.offsetHeight;

svgEl.setAttribute("height", wrapHeight);
svgEl.setAttribute("width", wrapWidth);
svgEl.setAttribute("viewBox", `0, 0, ${wrapWidth}, ${wrapHeight}`);

const polylineTop = document.querySelector(".polyline.top");
const polylineLeft = document.querySelector(".polyline.left");
const polylineBottom = document.querySelector(".polyline.bottom");

let width = Math.round(wrapWidth);
let height = Math.round(wrapHeight);

let pointsTop;
let pointsLeft;
let pointsBottom;

pointsTop = `0,50 152,50 152,50 165,0 500,0, 552,50 552,50 ${width},50 ${width},50 ${width},${
  height / 4 + 50
} ${width},${height / 4 + 50} ${width - 70},${height / 4 - 50}`;

pointsLeft =
  "0,50 0,200 0,200 230,125 230,125 230,400 230,400 0,475 0,475 0,842";

pointsBottom = `0,840 ${width},840 ${width},840 ${width},950 ${width},950 400,950 400,950 370,900 370,900 0,900 0,900 0,1800`;

polylineTop.setAttribute("points", pointsTop);
polylineLeft.setAttribute("points", pointsLeft);
polylineBottom.setAttribute("points", pointsBottom);

//SVG ANIMATION
let topLength = Math.floor(polylineTop.getTotalLength());
let leftLength = Math.floor(polylineLeft.getTotalLength());
let bottomLength = Math.floor(polylineBottom.getTotalLength());
//
polylineTop.setAttribute("stroke-dasharray", topLength);
polylineTop.setAttribute("stroke-dashoffset", topLength);
//
polylineLeft.setAttribute("stroke-dasharray", leftLength);
polylineLeft.setAttribute("stroke-dashoffset", leftLength);
//
polylineBottom.setAttribute("stroke-dasharray", bottomLength);
polylineBottom.setAttribute("stroke-dashoffset", bottomLength);

window.addEventListener("scroll", myFunction);
function myFunction() {
  let scrollPercent =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  //test
  let testVal = document.documentElement.scrollTop;
  console.log(
    "document.documentElement.scrollTop",
    testVal,
    "document.documentElement.scrollHeight",
    document.documentElement.scrollHeight,
    "document.documentElement.clientHeight",
    document.documentElement.clientHeight
  );
}

// p5.js

let scaleTest;
const canvasWrap = document.getElementById("canvas-wrap");
let canvasWrapHeight = canvasWrap.offsetHeight;
let canvasWrapWidth = canvasWrap.offsetWidth;
//
let testOne = 0;
let testTwo = 0;

function setup() {
  //set the canvas size
  let canvas = createCanvas(canvasWrapWidth, canvasWrapHeight);
  canvas.parent("#canvas-wrap");
  rectMode(CENTER);
  noStroke();
  scaleTest = canvasWrapWidth / 50;
}

function draw() {
  background("white");
  let r1 = map(mouseX, 0, 1000, 0, innerWidth, true);
  let r2 = height - r1;

  //translate(720, 500);
  stroke(27, 134, 255, r1 - 200);

  // rect(700, 250, 150, 150);
  // ellipse(1000, 200, 75, 75);
  // rect(1300, 200, 100, 100);
  // rect(1200, 350, 250, 150);
  // ellipse(650, 400, 100, 100);
  // ellipse(1300, 500, 100, 100);
  // rect(650, 650, 100, 250);
  // rect(900, 730, 250, 100);
  // rect(1300, 700, 150, 150);
  //
  // let i;
  // for (i = 0; i < scale; i++) {
  //   colorMode(RGB, (i + 1) * scale * 20);
  //   fill(millis() % ((i + 1) * scale * 20));
  //   ellipse(i * scale, mouseY, scale, scale);
  // }

  noLoop();
}

// BG IMAGES WELCOME PAGE

const imagesArr = [
  "./public/img/paintings/1.jpg",
  "./public/img/paintings/3.jpg",
  "./public/img/paintings/4.jpg",
  "./public/img/paintings/5.jpg",
  "./public/img/paintings/6.jpg",
];

const introDivs = document.querySelectorAll(".img");
//
let arrIntroDivs = Array.from(introDivs);

// let e;

// const replaceBgImg = function () {
//   introDivs.forEach((tile, index) => {
//     if ((e.target = tile[index])) {
//       tile.style.backgroundImage = imagesArr[index];
//     }
//   });
// };

// let arrIntroDivs = Array.from(introDivs);

introDivs.forEach((element, index) => {
  element.style.backgroundImage = `url('${imagesArr[index]}')`;
});
