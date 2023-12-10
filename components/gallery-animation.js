import '../style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import imgBg from '../public/img/2.jpg'
import imgCube from '../public/img/portret-removebg-preview.png'
// import imgSphere from './public/img/9.jpg'

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);


// Background

const bgTexture = new THREE.TextureLoader().load(imgBg);
scene.background = bgTexture;

// Avatar

// const cubeTexture = new THREE.TextureLoader().load(imgCube);

// const cube = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshBasicMaterial({ map: cubeTexture }));

// scene.add(cube);

// cube.position.z = -5;
// cube.position.x = -3;



const loader = new THREE.TextureLoader();
const texture = loader.load( imgCube )

const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( {map: texture} );
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );

const geometry2 = new THREE.PlaneGeometry( 3, 3 );
const material2 = new THREE.MeshBasicMaterial( {map: texture} );
const plane2 = new THREE.Mesh( geometry2, material2 );
scene.add( plane2 );

plane2.position.z = -5;
plane2.position.x = -2;


// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  // moon.rotation.x += 0.05;
  // moon.rotation.y += 0.075;
  // moon.rotation.z += 0.05;

  // cube.rotation.y += 0.01;
  // cube.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  //moon.rotation.x += 0.005;

  // controls.update();

  renderer.render(scene, camera);
}

animate();