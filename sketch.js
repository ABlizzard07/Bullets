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

  thickness = random(22,83);
  thickness2 = random(22,83);
  thickness3 = random(22,83);

  wall = createSprite(1200,50,thickness,100);
  wall.shapeColor = "gray";
  wall2 = createSprite(1200,200,thickness2,100);
  wall2.shapeColor = "gray";
  wall3 = createSprite(1200,350,thickness3,100);
  wall3.shapeColor = "gray";
  
  speed = random(223,321);
  speed2 = random(223,321);
  speed3 = random(223,321);
  weight = random(30,52);
  weight2 = random(30,52);
  weight3 = random(30,52);
  
  bullet.velocityX = speed/7;
  bullet2.velocityX = speed2/7;
  bullet3.velocityX = speed3/7;

  line = createSprite(800,125,1600,10);
  line.shapeColor = "white";
  line2 = createSprite(800,275,1600,10);
  line2.shapeColor = "white";
}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)
    
    if(damage > 20)
    {
      wall.shapeColor = color(255,0,0);
    }
    if(damage <= 20)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided(bullet2,wall2)){
    bullet2.velocityX = 0;
    var damage2 = (0.5 * weight2 * speed2 * speed2)/(thickness2 * thickness2 * thickness2)

    if(damage2 > 20)
    {
      wall2.shapeColor = color(255,0,0);
    }
    if(damage2 <= 20)
    {
      wall2.shapeColor = color(0,255,0);
    }
  }
    if(hasCollided(bullet3,wall3)){
      bullet3.velocityX = 0;
      var damage3 = (0.5 * weight3 * speed3 * speed3)/(thickness3 * thickness3 * thickness3)
    
    if(damage3 > 20)
    {
      wall3.shapeColor = color(255,0,0);
    }
    if(damage3 <= 20)
    {
      wall3.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  if(lwall.x - lbullet.x < (lbullet.width + lwall.width)/2){
    return true;
  }
    return false;
}