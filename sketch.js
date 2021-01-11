
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles =[];
var plinko =[];
var divisions =[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(500,650,1000,40);

  for (var i = 10; i <800; i = i + 80){
    divisions.push(new Divisions(i, 650, 10, 300));
  }
  for (var i = 15; i <800; i = i + 50){
    plinko.push(new Plinko(i,50));
  }
  for (var i = 40; i <800; i = i + 50){
    plinko.push(new Plinko(i,130));
  }
  for (var i = 15; i <800; i = i + 50){
    plinko.push(new Plinko(i,210));
  }
  for (var i = 40; i <800; i = i + 50){
    plinko.push(new Plinko(i,290));
  }
  for (var i = 15; i <800; i = i + 50){
    plinko.push(new Plinko(i,370));
  }
  
  
  
}


function draw() {
  background("skyblue"); 
  Engine.update(engine); 
  ground.display();
  for (var i = 0; i<divisions.length;i++){
    divisions[i].display();
  }
  for (var i = 0; i<plinko.length;i++){
    plinko[i].display();
  }
  if(frameCount%7===0){
  particles.push(new Particles(random(width/2-10, width/2+10),10,10));
  }
  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }

  drawSprites();
}