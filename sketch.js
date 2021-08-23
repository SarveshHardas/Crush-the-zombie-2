const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones=[];

function preload()
{
  bgImg  = loadImage("assets/background.png")
  stoneImg = loadImage("assets/stone.png")
  woodImg = loadImage("assets/wood.png")
  zombieImg = loadImage("assets/zombie.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(width/2,height-20,windowWidth,20)
  flyover = new Bridge(20,{x:0,y:300});
  leftBase = new Base(80,300,150,100);
  rightBase = new Base(1270,300,150,100);
  jointPoint = new Base(1270,300,150,100);
  Matter.Composite.add(flyover.body,jointPoint);
  fly_con = new Link(flyover,jointPoint);
  stone1 = new Stone(400,20,80,80);
  stone2 = new Stone(450,50,80,80);
  stone3 = new Stone(500,10,80,80);
  stone4 = new Stone(530,0 ,80,80);
  stone5 = new Stone(560,6 ,80,80);
  stone6 = new Stone(590,30,80,80);
  stone7 = new Stone(600,35,80,80);
  stone8 = new Stone(650,12,80,80);
  
  zombie = createSprite(width/2,height-100);
  zombie.addImage(zombieImg);
  zombie.scale = 0.1;
  zombie.velocityX = 10;

  button =createImg("assets/axe.png") 
  button.position(width-200,height/2-50)
  button.size(50,50);
  button.mousePressed(handleButtonPress);

}

function draw() 
{
  background(bgImg);
  Engine.update(engine);
  flyover.show();
  stone1.display();  
  stone2.display();
  stone3.display();
  stone4.display();
  stone5.display();
  stone6.display();
  stone7.display();
  stone8.display();

  var edges=createEdgeSprites();
  zombie.bounceOff(edges);

  drawSprites();
}
function handleButtonPress()
{
  fly_con.detach();
  setTimeout(()=>{ 
    flyover.break();
  },1500)
}