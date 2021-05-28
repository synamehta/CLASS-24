class PIG{
   constructor(x,y){
    this.pig=Bodies.rectangle(x,y,60,60);
    World.add(worlds,this.pig); 
    this.w=60;
    this.h=60;
   }
 display(){
   push()  
   fill("green");
   rectMode(CENTER);
   rect(this.pig.position.x,this.pig.position.y,this.w,this.h);
   pop()

 }
}