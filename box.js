class Box {
  constructor(x, y, width, height, color){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':0.5
    }

    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width;
    this.height = height;
    this.Color = color;
    World.add(world, this.body);
    // added it for tower seige 2
    this.image = loadImage("wood1.png");
    this.Visibility = 255;
  }

  display(){
    if(this.body.speed < 3){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      //rectMode(CENTER);
      //rect(0,0,this.width,this.height);
      imageMode(CENTER);
      image(this.image,0,0,40,40);
      pop();
     }
    
    else{
      World.remove(world, this.body); // will remove the body
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility); // reduces the visibility of the image (max vis, value i want ot give)
      // fading effect can only be done on an image
      image(this.image, this.body.position.x, this.body.position.y, 40,40);
      pop();
    } 
    
    // to set hte color for the boxes in tower seige 1
    if (this.Color) {
      fill(this.Color);
    }

    else {
      fill("brown");
    }

    }
  }
