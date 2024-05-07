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
const polylineInfo = document.querySelector(".polyline.info");
const polylineWorks = document.querySelector(".polyline.works");

let width = Math.round(wrapWidth);
let height = Math.round(wrapHeight);

let pointsTop;
let pointsLeft;
let pointsBottom;
let pointsInfo;
let pointsWorks;

pointsTop = `0,50 152,50 152,50 165,0 500,0, 552,50 552,50 ${width},50 ${width},50 ${width},${
  height / 4 + 50
} ${width},${height / 4 + 50} ${width - 70},${height / 4 - 50}`;

pointsLeft =
  "0,50 0,200 0,200 230,125 230,125 230,400 230,400 0,475 0,475 0,842";

pointsBottom = `0,840 ${width},840`;

pointsInfo = `${width},840 ${width},950 ${width},950 400,950 400,950 370,900 370,900 0,900 0,900 0,1700 ${width}, 1700`;

pointsWorks = `${width}, 1700 ${width} 1800 425, 1800 400, 1750 0, 1750 0, ${height} ${width}, ${height}`;

polylineTop.setAttribute("points", pointsTop);
polylineLeft.setAttribute("points", pointsLeft);
polylineBottom.setAttribute("points", pointsBottom);
polylineInfo.setAttribute("points", pointsInfo);
polylineWorks.setAttribute("points", pointsWorks);

//SVG ANIMATION
let topLength = Math.floor(polylineTop.getTotalLength());
let leftLength = Math.floor(polylineLeft.getTotalLength());
let bottomLength = Math.floor(polylineBottom.getTotalLength());
let infoLength = Math.floor(polylineInfo.getTotalLength());
let worksLength = Math.floor(polylineWorks.getTotalLength());
//
polylineTop.setAttribute("stroke-dasharray", topLength);
polylineTop.setAttribute("stroke-dashoffset", topLength);
//
polylineLeft.setAttribute("stroke-dasharray", leftLength);
polylineLeft.setAttribute("stroke-dashoffset", leftLength);
//
polylineBottom.setAttribute("stroke-dasharray", bottomLength);
polylineBottom.setAttribute("stroke-dashoffset", bottomLength);
//
polylineInfo.setAttribute("stroke-dasharray", infoLength);
polylineInfo.setAttribute("stroke-dashoffset", infoLength);
//
polylineWorks.setAttribute("stroke-dasharray", worksLength);
polylineWorks.setAttribute("stroke-dashoffset", worksLength);

// PATH TEST

//get coordinates of image wrap
const imgWrap = document.querySelector(".img-wrap");
let imgWrapPosition = imgWrap.getBoundingClientRect();
let imgWrapTop = Math.floor(imgWrapPosition.top);
let imgWrapLeft = Math.floor(imgWrapPosition.left);

//get image wraps for events
const imgEl = document.querySelectorAll(".img");

console.log(imgWrapTop, imgWrapLeft, "alooo");

let mouseX;
let mouseY;
const pathEl = document.querySelector(".path");

let pathPoints = "M 600,400 L 400, 400 l 100, 100, z";

let pathPointsTest = `m ${imgWrapLeft + 100},${
  imgWrapTop - 50
} l 175,0 l 0,175 l -175,0 z`;
//
pathEl.setAttribute("d", pathPointsTest);

let pathLength = pathEl.getTotalLength();

pathEl.setAttribute("stroke-dasharray", pathLength);
pathEl.setAttribute("stroke-dashoffset", pathLength);

imgEl[0].addEventListener("mouseover", () => {
  pathEl.classList.add("hover");
});

imgEl[0].addEventListener("mouseleave", () => {
  pathEl.classList.remove("hover");
});

//path animacija mouse - test

function updateDisplay(event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
  //console.log(mouseX, mouseY);
  //if (mouseX < width && mouseY < height / 3) {
  // pathPoints = `M 500, 500 L 600, 600 l ${mouseX}, ${mouseY} l 700, 700 z`;
  // pathEl.setAttribute("d", pathPoints);
  // pathEl.setAttribute("stroke", "orange");
  //}
}

document.addEventListener("mousemove", updateDisplay, false);

window.addEventListener("scroll", checkScroll);

function checkScroll() {
  let scrollPercent =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  //test
  let scrollFromTop = document.documentElement.scrollTop;
  console.log(
    "document.documentElement.scrollTop",
    scrollFromTop,
    "document.documentElement.scrollHeight",
    document.documentElement.scrollHeight,
    "document.documentElement.clientHeight",
    document.documentElement.clientHeight
  );

  if (scrollFromTop > 150) {
    polylineInfo.classList.add("animate-info");
  } else {
    polylineInfo.classList.remove("animate-info");
  }

  if (scrollFromTop > 900) {
    polylineWorks.classList.add("animate-info");
  } else {
    polylineWorks.classList.remove("animate-info");
  }
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
