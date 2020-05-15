class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
    };

    display(){
      // Draw the tanker the way you like.
      
      rectMode(CENTER);
      fill("white");
      circle(this.body.position.x,this.body.position.y-33,this.width-10)

      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      rect(this.body.position.x,this.body.position.y-20,this.width,this.height);
      
      // You could also use an image if you want a specific look


    };
}