const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;
var engine,world,ground,ball;

function setup() {
  var canvas=createCanvas(400,400);
   engine= Engine.create();
  world=engine.world;
  
  var ground_option={
    isStatic:true
  }
var ball_options={
  restitution:1.0
}
  ground=Bodies.rectangle(200,390,50,50,ground_option);
  World.add(world,ground);
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
 
}

function draw() {
  background(220,30,40); 
  Engine.update(engine); 
  rectMode(CENTER);
  fill ("green");
  rect (ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER);
  fill ("yellow");
  ellipse(ball.position.x,ball.position.y,30,30);
}