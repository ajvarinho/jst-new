console.log("alo");

//test
const introWrap = document.getElementById("intro-wrap");
let introHeight = introWrap.offsetHeight;
let introWidth = introWrap.offsetWidth;
let newWidth;
let percentageX;
let percentageY;
let percentageChangeX;
let percentageChangeY;

const fractionHeight = introHeight / 4;
const fractionWidth = introWidth / 4;

console.log("b4 re-sizin", introHeight, introWidth);

//
let init_x;
let new_x;

/**
 * staviti listener unutar funkcije
 * funkcija vraca newWidth i percentage
 */

const resized = window.addEventListener("resize", () => {
  newWidth = introWrap.offsetWidth;
  newHeight = introWrap.offsetHeight;
  init_x = Math.round(innerWidth / 2.5 + 100);
  percentageX = Math.round((newWidth / introWidth) * 100);
  percentageY = Math.round((newHeight / introHeight) * 100);
  percentageChangeX = 100 - percentageX;
  percentageChangeY = 100 - percentageY;
  new_x = Math.round(init_x - (percentageChangeX / 100) * init_x);
  draw(new_x, percentageChangeX, percentageChangeY);
});

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

function draw(new_x, percentageChangeX, percentageChangeY) {
  //Math.round(innerWidth / 2.5 + 100)
  //const init_x =
  let init_y = 270;
  let init_rad = 380;
  //
  console.log("drawin ^ resizin for %", percentageChangeX, percentageChangeY);
  console.log("rect x initial", init_x);
  background(255, 255, 255);
  fill(200);
  //
  image(imgSmallOne, 200, 100, 150, 100);
  strokeWeight(1);
  stroke("blue");
  ellipseMode(CORNER);
  //
  //ellipse(new_x, 270, 380, 380);
  ellipse(innerWidth / 2.5 + 100, 270, 380, 380);
  ellipse(innerWidth / 2.5 + 50, 270, 380, 380);
  // //
  ellipse(innerWidth / 2.5 - 50, 270, 380, 380);
  ellipse(innerWidth / 2.5 - 100, 250, 380, 380);
  ellipse(innerWidth / 2.5 - 130, 220, 380, 380);
  ellipse(innerWidth / 2.5 - 150, 190, 380, 380);
  //
  ellipse(innerWidth / 2.5 - 70, 150, 380, 380);

  strokeWeight(1);
  stroke("blue");
  //border
  ellipse(innerWidth / 2.5 - 50, 100, 382, 382);
  image(imgOne, innerWidth / 2.5 - 50, 100, 380, 380);

  //
  strokeWeight(1);
  stroke("blue");
  //bilo 100
  rect(innerWidth - (fractionWidth + 220), 350, 250, 300);
  //test
  rect(innerWidth - (fractionWidth + 260), 300, 250, 300);
  rect(innerWidth - (fractionWidth + 280), 280, 250, 300);
  rect(innerWidth - (fractionWidth + 300), 220, 250, 300);
  rect(innerWidth - (fractionWidth + 310), 180, 250, 300);
  //
  rect(innerWidth - (fractionWidth + 315), 140, 250, 300);
  rect(innerWidth - (fractionWidth + 305), 130, 250, 300);
  rect(innerWidth - (fractionWidth + 295), 120, 250, 300);
  rect(innerWidth - (fractionWidth + 285), 110, 250, 300);
  rect(innerWidth - (fractionWidth + 275), 100, 250, 300);
  //
  image(imgTwo, innerWidth - (fractionWidth + 275), 100, 250, 300);
  //
  rect(innerWidth - (fractionWidth + 70), 700, 300, 200);
  rect(innerWidth - (fractionWidth + 100), 710, 300, 200);
  rect(innerWidth - (fractionWidth + 120), 700, 300, 200);
  rect(innerWidth - (fractionWidth + 150), 690, 300, 200);
  rect(innerWidth - (fractionWidth + 200), 680, 300, 200);
  rect(innerWidth - (fractionWidth + 250), 670, 300, 200);
  //bilo 250
  rect(innerWidth - (fractionWidth + 320), 650, 300, 200);
  image(imgThree, innerWidth - (fractionWidth + 320), 650, 300, 200);

  // image(imgSmallTwo, innerWidth - 300, 200, 150, 100);
  // image(imgSmallThree, 100, 600, 150, 200);

  //image(imgSmallFour, innerWidth - 200, 700, 150, 100);
  noLoop();
}
