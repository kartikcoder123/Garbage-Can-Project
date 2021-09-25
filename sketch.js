const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var wall1, wall2;
function preload() {

}

function setup() {
	createCanvas(1200, 600);
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100, 200, 20, ball_options)
	World.add(world, ball)

	ground = new Ground(600,590, 1200, 20)
	wall1 = new Ground(1000,540,10,70)
    wall2 = new Ground(800,540,10,70)
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	ellipseMode(CENTER)
	ellipse(ball.position.x, ball.position.y, 20, 20)
	ground.display();
	wall1.display();
	wall2.display();
	drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:65,y:-85})
	}
	 
}