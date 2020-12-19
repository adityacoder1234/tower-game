class Box
{
    constructor(x,y)
    {
        var op={
      isStatic:false,
    friction:1.0,
    restitution :0.5,
    density:1.0,
        }

        this.x=x;
        this.y=y;

        this.body=Bodies.rectangle(x,y,30,40,op)                                    
        World.add(world,this.body)
    }
    display()
    {
       
        rect(this.x,this.y,30,40);
     
    }
}



































