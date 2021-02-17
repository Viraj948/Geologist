class Sand{
    constructor(x, y, r) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1,

      }
      this.body = Bodies.circle(x,y,(r-20)/2, options);
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
      fill("red");
      stroke("black");
      strokeWeight(4);
     ellipse(0,0,this.r,this.r);
      pop();
    }
  };
 