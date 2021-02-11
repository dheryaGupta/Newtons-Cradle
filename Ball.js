class Ball{
    constructor(x,y){
        var options ={
            restitution : 1,
            frictionAir : 0.005,
            density : 0.8
        }
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);

        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}