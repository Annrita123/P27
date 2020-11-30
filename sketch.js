
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobobj1,bobobj2,bobobj3,bobobj4,bobobj5,roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobobj1= new Bob(250,400,80);
	bobobj2= new Bob(330,400,80);
	bobobj3= new Bob(410,400,80);
	bobobj4= new Bob(490,400,80);
	bobobj5= new Bob(570,400,80);
	roof= new Roof(420,100,400,30);
	rope1=new Chain(bobobj1.body,roof.body,-80*2,0)
	rope2=new Chain(bobobj2.body,roof.body,-80*2,0)
	rope3=new Chain(bobobj3.body,roof.body,-80*2,0)
	rope4=new Chain(bobobj4.body,roof.body,-80*2,0)
	rope5=new Chain(bobobj5.body,roof.body,-80*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  bobobj1.display();
  bobobj2.display();
  bobobj3.display();
  bobobj4.display();
  bobobj5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobobj1.body,bobobj1.body.position,{x:-74,y:-74});
	}
	}



