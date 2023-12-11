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
