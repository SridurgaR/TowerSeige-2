const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world;
var polygon, poImg;

function preload(){
  poImg = loadImage("hex.png");
}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(350,340,300,15); // lower ground
  ground2 = new Ground(580,150,150,15); // higher ground

  // bottom level of the lower ground
  box1 = new Box(255,320,30,40);
  box2 = new Box(290,320,30,40);
  box3 = new Box(325,320,30,40);
  box4 = new Box(360,320,30,40);
  box5 = new Box(395,320,30,40);
  box6 = new Box(430,320,30,40);
  
  // the thrid layer of the lower ground
  box7 = new Box(290,285,30,40,'green');
  box8 = new Box(325,285,30,40,'green');
  box9 = new Box(360,285,30,40,'green');
  box10 = new Box(395,285,30,40,'green');

  // the second layer of the lower ground
  box11 = new Box(325,250,30,40,'yellow');
  box12 = new Box(360,250,30,40,'yellow');

  //the first row of lower ground
  box13 = new Box(343,200,30,40,'brown');

  //the bottom layer of the upper ground
  box14 = new Box(545,130,30,40);
  box15 = new Box(580,130,30,40);
  box16 = new Box(615,130,30,40);

  // the first layer of upper ground
  box17 = new Box(545,140,30,40,);
  box18 = new Box(615,140,30,40);
  box19 = new Box(580,140,30,40);
  
  polygon = Bodies.circle(30,200,15);
  World.add(world,polygon);

  slingShot = new SlingShot(polygon,{x:100, y:200});

  Engine.run(engine);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  //ellipseMode(RADIUS);
  //ellipse(polygon.position.x,polygon.position.y,15,15);
  imageMode(CENTER);
  image(poImg,polygon.position.x, polygon.position.y,40,40);
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
}

function mouseDragged(){
  Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}