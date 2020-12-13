var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var dog;
var dogImg;

var database;

var form, player, game;

function preload() {

  dogImg = loadImage("Dog.png");
  dogImg2 = loadImage("happydog.png");
}


function setup() {
  canvas = createCanvas(500, 800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  dog = createSprite(200, 350, 10, 10)

  if (gameState === 0) {
    dog.addImage(dogImg)
  }


  if (gameState === 1) {
    dog.addImage(dogImg2)
  }

  dog.scale = 0.3


}


function draw() {

  background("white")
  // dogImg = Image(0, 20, 0, 20)
  textSize(20)
  text("Foodstock: " + playerCount, 200, 100)
  drawSprites()
}

function dogFed() {
  dog.addImage(dogImg2)

}
