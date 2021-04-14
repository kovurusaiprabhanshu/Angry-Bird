class SlingShot{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.01,
            length:10,
        }
        this.pointB=pointB
        this.SlingShot=Constraint.create(option)
        World.add(world,this.SlingShot)
    }
    fly(){
        this.SlingShot.bodyA=null
    }
    display(){
        if(this.SlingShot.bodyA){

        
        var pointA=this.SlingShot.bodyA.position
        var pointB=this.pointB
        strokeWeight(9)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}