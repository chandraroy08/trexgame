var backgroundimg
var player,enemy
var button

function preload() {
  backgroundimg = loadImage("Background.jpg")
  playerimg = loadAnimation("player1.png","player2.png")
  enemyimg = loadImage("Enemy.png")
  buttonimg = loadImage("startbutton.png")
}

function setup() {
  createCanvas(3800,1000);

  player = createSprite(2700,450)
  player.addAnimation("player",playerimg)
  player.visible = false
 
  button = createSprite(400,150)
  button.addImage(buttonimg)
  // player.scale = 0.5
}

function draw() {
  background(rgb(211,211,211));  
  drawSprites();


  if (mousePressedOver(button)) {
    button.visible = false
    centerRoomGround = createSprite(3420,500,1300,1200)
    centerRoomGround.shapeColor = rgb(76,76,76)
    roomThreeGround = createSprite(1890,860,300,500)
    hallwayGround = createSprite(1390,450,2800,280)
    hallwayGround.shapeColor = rgb(76,76,76)
    roomThreeGround.shapeColor = rgb(76,76,76)
    roomOneGround = createSprite(400,170,600,250)
    roomOneGround.shapeColor = rgb(76,76,76)
    roomTwoGround = createSprite(1020,770,900,330)
    roomTwoGround.shapeColor = rgb(76,76,76)
    player = createSprite(100,450)
    player.addAnimation("player",playerimg)
    player.scale = 0.5
    player.visible = true
  
    enemy = createSprite(1000,450)
    enemy.addImage(enemyimg)
    enemy.scale = 0.5
    roomOneNameplate = createSprite(450,303,50,20)
    roomTwoNameplate = createSprite(690,597,80,20)
    roomThreeNameplate = createSprite(1740,597,50,20)
    hallway1 = createSprite(10,300,1000,20)
    hallway1.shapeColor = rgb(105,105,105)
    hallway2 = createSprite(310,600,1000,20)
    hallway2.shapeColor = rgb(105,105,105)
    hallway3 = createSprite(1100,300,800,20)
    hallway3.shapeColor = rgb(105,105,105)
    hallway4 = createSprite(1400,600,800,20)
    hallway4.shapeColor = rgb(105,105,105)
    hallway5 = createSprite(2090,300,800,20)
    hallway5.shapeColor = rgb(105,105,105)
    hallway6 = createSprite(2390,600,800,20)
    hallway6.shapeColor = rgb(105,105,105)
    hallway7 = createSprite(2390,300,800,20)
    hallway7.shapeColor = rgb(105,105,105)
    roomOne1 = createSprite(100,165,20,250)
    roomOne1.shapeColor = rgb(105,105,105)
    roomOne2 = createSprite(400,50,600,20)
    roomOne2.shapeColor = rgb(105,105,105)
    roomOne3 = createSprite(710,165,20,250)
    roomOne3.shapeColor = rgb(105,105,105)
    roomOneBed1 = createSprite(220,115,160,90)
    roomOneBed2 = createSprite(255,115,100,90)
    roomOneBed2.shapeColor = rgb(107,142,35)
    roomOneBed3 = createSprite(171,113,40,60)
    roomOneBed3.shapeColor = rgb(255,255,255)
    roomOneBed4 = createSprite(220,230,160,90)
    roomOneBed5 = createSprite(255,230,100,90)
    roomOneBed5.shapeColor = rgb(107,142,35)
    roomOneBed6 = createSprite(171,228,40,60)
    roomOneBed6.shapeColor = rgb(255,255,255)
    roomOneBox1 = createSprite(510,120,80,80)
    roomOneBox2 = createSprite(640,120,80,80)
    roomOneDoor = createSprite(605,300,190,20)
    roomOneDoorKnob = createSprite(660,305,20,20)
    roomTwo1 = createSprite(580,775,20,330)
    roomTwo1.shapeColor = rgb(105,105,105)
    roomTwo2 = createSprite(1020,930,900,20)
    roomTwo2.shapeColor = rgb(105,105,105)
    roomTwo3 = createSprite(1460,775,20,330)
    roomTwo3.shapeColor = rgb(105,105,105)
    roomTwoShelf = createSprite(1200,750,500,40)
    roomTwoDoor = createSprite(905,600,190,20)
    roomTwoDoorKnob1 = createSprite(800,600,20,30)
    roomTwoDoorKnob2 = createSprite(1010,600,20,30)
    roomThree1 = createSprite(1740,810,20,400)
    roomThree1.shapeColor = rgb(105,105,105)
    roomThree2 = createSprite(2050,810,20,400)
    roomThree2.shapeColor = rgb(105,105,105)
    roomThreeDoor = createSprite(1895,600,190,20)
    roomThreeDoorKnob = createSprite(1845,595,20,20)
    centerRoom1 = createSprite(2780,145,20,290)
    centerRoom1.shapeColor = rgb(105,105,105)
    centerRoom2 = createSprite(3290,10,1020,20)
    centerRoom2.shapeColor = rgb(105,105,105)
    centerRoom3 = createSprite(2780,810,20,400)
    centerRoom3.shapeColor = rgb(105,105,105)
    centerRoom4 = createSprite(3290,990,1020,20)
    centerRoom4.shapeColor = rgb(105,105,105)
    outsideProp1 = createSprite(100,810,150,350)
    outsideProp1.shapeColor = rgb(123,104,238)
    outsideProp2 = createSprite(330,810,150,350)
    outsideProp2.shapeColor = rgb(205,92,92)
    outsideProp3 = createSprite(900,100,120,120)
    outsideProp4 = createSprite(1100,100,120,120)
    outsideProp5 = createSprite(1350,50,150,350)
    outsideProp5.shapeColor = rgb(123,104,238)
    outsideProp6 = createSprite(1600,50,150,350)
    outsideProp6.shapeColor = rgb(0,0,0)
    outsideProp7 = createSprite(1850,50,150,350)
    outsideProp7.shapeColor = rgb(205,92,92)
    outsideWall4 = createSprite(2315,20,450,200)
    outsideWall4.shapeColor = rgb(76,76,76)
    outsideWall1 = createSprite(2100,20,20,200)
    outsideWall1.shapeColor = rgb(105,105,105)
    outsideWall2 = createSprite(2315,130,450,20)
    outsideWall2.shapeColor = rgb(105,105,105)
    outsideWall3 = createSprite(2530,20,20,200)
    outsideWall3.shapeColor = rgb(105,105,105)

    


  }
  if (keyWentDown("UP_ARROW")){
    enemy.velocityY= -5

  }
 if(keyWentUp("UP_ARROW")){
   enemy.velocityY=0
 }



}