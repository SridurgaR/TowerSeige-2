class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04, //elstaicy of an object ex: rubber band tight first after lose
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){ // to biring back the brid to the slingshot after it shot off
        this.sling.bodyA = body; 
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            push();
            var pointB = this.pointB;
            //strokeWeight(7);
            //stroke(48,23,7); // color for lines
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            pop();
        }
    }
    
}