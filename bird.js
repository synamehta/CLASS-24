class BIRD{
    constructor(x,y){
        var options={
            restitution:0.7
        } 
        this.bird = Bodies.rectangle(x,y,70,70,options);
        this.w = 70;
        this.h = 70;
        World.add(worlds,this.bird);
    }
    display(){
        push();
        this.bird.position.x=mouseX;
        this.bird.position.y=mouseY;
        translate(this.bird.position.x,this.bird.position.y)
        rotate(this.bird.angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.w, this.h);
        pop();
    }  
}