
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone,iron1,rubber1,hammer,sand1,sand2,sand4,sand5,sand6,sand7,sand8,sand9,sand10;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;
   
	
	ground = new Ground(600,height,1200,30);
	stone=new Stone(700,332,100,100);
	
	iron1=new Iron(300,350,80,50);
	rubber1=new Rubber(900,450,70);
	hammer=new Hammer(10,100,width,height);
	sand1=new  Sand(505,450,10);
	sand2=new Sand(510,450,10);
	sand3=new Sand(515,450,10);
	sand4=new Sand(520,450,10);
	sand5=new Sand(525,450,10);
	sand6=new  Sand(515,445,10);
	sand7=new Sand(520,445,10);
	sand8=new Sand(525,445,10);
	sand9=new Sand(530,445,10);
	sand10=new Sand(535,445,10);
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();
  stone.display();
  iron1.display();
 rubber1.display();
 hammer.display();
 sand1.display() ;
 sand2.display ();
 sand3.display();
 sand4.display ();
 sand5.display();
 sand6.display() ;
 sand7.display ();
 sand8.display();
 sand9.display ();
 sand10.display();
 
 
 
}



