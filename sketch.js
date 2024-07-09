var path,cat,raton,leche,estambre,agua;
var pathImg,catImg,ratonImg,lecheImg,estambreImg,aguaImg;
var treasureCollection = 0;
var catG,ratonG,lecheG,estambreG,aguaGroup;


var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  catImg = loadImage("cat.png");
  ratonImg = loadImage("mouse.png");
  lecheImg = loadImage("bottle.png");
  estambreImg = loadImage("knitting.png");
  aguaImg = loadImage("splash.png");
  gover = loadImage("gameOver.png");
  
  
  gover = loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);

  
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


cat = createSprite(70,580,20,20);
cat.addImage(catImg);
cat.scale=0.2;
  


ratonG=new Group();
lecheG=new Group();
estambreG= new Group();
aguaGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  cat.x = World.mouseX;
  
  edges= createEdgeSprites();
  cat.collide(edges);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createestambre();
    createraton();
    createleche();
    createagua();

    if (estambreG.isTouching(cat)) {
      estambreG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (ratonG.isTouching(cat)) {
      ratonG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(lecheG.isTouching(cat)) {
      lecheG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(aguaGroup.isTouching(cat)) {
        gameState=END;
       
        
        estambreG.destroyEach();
        ratonG.destroyEach();
        lecheG.destroyEach();
        aguaGroup.destroyEach();
        
        estambreG.setVelocityYEach(0);
        ratonG.setVelocityYEach(0);
        lecheG.setVelocityYEach(0);
        aguaGroup.setVelocityYEach(0);
      

          over = createSprite(180,280,20,20);
          over.addAnimation("gameover",gover);
          over.scale=0.7

       
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesoro: "+ treasureCollection,10,30);
  }

}

function createraton() {
  if (World.frameCount % 200 == 0) {
  var raton = createSprite(Math.round(random(50, 350),40, 10, 10));
  raton.addImage(ratonImg);
  raton.scale=0.10;
  raton.velocityY = 3;
  raton.lifetime = 300;
  ratonG.add(raton);
  }
}

function createestambre() {
  if (World.frameCount % 320 == 0) {
  var estambre = createSprite(Math.round(random(50, 350),40, 10, 10));
  estambre.addImage(estambreImg);
  estambre.scale=0.10;
  estambre.velocityY = 3;
  estambre.lifetime = 300;
  estambreG.add(estambre);
}
}

function createleche() {
  if (World.frameCount % 410 == 0) {
  var leche = createSprite(Math.round(random(50, 350),40, 10, 10));
  leche.addImage(lecheImg);
  leche.scale=0.13;
  leche.velocityY = 3;
  leche.lifetime = 300;
  lecheG.add(leche);
  }
}

function createagua(){
  if (World.frameCount % 530 == 0) {
  var agua = createSprite(Math.round(random(50, 350),40, 10, 10));
  agua.addImage(aguaImg);
  agua.scale=0.1;
  agua.velocityY = 3;
  agua.lifetime = 300;
  aguaGroup.add(agua);
  }
}
