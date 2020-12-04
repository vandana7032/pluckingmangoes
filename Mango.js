class Mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution:0.5,
          density:1.0,
          friction:0.3
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.image=loadImage("mango.png");
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      strokeWeight(4);
      stroke("green");
      fill("yellow");
      ellipseMode(CENTER);
      imageMode(CENTER);
      image(this.image,0,0,this.r*2,this.r*2);
      pop();
    }
  };

  