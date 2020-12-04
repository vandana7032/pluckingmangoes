class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.5,
          density:1.2,
          friction:1
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.image=loadImage("stone.png");
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
      push();
      translate(paperpos.x,paperpos.y);
      ellipseMode(RADIUS);
      fill(255,0,255)
      imageMode(CENTER);
      image(this.image,0,0,this.r*2,this.r*2);
      pop();
    }
  };

  