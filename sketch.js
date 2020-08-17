var player,player1;
var  foodgroup,bananaimage;
var obstaclegroup, obstacleimage;
var ground,ground1;
var score;

function preload(){
  player1=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  ground1=loadImage("jungle.png");
  bananaimage=loadImage("banana.png");
  obstacle=loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  player=createSprite(65,342,10,10);
  player.addAnimation("player1",player1)
  
  ground=createSprite(65,342,400,20);
  ground.setVelocityX=-4;
  ground.visible(false);
  
}

function draw() {
  background(220);
   drawSprites();
  
  stroke ("white");
  textSize(20)
  fill("white")
  text("score: "+ score,500,50);
  ground.x=ground.width/2;
  if (foodgroup.isTouching(player)){
    foodgroup.destroyEach
   score=score+2; 
  }
  switch(score){
    case 10: player.scale=0.12;
      break;
      case 20: player.scale=0.14;
      break;
      case 30: player.scale=0.16;
      break;
      case 40: player.scale=0.18;
      break;
      default:break;
}
  
  if(obstaclegroup.isTouching(player)){
    player.scale=0.2
  } 
  }

function spawnFood(){
  if(frameCount%60===0){
    
    
  }
}