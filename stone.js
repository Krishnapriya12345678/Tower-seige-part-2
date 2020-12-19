class Stone {
    constructor(x, y,radius) {
    var options = {
        'restitution':0.2,
        'friction':1.2,
        'density':3,
       
       isStatic:false
    }
    this.radius=radius
    this.body = Bodies.circle(x, y, this.radius/2, options);
    
   
    World.add(world, this.body);
  }
  display(){
   // console.log(this.radius)
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("black")
    circle(0,0,this.radius*2)
    pop();
  }
}











