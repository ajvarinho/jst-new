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
let imgSmallOne;
let imgSmallTwo;
let imgSmallThree;
let imgSmallFour;

function preload() {
  bg = loadImage("./public/img/exhibitions/20231223_203843.jpg");
  bg2 = loadImage("./public/img/exhibitions/20231223_203805.jpg");
  imgOne = loadImage("./public/img/paintings/rnd.png");
  imgTwo = loadImage("./public/img/paintings/8.jpg");
  imgThree = loadImage("./public/img/paintings/5-d2.jpg");
  imgSmallOne = loadImage("./public/img/paintings/4-d1.jpg");
  imgSmallTwo = loadImage("./public/img/paintings/5-d1.jpg");
  imgSmallThree = loadImage("./public/img/paintings/4.jpg");
  imgSmallFour = loadImage("./public/img/paintings/1.jpg");
}

function setup() {
  //set the canvas size
  let canvas = createCanvas(introWidth, introHeight);
  canvas.parent("#canvas-wrap");
}

function draw() {
  background(255, 255, 255);
  fill(200);

  //
  image(imgSmallOne, 200, 100, 150, 100);
  strokeWeight(2);
  stroke("blue");
  ellipseMode(CORNER);

  //
  ellipse(620, 270, 380, 380);
  ellipse(600, 270, 380, 380);
  //
  ellipse(570, 270, 380, 380);
  ellipse(520, 270, 380, 380);
  ellipse(470, 270, 380, 380);
  ellipse(420, 270, 380, 380);
  ellipse(370, 250, 380, 380);
  ellipse(330, 220, 380, 380);
  ellipse(380, 180, 380, 380);

  //border
  ellipse(innerWidth / 4.5, 100, 382, 382);
  image(imgOne, innerWidth / 4.5, 100, 380, 380);

  //
  strokeWeight(2);
  stroke("blue");
  rect(innerWidth / 2.9 + fractionWidth, 350, 250, 300);
  rect(innerWidth / 3.1 + fractionWidth, 300, 250, 300);
  rect(innerWidth / 3.2 + fractionWidth, 280, 250, 300);
  rect(innerWidth / 3.3 + fractionWidth, 250, 250, 300);
  rect(innerWidth / 3.7 + fractionWidth, 160, 250, 300);

  //
  rect(innerWidth / 3.9 + fractionWidth, 140, 250, 300);
  rect(innerWidth / 3.8 + fractionWidth, 130, 250, 300);
  rect(innerWidth / 3.7 + fractionWidth, 120, 250, 300);
  rect(innerWidth / 3.6 + fractionWidth, 110, 250, 300);
  rect(innerWidth / 3.5 + fractionWidth, 100, 250, 300);
  //
  image(imgTwo, innerWidth / 3.5 + fractionWidth, 100, 250, 300);

  //
  rect(innerWidth / 3 + fractionWidth, 650, 300, 200);
  rect(innerWidth / 3.1 + fractionWidth, 660, 300, 200);
  rect(innerWidth / 3.3 + fractionWidth, 670, 300, 200);
  rect(innerWidth / 3.5 + fractionWidth, 660, 300, 200);
  rect(innerWidth / 3.7 + fractionWidth, 650, 300, 200);
  rect(innerWidth / 3.7 + fractionWidth, 640, 300, 200);
  //
  image(imgThree, innerWidth / 3.7 + fractionWidth, 650, 300, 200);

  image(imgSmallTwo, innerWidth - 300, 200, 150, 100);
  image(imgSmallThree, 100, 600, 150, 200);

  image(imgSmallFour, innerWidth - 200, 700, 150, 100);
  noLoop();
}
