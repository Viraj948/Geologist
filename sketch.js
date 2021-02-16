
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone,iron1,rubber1,hammer,sand1,sand2,sand4,sand5;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;
   
	stone=new Stone(700,445,70,70);
	ground = new Ground(600,500,1200,30);
	
	
	iron1=new Iron(200,470,60,30);
	rubber1=new Rubber(100,480,44);
	hammer=new Hammer(300,20,width,height);
	sand1=new  Sand(300,480,22);
	sand2=new Sand(127,480,22);
	sand3=new Sand(151,480,22);
	sand4=new Sand(810,480,22);
	sand5=new Sand(916,480,22);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  stone.display();
  ground.display();
  
  iron1.display();
 rubber1.display();
 hammer.display();
 
 sand1.display() ;
 sand2.display ();
 sand3.display();
 sand4.display ();
 sand5.display();
 
 
 
}



