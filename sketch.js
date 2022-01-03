var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}

function draw() {
  background(0);
  movingRect.x=mouseX
  movingRect.y=mouseY
  if(fixedRect.width/2 + movingRect.width/2 > movingRect.x - fixedRect.x
    && fixedRect.width/2 + movingRect.width/2 >  fixedRect.x - movingRect.x 
    && fixedRect.height/2 + movingRect.height/2 > movingRect.y - fixedRect.y
    && fixedRect.height/2 + movingRect.height/2 >  fixedRect.y - movingRect.y
    ){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="yellow";
  }  
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}