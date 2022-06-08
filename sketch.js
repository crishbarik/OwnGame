var plr , plrImg;
var C1 , C1Img;
var C2 , C2Img;
var C3 , C3Img;
var C4 , C4Img;
var C5 , C5Img;
var car , carGroup ;
var groundB, groundT ;
var gameOver , gameOverImg;
var restart , restartImg;
var PLAY = 1;
var END = 0;
var bg, bgImg;

function preload(){
  plrImg = loadImage("images/PC.png");
  C1Img  = loadImage("images/C1.jpg");
  // C2Img  = loadImage("images/C2.png");
  // C3Img  = loadImage("images/C3.png");
  // C4Img  = loadImage("images/C4.png");
  // C5Img  = loadImage("images/C5.png");
  gameOverImg = loadImage("images/gameOver.png") ;
  restartImg  = loadImage("images/restart.png") ;
  bgImg  = loadImage("images/bg1.png");
}

function setup() {
  createCanvas(2000,800);
  // createSprite(400, 200, 50, 50);
  bg = createSprite(1200,400,5000,400);
  bg.addImage(bgImg)
  bg.scale = 1

  plr = createSprite(100,620);
  plr.addImage(plrImg)
  plr.scale = 0.75

  groundB = createSprite(200,790,5000,20);
  groundB.visible = false ;

  
  groundT = createSprite(200,10,5000,20);
  groundT.visible = false;

  plr.setCollider("rectangle",0,0,plr.width-100,plr.height-140)
  plr.debug = false ;
  groundT.debug = false;

  gameOver = createSprite(800,500);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(800,500);
  restart.addImage(restartImg);
  
 
  gameOver.scale = 1;
  restart.scale = 1;

  gameOver.visible = false;
  restart.visible = false;
  carGroup = new Group();

}

function draw() {
  background("white"); 
  text("Score",500,400);
  if(gameState === PLAY){
    bg.velocityX = -5;

    console.log("Scoreee")
    if(bg.x < 0){
     bg.x = width/2
   }

  if(keyDown(UP_ARROW)){
    plr.velocityY = -3;
  }
 
  
  if(keyDown(DOWN_ARROW)){
    plr.velocityY = 3;
  }
  
    
  if(plr.isTouching(groundT)){
    plr.y = 620 ;
  }
 
  
  if(plr.y > 620){
    plr.y = 620
  }
  spawnCar();

  if(carGroup.isTouching(plr)){
    gameState = END
 }
  

}
 else if(gameState === END){
    plr.velocityY = 0;
    gameOver.visible = true;
    restart.visible =  true;
    carGroup.setVelocityXEach(0);
    bg.velocityX = 0;
    console.log("Game Over");
    plr.visible = false;
    carGroup.destroyEach();
    fill("white");
    // size(35);
    text("Game OVER" ,800,600)
    carGroup.setLifetimeEach(-1);
    
  
  // if(plr.isTouching(groundB)){
  //   plr.y = 610 ;
  // }
 }
  drawSprites();
  text("xyz" , 500, 400);

}

function spawnCar(){
  if(frameCount%100 === 0){

  

  var y = Math.round(random(100,710))
  car = createSprite(1600,y)
  var rand = Math.round(random(1,5))

  car.addImage(C1Img);
  // switch(rand){
  //   case 1: car.addImage(C1Img)
  // break;

  // case 2: car.addImage(C2Img)
  // break;

  // case 3: car.addImage(C3Img)
  // break;

  // case 4: car.addImage(C4Img)
  // break;

  // case 5: car.addImage(C5Img)
  // break;
  // default:break;
  // }
  car.velocityX = -5
  car.scale = 0.5
  carGroup.add(car);
  plr.depth = car.depth + 1 ;
}
}
