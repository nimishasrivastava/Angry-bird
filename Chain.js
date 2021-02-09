class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
      
        if (this.chain.bodyA!==null) {
            var pointA = this.chain.bodyA.position;
            // var pointB = this.chain.bodyB.position;
             strokeWeight(4);
             line(pointA.x, pointA.y, this.chain.pointB.x, this.chain.pointB.y);        
        }
    }

    fly () {
     this.chain.bodyA = null;   
    }
    
}