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
let init_y;
let init_rad;
let new_x;
let new_y;
let new_rad;

//

let initValues = [];

/**
 * test - how to handle window resizing
 */

function anotherFunction(numericValue) {
  console.log("Received numeric value:", numericValue);
  // Do something with the numeric value here
}

// Function to handle the resize event
function handleResize() {
  // Retrieve the numeric value (e.g., window's inner width)
  var numericValue = window.innerWidth;
  // Pass the numeric value to another function
  anotherFunction(numericValue);
}

function checkArray(arr) {
  let i = 0;
  for (i; i < arr.length; i++) {
    console.log("arr check, ", arr[i]);
    initValues.push(arr[i]);
  }
}

// Attach the resize event listener to the window object
//window.addEventListener("resize", handleResize);

// Optionally, call the handleResize function initially to handle the current window size
//handleResize();

/**
 * init values - moram li za svaki eleemnt sve?
 */

let values = {
  ellipseOne: [Math.round(innerWidth / 3.5 + 100), 270, 380, 380],
  ellipseTwo: [innerWidth / 3.5 + 50, 270, 380, 380],
  elipseThree: [innerWidth / 3.5 - 50, 270, 380, 380],
  ellipseFour: [innerWidth / 3.5 - 100, 250, 380, 380],
  ellipseFive: [innerWidth / 3.5 - 130, 220, 380, 380],
  ellipseSix: [innerWidth / 3.5 - 150, 190, 380, 380],
  ellipseSeven: [innerWidth / 3.5 - 70, 150, 380, 380],
  imgOneBorder: [innerWidth / 3.5 - 50, 100, 382, 382],
  imgOne: [innerWidth / 3.5 - 50, 100, 380, 380],
  //
  rectOne: [innerWidth / 1.1 - (fractionWidth + 120), 350, 250, 300],
  rectTwo: [innerWidth / 1.1 - (fractionWidth + 260), 300, 250, 300],
  rectThree: [innerWidth / 1.1 - (fractionWidth + 280), 280, 250, 300],
  rectFour: [innerWidth / 1.1 - (fractionWidth + 300), 220, 250, 300],
  rectFive: [innerWidth / 1.1 - (fractionWidth + 310), 180, 250, 300],
  rectSix: [innerWidth / 1.1 - (fractionWidth + 315), 140, 250, 300],
  rectSeven: [innerWidth / 1.1 - (fractionWidth + 305), 130, 250, 300],
  rectEight: [innerWidth / 1.1 - (fractionWidth + 295), 120, 250, 300],
  rectNine: [innerWidth / 1.1 - (fractionWidth + 285), 110, 250, 300],
  imgTwoBorder: [innerWidth / 1.1 - (fractionWidth + 275), 100, 250, 300],
  imgTwo: [innerWidth / 1.1 - (fractionWidth + 275), 100, 250, 300],
};

let elementsList = Object.keys(values);
const initValuesArray = Object.values(values);

console.log(elementsList, initValuesArray);

//
let rectSmallOne = [];
let rectSmallTwo = [];
let rectSmallThree = [];
let rectSmallFour = [];
let rectSmallFive = [];

/**
 * staviti listener unutar funkcije
 * funkcija vraca newWidth i percentage
 */

function handleCanvasResizing() {
  //
  newWidth = introWrap.offsetWidth;
  newHeight = introWrap.offsetHeight;
  //
  init_x = Math.round(innerWidth / 2.5 + 100);
  init_y = 270;
  init_rad = 380;
  // calculate percentage change
  percentageX = Math.round((newWidth / introWidth) * 100);
  percentageY = Math.round((newHeight / introHeight) * 100);
  percentageChangeX = 100 - percentageX;
  percentageChangeY = 100 - percentageY;

  console.log(
    "percentage change",
    percentageChangeX,
    " init value",
    initValuesArray[0][0],
    "test value 1",
    initValuesArray[0][0] -
      Math.round((percentageChangeX / 100) * initValuesArray[0][0])
  );
  //
  // calculate change for elements
  values.ellipseOne[0] = Math.round(
    initValuesArray[0][0] - (percentageChangeX / 100) * initValuesArray[0][0]
  );
  values.ellipseOne[1] = Math.round(
    initValuesArray[0][1] - (percentageChangeX / 100) * initValuesArray[0][1]
  );
  values.ellipseOne[2] = Math.round(
    initValuesArray[0][2] - (percentageChangeX / 100) * initValuesArray[0][2]
  );
  values.ellipseOne[3] = Math.round(
    initValuesArray[0][3] - (percentageChangeX / 100) * initValuesArray[0][3]
  );
  //
  // values.ellipseTwo[0] = Math.round(
  //   initValuesArray[1][0] - (percentageChangeX / 100) * valuesArray[1][0]
  // );
  // values.ellipseTwo[1] = Math.round(
  //   initValuesArray[1][1] - (percentageChangeY / 100) * valuesArray[1][1]
  // );
  // values.ellipseTwo[2] = Math.round(
  //   initValuesArray[1][2] - (percentageChangeX / 100) * valuesArray[1][2]
  // );
  // values.ellipseTwo[3] = Math.round(
  //   initValuesArray[1][3] - (percentageChangeX / 100) * valuesArray[1][3]
  // );

  console.log("alooo", values.ellipseOne, values.ellipseTwo);

  draw();
}

const resized = window.addEventListener("resize", handleCanvasResizing);

window.addEventListener("load", () => {
  handleCanvasResizing();
});

console.log("check", Object.values(values));

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

//console.log(values, typeof values);

function draw() {
  let check = values;
  //console.log(check);

  background(255, 255, 255);
  fill(200);
  //
  image(imgSmallOne, 200, 100, 150, 100);
  strokeWeight(1);
  stroke("blue");
  ellipseMode(CORNER);

  console.log("got vals: ", new_x, new_y, new_rad);

  ellipse(
    values.ellipseOne[0],
    values.ellipseOne[1],
    values.ellipseOne[2],
    values.ellipseOne[3]
  );
  //
  // ellipse(
  //   values.ellipseTwo[0],
  //   values.ellipseTwo[1],
  //   values.ellipseTwo[2],
  //   values.ellipseTwo[3]
  // );
  // ellipse(
  //   values.elipseThree[0],
  //   values.elipseThree[1],
  //   values.elipseThree[2],
  //   values.elipseThree[3]
  // );
  // ellipse(
  //   values.ellipseFour[0],
  //   values.ellipseFour[1],
  //   values.ellipseFour[2],
  //   values.ellipseFour[3]
  // );
  // ellipse(
  //   values.ellipseFive[0],
  //   values.ellipseFive[1],
  //   values.ellipseFive[2],
  //   values.ellipseFive[3]
  // );
  // ellipse(
  //   values.ellipseSix[0],
  //   values.ellipseSix[1],
  //   values.ellipseSix[2],
  //   values.ellipseSix[3]
  // );
  // ellipse(
  //   values.ellipseSeven[0],
  //   values.ellipseSeven[1],
  //   values.ellipseSeven[2],
  //   values.ellipseSeven[3]
  // );
  //
  //ellipse(innerWidth / 2.5 - 70, 150, 380, 380);

  strokeWeight(1);
  stroke("blue");
  //border
  ellipse(
    values.imgOneBorder[0],
    values.imgOneBorder[1],
    values.imgOneBorder[2],
    values.imgOneBorder[3]
  );
  image(
    imgOne,
    values.imgOne[0],
    values.imgOne[1],
    values.imgOne[2],
    values.imgOne[3]
  );

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
