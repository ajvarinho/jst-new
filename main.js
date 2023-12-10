import './style.css';
import * as THREE from 'three';
//import * as Gallery from './components/gallery-animation.js'

const navPaintings = document.getElementById('nav_painting')
const galleryWrap = document.querySelector('.gallery-wrap')
const navExhibitions = document.getElementById('nav_exhibition')
const exhibitionsWrap = document.querySelector('.exhibition-wrap')
const infoText = document.querySelector('.test-div__text')
const headerBtn = document.getElementById('menu-btn')
const headerMenu = document.getElementById('menu-list')
const sectionArr = [ ...document.querySelectorAll('section') ]
const imgIntro = document.querySelector('.img-intro')
const aboutBtn = document.getElementById('aboutBtn')
const aboutWrap = document.getElementById('aboutWrap')
const worksBtn = document.getElementById('worksBtn')
const worksWrap = document.getElementById('works')
const menuWrap = document.getElementById('menuWrap')
const backBtn = document.getElementById('backBtn')
const contactWrap = document.querySelector('.contact-wrap')



const welcomeBtn = document.getElementById('welcomeBtn')
const welcomeEl = document.querySelector('.cover')

welcomeBtn.addEventListener('click', ()=>{
    welcomeEl.classList.add('anim-opening')
    imgIntro.classList.add('img-width')
    sectionArr.forEach((element)=>{
        element.classList.add('anim-scroll')
    })
    contactWrap.classList.add('wrap-on')
    sectionArr.forEach((element)=>{
        element.style.width = '100%'
    })
})

headerBtn.addEventListener('click', ()=> {
    headerMenu.classList.toggle('open')
    imgIntro.style.width = '0%'
})

aboutBtn.addEventListener('click', ()=>{
    aboutWrap.classList.toggle('about-wrap-test__open')
})

worksBtn.addEventListener('click', ()=>{
    menuWrap.classList.add('no-height')
})

backBtn.addEventListener('click', ()=>{
    menuWrap.classList.remove('no-height')
})

//
const galleryPreviewImages = document.querySelectorAll('.item__img')
const activeGalleryImage = document.getElementById('active-img')
const activeImgWrap = document.querySelector('.active-image-wrap')


navPaintings.addEventListener('click', ()=> {
    galleryWrap.classList.toggle('gallery-active')
})

navExhibitions.addEventListener('click', ()=> {
    exhibitionsWrap.classList.toggle('exhibition-active')
})

galleryPreviewImages.forEach((element)=> {
    element.addEventListener('click', ()=> {
        element.classList.toggle('item-active')
        activeImgWrap.classList.toggle('active')
        infoText.innerHTML = 'image active'
        activeGalleryImage.src = element.src
        //sresetInfo()
    })
})

const resetInfo = () => {
galleryPreviewImages.forEach((element)=> {
    if(!element.classList.contains('item-active')) {
        infoText.innerHTML = ''
    }
})
}


// const zoomElement = document.querySelector(".jedan");
// const moveEl = document.querySelector(".dva");
// const moveThree = document.querySelector(".tri");
// const zoomFour = document.querySelector(".cetri");
// let zoom = 1;
// const ZOOM_SPEED = 0.1;
// let move = 10
// const MOVE_SPEED = 5

// document.addEventListener("wheel", function(e) {  
    
//     if(e.deltaY > 0){    
//         zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
//         zoomFour.style.transform = `scale(${zoom += ZOOM_SPEED})`; 
//         moveEl.style.transform = `translateX(${move += MOVE_SPEED}%)`;
//         moveThree.style.transform = `translateX(${move += MOVE_SPEED}%)`;

//     }else{    
//         zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  
//         zoomFour.style.transform = `scale(${zoom -= ZOOM_SPEED})`; 
//         moveEl.style.transform = `translateX(${move -= MOVE_SPEED}%)`; 
//         moveThree.style.transform = `translateX(${move -= MOVE_SPEED}%)`;
//     }
// });


