class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
    var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:1,
            length:100
    
        }
    
       this.chain=Constraint.create(options)
        World.add(world,this.chain);
    }
    display(){
        var posA=this.chain.bodyA.position;
        var posB=this.chain.bodyB.position;
        strokeWeight(4);
    line(posA.x,posA.y,posB.x,posB.y)
    }
}
