var wall,car;
var speed,height,deformation;
//var rand;
function setup() {
  createCanvas(1400,400);
  //making speed random
  speed=random(55,90);
  //making weight random
  weight=random(400,1500);
  //making wall sprite
  wall=createSprite(1200,200,60,height/2);
  //making wall gray
  wall.shapeColor="lightblue";
  //rand=Math.round(random(200,250));
  //creating car sprite
  car=createSprite(50, 200, 45, 45);
     //car.debug=true;
     //wall.debug=true
  //giving car velocity as speed
  car.velocityX = speed;
  car.shapeColor="gray";  
}

function draw() {
  background("pink");  
  if(wall.x-car.x<(wall.width+car.width)/2){
    car.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500;
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
    else if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }
    else if(deformation>180){
      car.shapeColor="red";
    }
  }
  

  drawSprites();
}