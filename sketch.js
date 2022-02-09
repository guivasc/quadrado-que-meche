var block





function setup() {
  createCanvas(400,400);
block = createSprite(200, 200, 20, 20)




}

function draw() 
{
  background(30);
 drawSprites()

if(keyDown(RIGHT_ARROW)){
 block.x=block.x+2
}
if(keyDown(LEFT_ARROW)){
  block.x=block.x-2
}



}




