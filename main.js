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

let lineLengthsArr = [];

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
//   line.style.strokeDashOffset = lineLengthsArr[index];
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

//

// function setup() {
//   createCanvas(720, 400);
//   noStroke();
//   scale = width/20;
// }

// function draw() {
//   let i;
//   for ( i = 0; i < scale; i++) {
//     colorMode(RGB, (i+1) * scale * 20);
//     fill(millis()%((i+1) * scale * 20));
//     ellipse(i*scale, mouseY, scale, scale);
//   }
// }

let scaleTest;

//
const canvasWrap = document.getElementById("canvas-wrap");
let canvasWrapHeight = canvasWrap.offsetHeight;
let canvasWrapWidth = canvasWrap.offsetWidth;

function setup() {
  //set the canvas size
  let canvas = createCanvas(canvasWrapWidth, canvasWrapHeight);
  canvas.parent("#canvas-wrap");
  rectMode(CENTER);
  noStroke();
  scaleTest = canvasWrapWidth / 50;
  // stroke("blue");
  // strokeWeight(2);
  //background("rebeccapurple");

  // FRAME
  // TOP, RIGHT
  // line(0, 25, 150, 25);
  // line(150, 25, 175, 0);
  // line(175, 0, 350, 0);
  // line(350, 0, 400, 25);
  // line(400, 25, wrapWidth, 25);
  // line(wrapWidth, 25, wrapWidth, wrapHeight / 2 - 200);
  // line(wrapWidth, wrapHeight / 2 - 200, wrapWidth - 100, wrapHeight / 2 - 300);
  // //
  // //LEFT
  // line(0, 25, 0, 200);
  // line(0, 200, 200, 150);
  // line(200, 150, 200, 400);
  // line(200, 400, 0, 450);
  // line(0, 450, 0, wrapHeight / 2 - 100);
  // //
  // //BOTTOM
  // line(0, wrapHeight / 2 - 100, wrapWidth, wrapHeight / 2 - 100);
  // line(wrapWidth, wrapHeight / 2 - 100, wrapWidth, wrapHeight / 2);
  // //
  // //NEW EL
  // line(wrapWidth, wrapHeight / 2, 300, wrapHeight / 2);
  // line(300, wrapHeight / 2, 275, wrapHeight / 2 - 25);
  // line(275, wrapHeight / 2 - 25, 0, wrapHeight / 2 - 25);
  // line(0, wrapHeight / 2 - 25, 0, wrapHeight);
}

function draw() {
  //   let i;
  //   for (i = 0; i < scaleTest; i++) {
  //     colorMode(RGB, (i + 1) * scaleTest * 20);
  //     fill(millis() % ((i + 1) * scaleTest * 20));
  //     ellipse(i * scaleTest, mouseY, scaleTest, scaleTest);
  //   }

  background(230);

  let r1 = map(mouseX, 0, 1000, 0, innerWidth, true);
  console.log("mouse", mouseX, r1, "r1 check", Math.floor(r1));
  let r2 = height - r1;

  //translate(720, 500);

  stroke(27, 134, 255, r1 - 200);
  rect(650, 250, 150, 150);

  ellipse(r1, 220, 75, 75);

  rect(1300, 220, 100, 100);
  rect(1200, 400, 250, 150);

  ellipse(1400, 450, 75, 75);

  //activator
  // fill(237, 34, 93, r1);
  // rect(mouseX - r1, mouseY - r1 * 1.5, 10, window.innerHeight);
}
