const objects = [];
let eyeZ;

console.log("alo");

//test
let bg;
let bg2;
let img;
let mesh;
let vid;
let theta = 0;

function preload() {
  bg = loadImage("./public/img/exhibitions/20231223_203843.jpg");
  img = loadImage("./public/img/paintings/3.jpg");
  bg2 = loadImage("/public/img/exhibitions/20231223_203805.jpg");
  mesh = loadImage("./public/img/design/20231223_203946.jpg");
}

function setup() {
  let canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  // - window.innerHeight / 5
  canvas.parent("#canvas-wrap");

  eyeZ = 800; // The default distance the camera is away from the origin.

  objects.push(new IntersectPlane(1, 0, 0, -100, 0, 0)); // Left wall
  objects.push(new IntersectPlane(1, 0, 0, 100, 0, 0)); // Right wall
  objects.push(new IntersectPlane(0, 1, 0, 0, -100, 0)); // Bottom wall
  objects.push(new IntersectPlane(0, 1, 0, 0, 100, 0)); // Top wall
  objects.push(new IntersectPlane(0, 0, 1, 0, 0, 0)); // Back wall

  noStroke();
  ambientMaterial(53, 53, 223);
}

function draw() {
  background(0);

  texture(bg);

  // Lights
  pointLight(255, 255, 255, 400, 100, 400);
  ambientLight(255);

  // Left wall
  push();
  translate(-300, 0, 200);
  rotateY((90 * PI) / 180);
  plane(window.innerWidth / 2, window.innerHeight / 2);
  pop();

  texture(bg2);

  // Right wall

  push();
  translate(250, 0, 200);
  rotateY((90 * PI) / 180);
  plane(500, 400);
  pop();

  texture(mesh);

  // Bottom wall
  push();
  translate(-50, 200, 300);
  rotateX((90 * PI) / 180);
  plane(420, 520);
  pop();

  // Top wall
  push();
  translate(0, -200, 200);
  rotateX((90 * PI) / 180);
  plane(200, 400);
  pop();

  texture(bg2);

  plane(window.innerWidth / 2, window.innerHeight / 2); // Back wall

  const x = mouseX - width / 2;
  const y = mouseY - height / 2;

  const Q = createVector(0, 0, eyeZ); // A point on the ray and the default position of the camera.
  const v = createVector(x, y, -eyeZ); // The direction vector of the ray.

  let intersect; // The point of intersection between the ray and a plane.
  let closestLambda = eyeZ * 10; // The draw distance.

  for (let x = 0; x < objects.length; x += 1) {
    let object = objects[x];
    let lambda = object.getLambda(Q, v); // The value of lambda where the ray intersects the object

    if (lambda < closestLambda && lambda > 0) {
      // Find the position of the intersection of the ray and the object.
      intersect = p5.Vector.add(Q, p5.Vector.mult(v, lambda));
      closestLambda = lambda;
    }
  }

  // Cursor
  push();
  translate(intersect);
  fill(237, 34, 93);
  texture(bg2);
  sphere(10);
  pop();
}

// Class for a plane that extends to infinity.
class IntersectPlane {
  constructor(n1, n2, n3, p1, p2, p3) {
    this.normal = createVector(n1, n2, n3); // The normal vector of the plane
    this.point = createVector(p1, p2, p3); // A point on the plane
    this.d = this.point.dot(this.normal);
  }

  getLambda(Q, v) {
    return (-this.d - this.normal.dot(Q)) / this.normal.dot(v);
  }
}
