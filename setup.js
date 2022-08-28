////////////////INFO & FEATURES
let myTitle = "Testsuo";
let info = '<h3>During the generation process<h/3><h5>Press h to hide this window</br>Press j to display it</h5>'
let present = '<h2>' + myTitle + '</h2><p>by</p><h3>smldms</h3><hr>'
console.log(myTitle + " | smldms 2022.06"), console.log("HASH: " + fxhash);
console.log(window.$fxhashFeatures = {
  "Palette": palette.name,
  "Mode 1": turb.name,
  "Ambiant Light": light.name,
})
////////////////////////////////////////
let seed = Math.floor(999999 * fxrand());
// let globalW = window.innerWidth;
// let globalH = window.innerHeight;
let globalSize = 1024;
let cnv;
let pD = 1;
let gen;
let graph;
let percent;
let camera;
let speed = 0.25;
let obj;

function preload() {
  obj = loadModel('assets/planH.obj')
  btc = loadModel('assets/btc.obj')
}

function setup() {
  document.body.style.cursor = 'default';
  randomSeed(seed);
  noiseSeed(seed);
  cnv = createCanvas(globalSize, globalSize, WEBGL)
  graph = createGraphics(width, height)
  cnv.parent('fullScreen');
  camera = createCamera();
  pixelDensity(pD);
  rectMode(CENTER)
  angleMode(DEGREES)
  gen = new myObj();
  gen.back();
  gen.buildBoxes();
  let locX = fxrandBetween(-width/2, width/2);
  let locY = fxrandBetween(-height/2, height/2);
  camera.setPosition(30, 0, 50);
  camera.lookAt(locX, locY, fxrandBetween(-5000, 5000));
  // camera.lookAt(0, 0, 0);
  camera.ortho()
  push()
  rotateY(rY.val);
  rotateX(fxrand() * 360);
  rotateZ(fxrand() * 360);
  ambientLight(light.val, 100);
  lightFalloff(0.97, 0.001, 0);
  specularColor(palette.clr[1])
  pointLight(255, 255, 255, 0, fxrand() * height / 4, 50);
  pointLight(255, 255, 255, 0, fxrand() * -height / 4, 50);
  pointLight(255, 255, 255, -height / 4, 0, -height / 4);
  pointLight(255, 255, 255, height / 4, 0, -height / 4);

  specularMaterial(palette.clr[0]);
  scale(0.5)
  // scale(scl.val)
  gen.show()
  pop()
  fxpreview()
  // timer()
}