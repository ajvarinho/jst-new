//test
let pg;
let bg;
let bg2;
let img;
let vid;
let theta = 0;

function preload() {
  bg = loadImage("./public/img/exhibitions/20231223_203843.jpg");
  img = loadImage("./public/img/paintings/3.jpg");
  bg2 = loadImage("/public/img/exhibitions/20231223_203805.jpg");
}

function setup() {
  //set the canvas size
  let canvas = createCanvas(800, 650, WEBGL);
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
}
