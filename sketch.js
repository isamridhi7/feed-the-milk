//Create variables here
var bg , bgimg ;
var dogimg , dog , dogimg1;
var food , foodStock;
var database ;

function preload()
{
  bgimg = loadImage("lbg.jpg");
  dogimg = loadImage("dog.png");
  dogimg1 = loadImage("dog2.png");
  //bgimg = loadImage("images/bg.png");

}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,370);
dog.scale = 0.4
database = firebase.database();
foodStock = database.ref('Food')
//var database = database.ref("food")
foodStock.on("value",readStock);
}


function draw() {  
//background(bg);
background(bgimg);
dog.addImage(dogimg);

if(keyWentDown(UP_ARROW)){
  writeStock(food)
  dog.addImage(dogimg1);
}
  drawSprites();
  fill("white");
  stroke("blue")
  textSize(20);
  text("PRESS UP ARROW TO FEED DRAGO MILK",60,100);
  text("FOOD REMAINING : " + food , 100,200);

}

function readStock(data){
food = data.val();

}


function writeStock(x){

if(x<=0){
  x=0;
}else{
x = x-1 ;
}
database.ref('/').update({
  food : x
})

}
//function readposition (data){
  //foodStock = data.val();
  //food.x = value.x;
  //food.y = value.y;

//}












