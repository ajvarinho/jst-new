import "./style.css";

const paintings = [
  {
    src: "/public/img/paintings/1.jpg",
    alt: "",
    title: "test jedan",
    info: "",
  },
  { src: "/public/img/paintings/2.jpg", alt: "", title: "test alo", info: "" },
  {
    src: "/public/img/paintings/3.jpg",
    alt: "",
    title: "test jebo majku ",
    info: "",
  },
  { src: "/public/img/paintings/4.jpg", alt: "", title: "sfax", info: "" },
  {
    src: "/public/img/paintings/5.jpg",
    alt: "",
    title: "olimpik marsej",
    info: "",
  },
  {
    src: "/public/img/paintings/6.jpg",
    alt: "",
    title: "test jedan",
    info: "",
  },
  {
    src: "/public/img/paintings/7.jpg",
    alt: "",
    title: "test jedan",
    info: "",
  },
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
const contactBtn = document.getElementById("contactBtn");
const contactWrap = document.querySelector(".contact-wrap");
const contactWrapList = document.querySelector(".contact-wrap__list");
const overlayTitle = document.getElementById("overlay-title");

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

const previewInfoEl = [...document.querySelectorAll(".preview-info")];

const aboutTitle = document.querySelector(".about-wrap__title");
const aboutImg = document.getElementById("justyna-img");

// ANIMACIJE INTRO

const aboutClose = document.getElementById("about-close");

welcomeBtn.addEventListener("click", () => {
  welcomeBtn.classList.add("no-display");
  welcomeEl.classList.add("anim-opening");
  menuWrap.classList.remove("start-wide");
  contactWrap.classList.add("wrap-on");
});

aboutBtn.addEventListener("click", () => {
  aboutWrap.classList.remove("about-wrap");
  aboutWrap.classList.add("about-wrap-test__open");
});

aboutClose.addEventListener("click", () => {
  aboutWrap.classList.remove("about-wrap-test__open");
  aboutWrap.classList.add("about-wrap");
});

aboutTitle.addEventListener("click", () => {
  aboutImg.classList.toggle("active");
});

worksBtn.addEventListener("click", () => {
  menuWrap.classList.add("no-height");
});

backBtn.addEventListener("click", () => {
  menuWrap.classList.remove("no-height");
});

contactBtn.addEventListener("click", () => {
  contactWrapList.classList.toggle("visible");
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

previewImages.forEach((image, index) => {
  image.addEventListener("click", (event) => {
    let test = event.target;
    let imageSrc = image.src;
    imgPreviewEl.src = imageSrc;
    overlayTitle.innerText = paintings[index].title;
  });
});

const figureElArr = [...document.querySelectorAll("figure")];

figureElArr.forEach((image, index) => {
  image.addEventListener("click", (event) => {
    let test = event.target;
    //test.querySelector(".preview-info").innerText = paintings[index].title;
    test.querySelector(".preview-info").style.opacity = 1;
  });
  // image.addEventListener("mouseleave", (event) => {
  //   let test = event.target;
  //   test.querySelector(".preview-info").style.opacity = 0;
  // });
});
