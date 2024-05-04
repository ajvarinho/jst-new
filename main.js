// test svg
const svgWrapEl = document.querySelector(".svg-wrap");
const svgEl = document.querySelector(".svg-el");

let wrapWidth = svgWrapEl.offsetWidth;
let wrapHeight = svgWrapEl.offsetHeight;

svgEl.setAttribute("height", wrapHeight);
svgEl.setAttribute("width", wrapWidth);
svgEl.setAttribute("viewBox", `0, 0, ${wrapWidth}, ${wrapHeight}`);

const mainLineTop = document.querySelector(".main-top");
const mainLineRight = document.querySelector(".main-right");
const angleLineRight = document.querySelector(".angle-right");
//
const linesBottom = document.getElementsByClassName("bottom");
//
let width = Math.round(wrapWidth);
let height = Math.round(wrapHeight);

mainLineTop.setAttribute("x2", width);
//
mainLineRight.setAttribute("x1", width);
mainLineRight.setAttribute("y1", 50);
mainLineRight.setAttribute("x2", width);
mainLineRight.setAttribute("y2", height / 4 + 100);
//
//tu za height innerHeight (window)?
angleLineRight.setAttribute("x1", width);
angleLineRight.setAttribute("y1", height / 4 + 100);
angleLineRight.setAttribute("x2", width - 50);
angleLineRight.setAttribute("y2", height / 4 + 50);
//
linesBottom[0].setAttribute("x2", width);
linesBottom[1].setAttribute("x1", width);
linesBottom[1].setAttribute("x2", width);
linesBottom[2].setAttribute("x1", width);
//
//left

// let lineLengthsArr = [];

// const linesArr = document.querySelectorAll(".frame-line");
// linesArr.forEach((line, index) => {
//   let lineLength = line.getTotalLength();
//   lineLength = Math.round(lineLength);
//   lineLengthsArr.push(lineLength);
// });

// linesArr.forEach((line, index) => {
//   line.style.strokeDasharray = lineLengthsArr[index];
//   line.style.strokeDashOffset = lineLengthsArr[index];
// });

// // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
// linesArr.forEach((line, index) => {
//   //
//   //line.style.strokeDashOffset = lineLengthsArr[index];
// });

// // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
// window.addEventListener("scroll", myFunction);

// function myFunction() {
//   let scrollPercent =
//     (document.body.scrollTop + document.documentElement.scrollTop) /
//     (document.documentElement.scrollHeight -
//       document.documentElement.clientHeight);

//   console.log("scroll percent", scrollPercent);
//   let drawLine;
//   //
//   let drawLineArr = [];

//   linesArr.forEach((line, index) => {
//     drawLine = Math.round(lineLengthsArr[index] * scrollPercent);
//     drawLineArr.push(drawLine);
//     //bilo dasharray
//     //stroke dash array fragmentira linije
//     line.style.strokeDashoffset = lineLengthsArr[index] - drawLine;
//   });
// }

// p5.js

let scaleTest;

//
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
  //background(253, 250, 251);
  background("white");

  let r1 = map(mouseX, 0, 1000, 0, innerWidth, true);
  let r2 = height - r1;

  //translate(720, 500);

  stroke(27, 134, 255, r1 - 200);
  rect(700, 250, 150, 150);

  ellipse(1000, 200, 75, 75);

  rect(1300, 200, 100, 100);
  rect(1200, 350, 250, 150);

  // ellipse(1450, 400, 120, 120);
  ellipse(650, 400, 100, 100);
  // ellipse(900, 500, 200, 200);
  // ellipse(1100, 600, 100, 100);
  ellipse(1300, 500, 100, 100);
  // rect(1400, 500, 50, 50);
  rect(650, 650, 100, 250);
  rect(900, 730, 250, 100);
  rect(1300, 700, 150, 150);
  //
  let v1 = createVector(width / 2 - 50, height / 2);
  let v2 = createVector(width / 2 + 50, height / 2);

  // background(255);
  // stroke(0);
  // strokeWeight(4);

  // push();
  // translate(v1.x, v1.y);
  // rotate(-1 * mouseX);
  // translate(-v1.x, -v1.y);
  // let r0 = line(v1.x, v1.y, v2.x, v2.y);
  // strokeWeight(1);
  // let p1 = point(v1.x, v1.y);
  // let p2 = point(v2.x, v2.y);
  // pop();

  //
  let i;
  for (i = 0; i < scale; i++) {
    colorMode(RGB, (i + 1) * scale * 20);
    fill(millis() % ((i + 1) * scale * 20));
    ellipse(i * scale, mouseY, scale, scale);
  }
}

// tiles hover

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
