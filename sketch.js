  //creates the sprite objects
var PLAY = 1;
var END = 0;
var gameState=1;
var alien1,alien2;
var f1,f2,f3,f4;
var knife,a1,a2,stop;
var gameOver;
var sword;
var fruitGroup,boomg;
var score=0;
var boom;
var knifesound;
var d;
var over;
var remain,remaing;
var r1,r2,r3,r4;
var backgroundimage;
var A;
var i;


function preload()
{
    //loads the images in the program
    f1 = loadImage("fruit1.png");
    f2 = loadImage("fruit2.png");
    f3 = loadImage("fruit3.png");
    f4 = loadImage("fruit4.png");
    a1 =loadAnimation("alien1.png","alien2.png");
    knife = loadImage("sword.png");
    stop= loadImage("gameover.png")
    
    backgroundimage = loadImage("background.png");
    
    r1 = loadImage("red.png"); 
    r2 = loadImage("yellow.png"); 
    r3 = loadImage("green.png");  
    r4 = loadImage("white.png");   
   
    knifesound = loadSound("sound.mp3");
    over = loadSound("smb_gameover.wav");
    
}

function setup()
{
   //creates the canvas
   createCanvas (575,500);
 
   //creates all the objects on canvas
   background = createSprite(0,0,650,650);
   background.addImage(backgroundimage);
   background.scale = 5;
  
  
   sword = createSprite(200,200,10,10);
   sword.scale=0.5;
   sword.addImage(knife);
  
   fruitg=createGroup();
   boomg=createGroup();
   remaing=createGroup(); 
  
   sword.setCollider("rectangle",0,0,100,sword.height);
   //sword.debug = true;
  

}
function draw()
{
 

  if(gameState === PLAY)
  {
 
    //spawns the aliens
    danger();
    //spawns the fruits
    fruit2();
     
    sword.y=World.mouseY;
    sword.x=World.mouseX;   
     
    //destroys the fruits if sword is touched
    if(fruitg.isTouching(sword))
    {
      
      fruitg.destroyEach();
      score=score+1;    
      knifesound.play(); 
      splash();   
  
    }
   if(boomg.isTouching(sword))
   {
      
      gameState = END;
      over.play();
     
    }
   
 }else if (gameState === END)
  {
 
    fruitg.destroyEach();
    boomg.destroyEach();
    fruitg.velocityX=0;
    boomg.velocityX=0;
    sword.addImage(stop);
    sword.scale = 1;
    sword.x=275;
    sword.y=225;
  }

  drawSprites();
  fill('hsl(160, 100%, 50%)');
  textSize(20);
  text(" score "+score,475,50);

} 

//creates function to spawn fruits
function fruit2(){
  if(World.frameCount%50===0){ 
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    i = Math.round(random(1,4));
    
    if(i == 1){
      
       fruit.x=500;
      
    A=Math.round(random(1,4)); 
    if(A ==1 ) {
    fruit.addImage(f1);
    } else if (A == 2){
      fruit.addImage(f2)
    } else if (A == 3){
      fruit.addImage(f3)
    } else if (A == 4){
      fruit.addImage(f4)
    }
     fruit.y=Math.round(random(50,450));
     fruit.velocityX= -(4 + score/4)
     fruit.setlifetime=100;
     fruitg.add(fruit);
  }
    
    
    if(i == 2){
    A=Math.round(random(1,4)); 
      
      fruit.x=50;
      
    if(A ==1 ) {
      
      
      
    fruit.addImage(f1);
    } else if (A == 2){
      fruit.addImage(f2)
    } else if (A == 3){
      fruit.addImage(f3)
    } else if (A == 4){
      fruit.addImage(f4)
    }
     fruit.y=Math.round(random(50,450));
     fruit.velocityX= (4 + score/4)
     fruit.setlifetime=100;
     fruitg.add(fruit);
      
  }
   
  if(i == 3){
    
    
    A=Math.round(random(1,4)); 
    
    fruit.y = 500;
    
    if(A ==1 ) {
    fruit.addImage(f1);
    } else if (A == 2){
      fruit.addImage(f2)
    } else if (A == 3){
      fruit.addImage(f3)
    } else if (A == 4){
      fruit.addImage(f4)
    }
    
     fruit.x=Math.round(random(50,450));
     fruit.velocityY= -(4 + score/4)
     fruit.setlifetime=100;
     fruitg.add(fruit);
  }  
  
   if(i == 4){
    A=Math.round(random(1,4)); 
    
    fruit.y = 0;
    
    if(A ==4 ) {
    fruit.addImage(f1);
    } else if (A == 2){
      fruit.addImage(f2)
    } else if (A == 3){
      fruit.addImage(f3)
    } else if (A == 4){
      fruit.addImage(f4)
    }
    
     fruit.x=Math.round(random(50,450));
     fruit.velocityY= (4 + score/4)
     fruit.setlifetime=100;
     fruitg.add(fruit);
  }   
    
    
    fruitg.depthEach = sword.depth
    sword.depth = sword.depth + 15;
    
}
}

//creates function to spawn aliens
function danger()
{

   if(World.frameCount%200===0)
   { 
     
     
   boom=createSprite(400,200,20,20);
   
     
   c = Math.round(random(1,2));  
   if (c == 1){  
   boom.y=Math.round(random(100,300)); 
   boom.addAnimation("monster",a1);
   boom.velocityX= -(4 + score/8);
   boom.setlifetime=100;
   boomg.add(boom); 
   } 
    
  if (c == 2){    
  
   boom.y=Math.round(random(100,300)); 
   boom.addAnimation("monster",a1);
   boom.velocityX= (4 + score/8);
   boom.setlifetime=100;
   boomg.add(boom);
   
    boom.x = 0;
    
  }
  }
  }

function splash()
{
  
  remain = createSprite(500,300,10,10);
  
  
 d=Math.round(random(1,4)); 
    if(d ==1 ) 
    {
       remain.addImage("splash1",r1);
     }else if (d == 2){
       remain.addImage("splash2",r2);
     }else if (d == 3){
       remain.addImage("splash3",r3);
     }else if (d == 4){
       remain.addImage("splash4",r4);
    }  
    
    remaing.add(remain);
  
  remain.x = sword.x;
  remain.y = sword.y;
  
}