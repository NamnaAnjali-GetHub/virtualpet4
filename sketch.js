var dog, dogImage,dogImage1;
var database;
var foods,foodstock;

function preload(){
  dogImage = loadImage("images/dogImg.png");
  dogImage = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(800, 700);
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImage);
  dog.scale = 0.15;
  //scaling is increase or decrease the size
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  function draw() {
    background(46,139,87);
   
    if(keyWentDown(UP_ARROW)){
      writeStock(foods);
      dog.addImage(dogImg1);
    }
  
    drawSprites();
    fill(255,255,254);
    stroke("black");
    text("Food remaining : "+foods,170,200);
    textSize(13);
    text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  }
  
  //Function to read values from DB
  function readStock(data){
    foods=data.val();
  }
  
  //Function to write values in DB
  function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }}}  