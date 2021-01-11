class Particles {
    constructor(x,y,r) {
      var options = {
          restitution: 0.4,
          isStatic: false
      }
      this.body = Bodies.circle(x,y,7,options);
     // this.width = width;
     // this.height = height;
     this.radius=7;
     this.color=color(random(0,255),random (0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //rectMode(CENTER);
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      fill(this.color);
      ellipseMode(RADIUS);
      //stroke("yellow");
      //fill(225);
      ellipse(0,0, this.radius,this.radius);
      pop();
    }
  };
