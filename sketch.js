var PLAY = 1;
var END = 0;
var gameState = PLAY;

var blast, laser, night, sun;
var asteroid, spaceship;

function preload(){
  asteroid =   loadAnimation("asteroid.jpg");
  blast = loadAnimation("blast.png");
  laser = loadImage("laser.jpg");
  spaceship = loadImage("spaceship.png");
  sun = loadImage("sun.jpg");
  night = loadImage("night.jpg");
}

function setup() {
  createCanvas(1100, 200);
  sun = createSprite(200,180,20,50);
  spaceship = createSprite(100,100,50,100);
  
}
function spawnAsteroid() {
  if(frameCount % 60 === 0) {
    var asteroid = createSprite(600,165,10,40);
    //asteroid.debug = true;
    }

function draw() {
  background("night");
  spawnAsteroid();
    if(spaceship.isTouching(asteroid)){
        gameState = END;
    }
    drawSprites();
}
}
