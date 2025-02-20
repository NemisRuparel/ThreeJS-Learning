import * as THREE from "three";
const scene = new THREE.Scene();
const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color:"#000"});

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)

scene.add(cubeMesh);
console.log(scene);

const camera = new THREE.PersepectiveCamera(75,window.innerWidth,window.innerHeight,0.1,30);
camera.position.z = 5;
scene.add(camera);

//intialize the renderer
const renderer = new THREE.renderer();