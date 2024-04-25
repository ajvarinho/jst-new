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

const brickLeft = document.querySelector(".left.block");
const brickRight = document.querySelector(".right.block");
const mainTitleWrap = document.querySelector(".title-wrap");
const infoTitle = document.querySelector(".info-title > p");

console.log(brickLeft, brickRight);
let zoom = 1;
const ZOOM_SPEED = 10;
let lastScrollTop = 0;
window.addEventListener("scroll", function (e) {
  //console.log("lol scroll", e.deltaY);
  //
  let scrollTop = document.documentElement.scrollTop;
  let scrollAmount = scrollTop - lastScrollTop;
  lastScrollTop = scrollTop;

  console.log(lastScrollTop);

  console.log("Scroll amount:", scrollAmount);
  if (lastScrollTop > 200) {
    brickLeft.classList.add("move-left");
    brickRight.classList.add("move-right");
    mainTitleWrap.classList.add("fade-out");
    infoTitle.style = "";
    infoTitle.classList.add("text-animation");
  } else if (lastScrollTop < 300) {
    brickLeft.classList.remove("move-left");
    brickRight.classList.remove("move-right");
    mainTitleWrap.classList.remove("fade-out");
  }
});

//gallery test
let paintings = [
  "./public/img/paintings/rnd.png",
  "./public/img/paintings/8.jpg",
  "./public/img/paintings/5-d2.jpg",
  "./public/img/paintings/5-d1.jpg",
  "./public/img/paintings/4.jpg",
  "./public/img/paintings/1.jpg",
];

let design = [
  "./public/img/design/1.jpg",
  "./public/img/design/2.jpg",
  "./public/img/design/3.jpg",
  "./public/img/design/4.jpg",
  "./public/img/design/5.jpg",
  "./public/img/design/6.jpg",
];

const paintingsBtn = document.getElementById("paintings");
const designBtn = document.getElementById("design");
const imgContainer = document.querySelector(".container");
const images = document.querySelectorAll(".img-wrap > img");

const newImgModule = function (arr) {
  images.forEach((image, index) => {
    image.src = arr[index];
  });
};

const removeTransitionClass = function () {
  imgContainer.classList.remove("transition");
};

const animateModule = function () {
  imgContainer.classList.add("transition");
};

paintingsBtn.addEventListener("click", () => {
  animateModule();
  setTimeout(removeTransitionClass, 500);
  newImgModule(paintings);
});

designBtn.addEventListener("click", () => {
  newImgModule(design);
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    image.classList.add("active");
  });
});

// p5.js stuff

let angle = 0;

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
  let canvas = createCanvas(introWidth - 50, introHeight);
  canvas.parent("#canvas-wrap");
  //
  angleMode(DEGREES);
}

function draw() {
  background(255, 255, 255);
  fill(200);
  //
  image(imgSmallOne, 200, 100, 150, 100);
  strokeWeight(1);
  stroke("blue");
  ellipseMode(CORNER);
  //
  //ellipse(new_x, 270, 380, 380);
  ellipse(innerWidth / 3.5 + 100, 270, 380, 380);
  ellipse(innerWidth / 3.5 + 50, 270, 380, 380);
  // //
  ellipse(innerWidth / 3.5 - 50, 270, 380, 380);
  ellipse(innerWidth / 3.5 - 100, 250, 380, 380);
  ellipse(innerWidth / 3.5 - 130, 220, 380, 380);
  ellipse(innerWidth / 3.5 - 150, 190, 380, 380);
  //
  ellipse(innerWidth / 3.5 - 70, 150, 380, 380);

  strokeWeight(1);
  stroke("blue");
  //border
  ellipse(innerWidth / 3.5 - 50, 100, 382, 382);
  image(imgOne, innerWidth / 3.5 - 50, 100, 380, 380);

  //
  strokeWeight(1);
  stroke(22, 39, 220);
  //bilo 100
  rect(innerWidth / 1.1 - (fractionWidth + 120), 350, 250, 300);
  //test
  rect(innerWidth / 1.1 - (fractionWidth + 260), 300, 250, 300);
  rect(innerWidth / 1.1 - (fractionWidth + 280), 280, 250, 300);
  rect(innerWidth / 1.1 - (fractionWidth + 300), 220, 250, 300);
  rect(innerWidth / 1.1 - (fractionWidth + 310), 180, 250, 300);
  //
  rect(innerWidth / 1.1 - (fractionWidth + 315), 140, 250, 300);
  //
  rect(mouseX, mouseY, 250, 300);
  rect(mouseX - 100, mouseY - 160, 50, 50);
  push();
  translate(mouseX - 300, mouseY - 300);
  rectMode(CENTER);
  rotate(angle);
  //scale(mouseY / 1000, mouseX / 1000);
  fill(22, 39, 220);
  rect(0, 0, mouseX, mouseY);
  pop();
  //

  angle = angle + 1;
  rect(innerWidth / 1.1 - (fractionWidth + 305), 130, 250, 300);
  rect(innerWidth / 1.1 - (fractionWidth + 295), 120, 250, 300);
  rect(innerWidth / 1.1 - (fractionWidth + 285), 110, 250, 300);
  rect(innerWidth / 1.1 - (fractionWidth + 275), 100, 250, 300);

  console.log(fractionWidth, "aaa");
  //bilko
  image(imgTwo, innerWidth / 1.1 - (fractionWidth + 275), 100, 250, 300);
  //
  rect(innerWidth / 1.1 - (fractionWidth + 70), 700, 300, 200);
  rect(innerWidth / 1.1 - (fractionWidth + 100), 710, 300, 200);
  rect(innerWidth / 1.1 - (fractionWidth + 120), 700, 300, 200);
  rect(innerWidth / 1.1 - (fractionWidth + 150), 690, 300, 200);
  rect(innerWidth / 1.1 - (fractionWidth + 200), 680, 300, 200);
  rect(innerWidth / 1.1 - (fractionWidth + 250), 670, 300, 200);
  //bilo 250
  rect(innerWidth / 1.1 - (fractionWidth + 320), 650, 300, 200);
  image(imgThree, innerWidth / 1.1 - (fractionWidth + 320), 650, 300, 200);

  image(imgSmallTwo, mouseX, mouseY, 150, 100);
  image(imgSmallThree, 100, 600, 150, 200);

  image(imgSmallFour, innerWidth - 200, 700, 150, 100);
  //noLoop();
}

// ODLICNO ! ! !

// let scale;

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

//ili

// function draw() {
//   let i;
//   for ( i = 0; i < scale; i++) {
//     colorMode(RGB, (i+1) * scale * 30);
//     fill(millis()%((i+1) * (scale+50) * 40));
//     rect(i*scale, mouseY, scale, scale);
//   }
// }

//

// let scale;

// function setup() {
//   createCanvas(720, 400);
//   noStroke();
//   scale = width/20;
// }

// function draw() {
//   let i;
//   for ( i = 0; i < scale; i++) {
//     colorMode(RGB, (i+1) * scale * 10);
//     fill(millis()%((i+1) * scale * 10), 112, millis()%((i+10) * scale * 20));
//     rect(i*scale, 0, scale, height);
//   }
// }
