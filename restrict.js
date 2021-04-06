class Restrict
{
  constructor(A,pb)
  {
     var options={
         bodyA:A,
         pointB:pb,
         stiffness:0.5,
         length:20
     }
     this.pointB=pb
     this.Restrict=restrict.create(options)
     World.add(world,this.Restrict)

  }
  fly()
  {
      this.Restrict.bodyA=null

  }
  display()
  {
     if(this.Restrict.bodyA){ 
     line(this.Restrict.bodyA.position.x,this.Restrict.bodyA.position.y,
        this.pointB.x,this.pointB.y)
     }
  }
}