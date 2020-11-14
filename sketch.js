var playerp, compp, sore, ball;
var gameState = play;

function setup(){
 createCanvas(400, 400);

 playerp = createSprite(390, 200, 10, 110);
 playerp.shapeColor = ("blue");

 compp = createSprite(10, 200, 10, 110);
 compp.shapeColor = ("red");

 ball = createSprite(200, 200, 15, 15);
 
}

function draw(){
 background("yellow");
 playerp.y = World.mouseY;

if(gameState === play){
 ball.velocityY = 4;
 ball.velocityX = -4;

}
 drawSprites();
}