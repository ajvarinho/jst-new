console.log("alo");

//test
const introWrap = document.getElementById("intro-wrap");
const introHeight = introWrap.offsetHeight;
const introWidth = introWrap.offsetWidth;

const fractionHeight = introHeight / 4;
const fractionWidth = introWidth / 4;

console.log(introHeight, introWidth, fractionHeight, fractionWidth);

let pg;
let bg;
let bg2;
let imgOne;
let imgTwo;
let imgThree;
let vid;
let theta = 0;

function preload() {
  bg = loadImage("./public/img/exhibitions/20231223_203843.jpg");
  bg2 = loadImage("/public/img/exhibitions/20231223_203805.jpg");
  imgOne = loadImage("./public/img/paintings/rnd.png");
  imgTwo = loadImage("./public/img/paintings/8.jpg");
  imgThree = loadImage("./public/img/paintings/5-d2.jpg");
}

function setup() {
  //set the canvas size
  let canvas = createCanvas(introWidth, introHeight);
  canvas.parent("#canvas-wrap");
}

function draw() {
  background(255, 255, 255);
  fill(200);
  strokeWeight(2);
  stroke("blue");
  circle(250, 200, 250);
  circle(260, 200, 250);
  circle(270, 260, 250);
  circle(280, 270, 250);
  circle(300, 250, 250);
  image(imgOne, 120, 120, 250, 250);

  //
  image(imgTwo, 520, 120, 250, 250);

  //
  image(imgThree, 520, 520, 250, 250);
}
