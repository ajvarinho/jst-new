import './style.css';
import * as THREE from 'three';
//import * as Gallery from './components/gallery-animation.js'

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

//
const previewImages = [ ...document.querySelectorAll('.item__img')]
const imgPreviewEl = document.querySelector('#active-img')

// works navigation

const menuBtn = document.getElementById('nav-works')
const activeModule = document.getElementById('active-module')

const paintingsBtn = document.getElementById('nav_painting')
const sculptureBtn = document.getElementById('nav_sculpture')
const exhibitionsBtn = document.getElementById('nav_exhibition')
const designBtn = document.getElementById('nav_design')




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

//WORKS WRAP FUNCTIONALITY

paintingsBtn.addEventListener('click', ()=> {
    activeModule.innerText = 'PAINTINGS'
})

sculptureBtn.addEventListener('click', ()=> {
    activeModule.innerText = 'SCULPTURE'
})

exhibitionsBtn.addEventListener('click', ()=> {
    activeModule.innerText = 'EXXHIBITIONS'
})

designBtn.addEventListener('click', ()=> {
    activeModule.innerText = 'DESIGN'
})

previewImages.forEach((image) => {
    image.addEventListener('click', (event)=> {
        let test = event.target

        let imageSrc = image.src
        console.log('test', test, 'img src', imageSrc)
        imgPreviewEl.src = imageSrc
    })
})
