class Rubber{
  constructor(x, y, r) {
    var options = {
        'restitution':0.3,
        'friction':5,
        'density':1,
    }
    this.body=Bodies.circle(x,y,r,options);
    this.x=x;
    this.y=y;
    this.r=r;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   
    push();
    translate(pos.x, pos.y);

   rectMode(CENTER);
    fill("blue");
    stroke("white");
    strokeWeight(4);
   ellipse(0,0,this.r,this.r);
    pop();
  }
};