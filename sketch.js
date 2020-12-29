var bullet,speed,weight
var wall,thickness
function setup() 
{
  createCanvas(1600,400);
  
  thickness=random(22,83)

  speed=random(223,321)
  weigth=random(30,52)

  bullet=createSprite(50,200,50,50);

  bullet.velocityX=speed;
  bullet.shapeColor(white);

  wall-createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weigth * speed * speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
  }
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=lbullet.x+bullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
}
function draw() {
  background(0);
  
  if(wall.x-bullet.x <(car.width * wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation*180)

    {
      car.shapeColor=colur(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullet.shapecolor=color(0,255,0);
    }
  }
  
  drawSprites();
}