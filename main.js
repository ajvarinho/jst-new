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

// PATH TEST
let mouseX;
let mouseY;
const pathEl = document.querySelector(".path");

let pathPoints = "M 600,400 L 400, 400 l 100, 100, z";
//
pathEl.setAttribute("d", pathPoints);

function updateDisplay(event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
  console.log(mouseX, mouseY);
  pathPoints = `M ${mouseX}, ${mouseY} L ${mouseX}, 400 l ${mouseX}, ${mouseY} l ${
    mouseX + 200
  }, ${mouseY + 500} z`;
  pathEl.setAttribute("d", pathPoints);
  pathEl.setAttribute("stroke", "orange");
}

document.addEventListener("mousemove", updateDisplay, false);

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

introDivs.forEach((element, index) => {
  element.style.backgroundImage = `url('${imagesArr[index]}')`;
});
