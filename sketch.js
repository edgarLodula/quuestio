var p;
function preload(){

}

function setup() {
 createCanvas(400,600)
    p = crateSprites(200,300,50,50)
}

function draw() {
 backGround("black");
    mov();
    drawSprites();

}
function mov(){
if(keyDown("left")){
    P.velocityX = -2
}
if(keyDown("right")){
    P.velocityX = 2
}
}