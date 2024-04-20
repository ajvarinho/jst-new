//test
let pg;
let bg;
let bg2;
let img;
let imgOne;
let vid;
let theta = 0;

//parent wrap
const canvasWrap = document.querySelector(".frontWall");
let wrapHeight = canvasWrap.offsetHeight;

function preload() {
  bg = loadImage("./public/img/exhibitions/20231223_203843.jpg");
  bg2 = loadImage("/public/img/exhibitions/20231223_203805.jpg");
  img = loadImage("./public/img/paintings/3.jpg");
  imgOne = loadImage("./public/img/paintings/rnd.png");
}

function setup() {
  //set the canvas size
  let canvas = createCanvas(800, wrapHeight, WEBGL);
  canvas.parent("#canvas-wrap");
  pg = createGraphics(100, 100);
}

function draw() {
  fill(48, 18, 222);
  //rect(0, 0, 600, 500);
  background(255);
  //texture(img);

  //fill("rgba(100%, 0%, 100%, 0.5)");
  box(10, 10, 10);

  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img);
  box(250, 250, 250);
  theta += 0.01;

  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(bg);
  box(50, 50, 50);
  theta += 0.01;

  //
  // strokeWeight(2);
  // stroke("blue");
  // ellipseMode(CORNER);

  // //
  // ellipse(620, 270, 380, 380);
  // ellipse(600, 270, 380, 380);
  // //
  // ellipse(570, 270, 380, 380);
  // ellipse(520, 270, 380, 380);
  // ellipse(470, 270, 380, 380);
  // ellipse(420, 270, 380, 380);
  // ellipse(370, 250, 380, 380);
  // ellipse(330, 220, 380, 380);
  // ellipse(380, 180, 380, 380);

  // //border
  // ellipse(innerWidth / 4.5, 100, 382, 382);
  // image(imgOne, innerWidth / 4.5, 100, 380, 380);
}
