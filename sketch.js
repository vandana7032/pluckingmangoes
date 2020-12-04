
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree;
var ground;
var stone;
var boy,boyImg;
var mango1;

function preload()
{
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1=new Mango(1400,200,20);
	mango2=new Mango(1290,200,20);
	mango3=new Mango(1300,250,20);
	mango4=new Mango(1450,300,20);
	mango5=new Mango(1150,350,20);
	mango6=new Mango(1420,370,20);
	mango7=new Mango(1390,370,20);
	mango8=new Mango(1250,290,20);
	mango9=new Mango(1200,250,20);
	mango10=new Mango(1300,350,20);

	tree=new Tree(1300,680);
	ground=new Ground(750,690,1800,20);
	stone=new Stone(250,450,20,20);
	boy=createSprite(360,600,20,20);
	boy.addImage(boyImg);
	boy.scale=0.2;
	
	chain = new Chain(stone.body,{x:250, y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  fill('black');
  textSize(30);
  text("Press space to retry", 800,350);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  ground.display();
  stone.display();
  boy.display();
  chain.display();


  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);


  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:250, y:450});
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}



