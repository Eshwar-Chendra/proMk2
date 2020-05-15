var words=[];
var definitions=[];
var rand;
var box1;
var random1;
var box2;
var box3;
var box4;
var box5;
var button;
var randomNumber,number;
var gameState="start";
var num1=0;
var num2=1;
var num3=2;
var num4=3;
var num5=4;
var correctImage,wrongImage;
var score=0;

function preload(){
  bookImage=loadImage("Sprites/book.png");
  correctImage=loadImage("sprites/c.png");
  wrongImage=loadImage("sprites/w.png");

}
function setup() {
  createCanvas(1500,1500);
  words=["outline","termination","missing","procrastinating","surprise","annoying","started"];
  definitions=["A line or set of lines enclosing or indicating the shape of an object in a sketch.",
               "The action of terminating something or the fact of being terminated.",
               "Not present or included when expected or supposed to be.",
               "Delay or postpone action;put off doing something.",
               "An unexpected or astonishing event,fact.",
               "causing irritation or annoyance.",
               "begin or be reckoned from a particular point in time or space; come into being."]
  box1=createSprite(870,700,40,40);
  box2=createSprite(970,700,40,40);
  box3=createSprite(1070,700,40,40);
  box4=createSprite(1170,700,40,40);
  box5=createSprite(1270,700,40,40);                                                          
  correct=createSprite(750,550,20,20);
  correct.addImage(correctImage);
  wrong=createSprite(750,550,20,20);
  wrong.addImage(wrongImage)
  correct.scale=0.3;
  wrong.scale=0.1;
  correct.visible=false;
  wrong.visible=false;
}

function draw() {
  background(bookImage); 
  noStroke();
  textFont("Comic Sans MS");
  fill(0);
  textSize(20);
  text("score: "+score,200,160);
  if(gameState==="start"){
    correct.visible=false;
    wrong.visible=false;
    box1.shapeColor="#7F7F7F";
    box2.shapeColor="#7F7F7F";
    box3.shapeColor="#7F7F7F";
    box4.shapeColor="#7F7F7F";
    box5.shapeColor="#7F7F7F";
    rand=Math.round(random(0,6));
    
    randomNumber=[];
    while(randomNumber.length<5){
      number=Math.round(random(0,6));
      var generatedNumber=randomNumber.indexOf(number);
      if(generatedNumber===-1){
        randomNumber.push(number);
      }
    }
    num0=randomNumber[0];
    num1=randomNumber[1];
    num2=randomNumber[2];
    num3=randomNumber[3];
    num4=randomNumber[4];
   
    if(num0!==rand&&num1!==rand&&num2!==rand&num3!==rand&&num4!==rand){
      random1=Math.round(random(0,4));
      switch(random1){
        case 0: num0=rand;
        break;
        case 1:num1=rand;
        break;
        case 2: num2=rand;
        break;
        case 3: num3=rand;
        break;
        case 4: num4=rand;
        break;
      }
    }
   
    gameState="play";
  }
  
  textSize(30);
  textFont("Comic Sans MS");
  fill(0);
  text(words[rand],370,350); 
  textSize(15);
  text("A.",770,175);
  text("B.",770,275);
  text("C.",770,375);
  text("D.",770,475);
  text("E.",770,575);
  fill("red");
  text(definitions[num0],770,200);
  fill("green");
  text(definitions[num1],770,300);
  fill("blue");
  text(definitions[num2],770,400);
  fill(0);
  text(definitions[num3],770,500);
  fill("orange");
  text(definitions[num4],770,600);
  if(gameState==="play"){
  if (mousePressedOver(box1)){
    if(num0===rand){
      text("correct",970,900);
      box1.shapeColor="green";
      gameState="over";
      correct.visible=true;
      score=score+1;
    }
    else{
      text("wrong",970,900);
      box1.shapeColor="red";
      gameState="over";
      wrong.visible=true;
    }
  } 
  if (mousePressedOver(box2)){
    if(num1===rand){
      text("correct",970,900);
      box2.shapeColor="green";
      gameState="over";
      correct.visible=true;
      score=score+1;
    }
    else{
      text("wrong",970,900);
      box2.shapeColor="red";
      gameState="over";
      wrong.visible=true;
    }
  }
  if (mousePressedOver(box3)){
    if(num2===rand){
      text("correct",970,900);
      box3.shapeColor="green";
      gameState="over";
      correct.visible=true;
      score=score+1;
    }
    else{
      text("wrong",970,900);
      box3.shapeColor="red";
      gameState="over";
      wrong.visible=true;
    }
  }
  if (mousePressedOver(box4)){
    if(num3===rand){
      text("correct",970,900);
      box4.shapeColor="green";
      gameState="over";
      correct.visible=true;
      score=score+1;
    }
    else{
      text("wrong",970,900);
      box4.shapeColor="red";
      gameState="over";
      wrong.visible=true;
    }
  }
  if (mousePressedOver(box5)){
    if(num4===rand){
      text("correct",970,900);
      box5.shapeColor="green";
      gameState="over";
      correct.visible=true;
      score=score+1;
    }
    else{
      text("wrong",970,900);
      box5.shapeColor="red";
      gameState="over";
      wrong.visible=true;
    }
  }
}
  if (gameState==="over"){
    button=createButton('next');
    button.position(1300,160);
    button.mousePressed(function(){
      gameState="start";
    })
  }

  drawSprites();
}