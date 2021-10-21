var box;
function setup()
{
  box=createSprite(200,200,50,50);
  box.shapeColor="pink";
}
function draw() 
{
  background("black");
  if(keyDown("RIGHT_ARROW")){
  box.x=box.x+3;
  background("teal");
}
  if(keyDown("LEFT_ARROW")){
    box.x=box.x-3;
    background("crimson");
  }
    if(keyDown("UP_ARROW")){
      box.y=box.y-3;
      background("indigo")
  }
  if(keyDown("DOWN_ARROW")){
    box.y=box.y+3;
    background("grey")
}
 drawSprites();
 
}




