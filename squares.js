class Squares extends BaseClass{
    constructor(x,y,width,height) {
     super(x,y,width,height)
     this.image=loadImage("boxy.png")
     this.visible=255
    }

    display(){
      push()
     if(this.body.speed<4){
       var angle=this.body.angle
       var pos=this.body.position
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER)
      rect(0,0,this.width,this.height);
      pop()
      }else{
      World.remove(world,this.body)
    push()
      this.visible-=10
      tint(255,this.visible)
      image(this.image, this.body.position.x,this.body.position.y,this.width+30,this.height+30);
      pop()
        
      }
    }
  }