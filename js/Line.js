class Line{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.Line= Constraint.create(options);
        World.add(world, this.Line);
    }

      display(){
          if(this.Line.bodyA){
            var pointA = this.Line.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
          }
        
    }
    fly() {this.Line.bodyA=null};
        
}
