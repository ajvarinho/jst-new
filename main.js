import "./style.css";
import * as THREE from "three";
//import * as Gallery from './components/gallery-animation.js'

const paintings = [
  { src: "/public/img/paintings/1.jpg", alt: "", title: "", info: "" },
  { src: "/public/img/paintings/2.jpg", alt: "", title: "", info: "" },
  { src: "/public/img/paintings/3.jpg", alt: "", title: "", info: "" },
  { src: "/public/img/paintings/4.jpg", alt: "", title: "", info: "" },
  { src: "/public/img/paintings/5.jpg", alt: "", title: "", info: "" },
  { src: "/public/img/paintings/6.jpg", alt: "", title: "", info: "" },
  { src: "/public/img/paintings/7.jpg", alt: "", title: "", info: "" },
];

const design = [
  { src: "/public/img/design/1.jpg", alt: "", title: "", info: "" },
  { src: "/public/img/design/2.jpg", alt: "", title: "", info: "" },
  { src: "/public/img/design/3.jpg", alt: "", title: "", info: "" },
  { src: "/public/img/design/4.jpg", alt: "", title: "", info: "" },
  { src: "/public/img/design/5.jpg", alt: "", title: "", info: "" },
  { src: "/public/img/design/6.jpg", alt: "", title: "", info: "" },
  { src: "/public/img/design/7.jpg", alt: "", title: "", info: "" },
];

const headerBtn = document.getElementById("menu-btn");
const headerMenu = document.getElementById("menu-list");
const sectionArr = [...document.querySelectorAll("section")];
const imgIntro = document.querySelector(".img-intro");
const aboutBtn = document.getElementById("aboutBtn");
const aboutWrap = document.getElementById("aboutWrap");
const worksBtn = document.getElementById("worksBtn");
const worksWrap = document.getElementById("works");
const menuWrap = document.getElementById("menuWrap");
const backBtn = document.getElementById("backBtn");
const contactWrap = document.querySelector(".contact-wrap");

// GRID ITEMS

const gridItemOne = document.querySelector(".grid-item.one");
const gridItemTwo = document.querySelector(".grid-item.two");
const gridItemThree = document.querySelector(".grid-item.contact-wrap");
const gridItemFour = document.querySelector(".grid-item.four");

//
const previewImages = [...document.querySelectorAll(".item__img")];
const imgPreviewEl = document.querySelector("#active-img");

// works navigation

const menuBtn = document.getElementById("nav-works");
const activeModule = document.getElementById("active-module");

const paintingsBtn = document.getElementById("nav_painting");
const sculptureBtn = document.getElementById("nav_sculpture");
const exhibitionsBtn = document.getElementById("nav_exhibition");
const designBtn = document.getElementById("nav_design");

const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeEl = document.querySelector(".cover");

// ANIMACIJE INTRO

const aboutClose = document.getElementById("about-close");

welcomeBtn.addEventListener("click", () => {
  welcomeEl.classList.add("anim-opening");

  sectionArr.forEach((element) => {
    element.classList.add("anim-scroll");
  });
  contactWrap.classList.add("wrap-on");
  sectionArr.forEach((element) => {
    element.style.width = "100%";
  });
});

aboutBtn.addEventListener("click", () => {
  aboutWrap.classList.toggle("about-wrap-test__open");
  gridItemOne.classList.add("no-display");
  gridItemTwo.classList.add("about-active");
  gridItemThree.classList.add("no-display");
  gridItemFour.classList.add("about-active");
});

aboutClose.addEventListener("click", () => {
  aboutWrap.classList.toggle("about-wrap-test__open");

  gridItemOne.classList.remove("no-display");
  gridItemTwo.classList.remove("about-active");
  gridItemThree.classList.remove("no-display");
  gridItemFour.classList.remove("about-active");
});

worksBtn.addEventListener("click", () => {
  menuWrap.classList.add("no-height");
});

backBtn.addEventListener("click", () => {
  menuWrap.classList.remove("no-height");
});

//WORKS WRAP FUNCTIONALITY

/**
 * change image sources in preview element
 */

const test = (array) => {
  const arrSrc = [];
  array.forEach((source) => {
    arrSrc.push(source.src);
  });
  previewImages.forEach((element, index) => {
    element.src = arrSrc[index];
  });
};

paintingsBtn.addEventListener("click", () => {
  activeModule.innerText = "PAINTINGS";
  test(paintings);
});

sculptureBtn.addEventListener("click", () => {
  activeModule.innerText = "SCULPTURE";
  test(design);
});

exhibitionsBtn.addEventListener("click", () => {
  activeModule.innerText = "EXXHIBITIONS";
});

designBtn.addEventListener("click", () => {
  activeModule.innerText = "DESIGN";
});

previewImages.forEach((image) => {
  image.addEventListener("click", (event) => {
    let test = event.target;

    let imageSrc = image.src;
    console.log("test", test, "img src", imageSrc);
    imgPreviewEl.src = imageSrc;
  });
});
