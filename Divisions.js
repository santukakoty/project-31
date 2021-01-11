class Divisions {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      fill("gray");
      rect(0,0, this.width, this.height);
      pop();
    //  super.display();
      
      //for (var k = 0; k <=this.width; k = k + 80){
        //divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      //}
    }
  };
 

