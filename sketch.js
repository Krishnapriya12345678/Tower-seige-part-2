
var stone1
var catapult1
var backgroundImg1,backgroundImg

var ground1,ground2,ground3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score=0
backgroundImg1="bg.png"
function preload()
{
 


backImg()
}
function setup() {
	createCanvas(900, 700);







	engine = Engine.create();
	world = engine.world;

  box1=new Squares(580,470,30,30)
 box2=new Squares(550,470,30,30)
  box3=new Squares(520,470,30,30)
  box4=new Squares(490,470,30,30)
  box5=new Squares(460,470,30,30)
  box6=new Squares(560,440,30,30)
 box7=new Squares(530,440,30,30)
 box8=new Squares(500,440,30,30)
box9=new Squares(470,440,30,30)
  box10=new Squares(550,410,30,30)
 box11=new Squares(520,410,30,30)
  box12=new Squares(490,410,30,30)
box13=new Squares(530,380,30,30)
box14=new Squares(500,380,30,30)
box15=new Squares(520,350,30,30)
ground1=new Ground(400,690,900,20)
  ground2=new Ground(500,500,250,20)
  
	stone1=new Stone(50,550,30)
	catapult1=new Catapult(stone1.body,{x:150,y:560})
	Engine.run(engine);
  
}


function draw() {
  
    if(backgroundImg){
      background(backgroundImg);
      }
    


  rectMode(CENTER);
 
  
  drawSprites();
 

 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
box7.display()
 box8.display()
box9.display()
box10.display()
 box11.display()
box12.display()
 box13.display()
 box14.display()
 box15.display()
 box1.score()
 box2.score()
 box3.score()
 box4.score()
 box5.score()
 box6.score()
box7.score()
 box8.score()
box9.score()
box10.score()
 box11.score()
box12.score()
 box13.score()
 box14.score()
 box15.score()
 stone1.display()
 catapult1.display()
ground1.display()
ground2.display()

  text("SCORE "+score,200,50)
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    catapult1.fly();
}
function keyPressed(){
    if(keyCode=32){
    catapult1.attach(stone1.body)
    }
}



function isTouching(object1,object2){
  var distance=dist(object2.body.position.x,object2.body.position.y,object1.body.position.x,object1.body.position.y)
if(distance<object2.width/2+object1.radius/2){
return true
}else{
  return false
}

}
async function backImg(){
 var response=await fetch("http://worldclockapi.com/api/json/utc/now")
 
var recieve=await response.json();
var datetime= recieve.currentDateTime

var hour=datetime.slice(11,13)
console.log(hour)
if(hour>6&&hour<18){
backgroundImg1="bg.png"
}else{
backgroundImg1="bg1.jpg"
}
backgroundImg=loadImage(backgroundImg1)
}


 


















