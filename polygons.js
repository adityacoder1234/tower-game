class polygons{
    constructor(x,y,radius)
    {
        var op=
        {
         'restitution':0.8,
          'friction':1.0,
          'density':1.0
        }
        this.body=Bodies.circle(x,y,radius,op)
        this.radius = radius;
        World.add(world,this.body)
    }
    display()
    {

        //this.body.position.x=mouseX;
        //this.body.position.y=mouseY;

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       
       
        pop();
        
        fill(176,219,83);
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius)
    }
}