var fixed,moving;
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(500,300,70,30);
  fixed.shapeColor="blue";
  moving.shapeColor="yellow";
  a=createSprite(200,150,40,40);
  a.velocityX=5;
  b=createSprite(700,150,40,40);
  b.velocityX=-4;
}

function draw() {
  background(0);  
  drawSprites();
  moving.x=mouseX;
  moving.y=mouseY;
 if( isTouching(moving,fixed)){
  fixed.shapeColor="green";
  moving.shapeColor="pink"; 
 }
else{
  fixed.shapeColor="blue";
  moving.shapeColor="yellow"; 

}
bounceOff(a,b);
}
function isTouching(object1,object2){
 if (object1.x-object2.x<=object1.width/2+object2.width/2
     && object2.x-object1.x<=object1.width/2+object2.width/2
     && object1.y-object2.y<=object1.height/2+object2.height/2
     && object2.y-object1.y<=object1.height/2+object2.height/2){
  return true; 
 }
 else{
 return false;  
 }
}
function bounceOff(object1,object2){
  if (object1.x-object2.x<=object1.width/2+object2.width/2
    && object2.x-object1.x<=object1.width/2+object2.width/2){
      object1.velocityX=-1*object1.velocityX;
      object2.velocityX=-1*object2.velocityX;
    }
    if(  object1.y-object2.y<=object1.height/2+object2.height/2
      && object2.y-object1.y<=object1.height/2+object2.height/2){
        object1.velocityY=-1*object1.velocityY;
        object2.velocityY=-1*object2.velocityY;
      }
}