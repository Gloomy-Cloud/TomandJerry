var bg, tom, jerry, tomImage1, tomImage2, tomImage3, jerryImage1, jerryImage2, jerryImage3


function preload() {
   bg=loadImage("image/garden.png")
   tomImage1=loadAnimation("images/tomOne.png")
   tomImage2=loadAnimation("images/tomTwo.png","images/tomThree.png")
   tomImage3=loadAnimation("image/tomFour.png")

   jerryImage1=loadAnimation("images/jerryOne.png")
   jerryImage2=loadAnimation("images/jerryTwo.png","images/jerryThree.png")
   jerryImage3=loadAnimation("image/jerryFour.png")
}
function setup(){
    createCanvas(1000,800);
    tom=createSprite(870,600)
    tom.addAnimation("sleeping",tomImage1);
    tom.scale=0.2
    jerry=createSprite(200,600)
    jerry.addAnimation("jStanding",jerryImage1);
    jerry.scale=0.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
tom.velocityX=0
tom.addAnimation("tom/image",tomImage3);
    tom.scale=0.2
    tom.x=300;

    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        jerry.addAnimation("jerry/image",jerryImage3);
            jerry.scale=0.15
            jerry.x=300;

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
