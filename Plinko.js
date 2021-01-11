class Plinko {
    constructor(x,y,) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,7,options);
     // this.width = width;
     // this.height = height;
     this.radius=7;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // var angle = this.body.angle;
      //rectMode(CENTER);
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      ellipseMode(RADIUS);
      stroke("red");
      fill("yellow");
      ellipse(0,0, this.radius,this.radius);
      pop();
    }
  };
