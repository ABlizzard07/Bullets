var bullet;
var wall;
var speed, weight, thickness;
var line;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,50,50,20);
  bullet.shapeColor = "white";
  bullet2 = createSprite(50,200,50,20);
  bullet2.shapeColor = "white";
  bullet3 = createSprite(50,350,50,20);
  bullet3.shapeColor = "white";

  thickness = random(22,62);

  wall = createSprite(1200,50,thickness,100);
  wall.shapeColor = "gray";
  wall2 = createSprite(1200,200,thickness,100);
  wall2.shapeColor = "gray";
  wall3 = createSprite(1200,350,thickness,100);
  wall3.shapeColor = "gray";
  
  speed = random(223,321);
  weight = random(30,52);
  
  bullet.velocityX = speed/7;
  bullet2.velocityX = speed/7;
  bullet3.velocityX = speed/7;

  line = createSprite(800,125,1600,10);
  line.shapeColor = "white";
  line2 = createSprite(800,275,1600,10);
  line2.shapeColor = "white";
}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    bullet2.velocityX = 0;
    bullet3.velocityX = 0;

    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)
    
    if(damage > 20)
    {
      wall.shapeColor = color(255,0,0);
      wall2.shapeColor = color(255,0,0);
      wall3.shapeColor = color(255,0,0);

    }
    if(damage <= 20)
    {
      wall.shapeColor = color(0,255,0);
      wall2.shapeColor = color(0,255,0);
      wall3.shapeColor = color(0,255,0);

    }
  }
  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    return true;
  }
    return false;
}