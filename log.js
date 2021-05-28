class LOG{
    constructor(x,y,h,a){
        var options={
            restitution:0.7
        } 
        this.log = Bodies.rectangle(x,y,20,h,options);
        this.w = 20;
        this.h = h;
        Matter.Body.setAngle(this.log,a);
        World.add(worlds,this.log);
    }
    display(){
        push();
        translate(this.log.position.x,this.log.position.y)
        rotate(this.log.angle);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.w, this.h);
        pop();
    }  
}