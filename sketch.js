
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,stand1,stand2
var slingshot,hexagon
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  //fill(255,192,203)
  stand1= new Ground(810,420,250,15)
  stand2= new Ground(1300,150,180,15)
  ground= new Ground(750,800,1600,150)
  block1= new Box(720,400,30,40)
  block2= new Box(750,400,30,40)
  block3= new Box(780,400,30,40)
  block4= new Box(810,400,30,40)
  block5= new Box(840,400,30,40)
  block6= new Box(870,400,30,40)
  block7= new Box(900,400,30,40)
  block8= new Box(750,360,30,40)
  block9= new Box(780,360,30,40)
  block10= new Box(810,360,30,40)
  block11= new Box(840,360,30,40)
  block12= new Box(870,360,30,40)
  block13= new Box(780,320,30,40)
  block14= new Box(810,320,30,40)
  block15= new Box(840,320,30,40)
  block16= new Box(810,280,30,40)
  block17= new Box(1240,130,30,40)
  block18= new Box(1270,130,30,40)
  block19= new Box(1300,130,30,40)
  block20= new Box(1330,130,30,40)
  block21= new Box(1360,130,30,40)
  block22= new Box(1270,90,30,40)
  block23= new Box(1300,90,30,40)
  block24= new Box(1330,90,30,40)
  block25= new Box(1300,50,30,40)
  hexagon= new Hexagon(80,600,30)
  slingshot= new Slingshot(hexagon.body,{x:80,y:600})
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(210,210,210);
  hexagon.display();
  fill(222,127,165)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(188,66,65)
  stand1.display();
  stand2.display();
  ground.display();
  fill(139,0,247)
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(135,206,234)
  block13.display();
  block14.display();
  block15.display();
  fill(26,163,232)
  block16.display();
  fill(5,97,6)
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill(129,221,90)
  block22.display();
  block23.display();
  block24.display();
  fill(238,247,64)
  block25.display();
  strokeWeight(4);

  slingshot.display();
 // drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(hexagon.body);
  }
}