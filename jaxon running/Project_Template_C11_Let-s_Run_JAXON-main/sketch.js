var jaxon
var jaxon_image
var path
var path_image
var leftwall,rightwall
function preload(){
  //pre-load images
jaxon_image=loadAnimation("Runner-1.png","Runner-2.png")
path_image=loadAnimation("path.png")



}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,400,400)
  path.addAnimation("moving",path_image)
  path.scale=1.2
  path.velocityY=3
  jaxon=createSprite(200,360,20,20)
  jaxon.addAnimation("running",jaxon_image)
  jaxon.scale=0.1
leftwall=createSprite(0,0,100,800)
leftwall.visible=false
rightwall=createSprite(410,0,100,800)
rightwall.visible=false
}

function draw() {
  background(0);
  jaxon.x=mouseX
  jaxon.collide(leftwall)
  jaxon.collide(rightwall)
  drawSprites()
  if(path.y>400){
    path.y=200
    }
}
