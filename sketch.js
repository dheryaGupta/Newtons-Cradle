
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
var world,engine;

var ball1, ball2, ball3, ball4, ball5;
var ground2;
var ground1, sling1, sling2,sling3,sling4,sling5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(200,200,20);
	ball2 = new Ball(250,200,20);
	ball3 = new Ball(300,200,20)
	ball4 = new Ball(350,200,20);
	ball5 = new Ball(400,200,20);
	
	sling1 = new Slingshot(ball1.body,{x:200,y:50});
	sling2 = new Slingshot(ball2.body,{x:250,y:50});
	sling3 = new Slingshot(ball3.body,{x:300,y:50});
	sling4 = new Slingshot(ball4.body,{x:350,y:50});
	sling5 = new Slingshot(ball5.body,{x:400,y:50});

	//ground1 = new Ground(350,500,700,20);
	ground2 = new Ground(350,50,500,20);
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  //ground1.display();
  ground2.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

}

function mouseDragged(){
	Matter.Body.setPosition(ball5.body,{x:mouseX,y:mouseY});
}

//function mouseReal



