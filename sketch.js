var canvas;
var music;
var blueBox,yellowBox,pinkBox,greenBox;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(960,600);
    blueBox = createSprite(120,580,220,30)
    blueBox.shapeColor ="blue"

    yellowBox = createSprite(360,580,220,30)
    yellowBox.shapeColor ="yellow"
    
    pinkBox = createSprite(600,580,220,30)
    pinkBox.shapeColor ="pink"

    greenBox = createSprite(840,580,220,30)
    greenBox.shapeColor ="green"

    ball = createSprite(random(20,750),100,40,40)
    ball.shapeColor = "white"
    ball.velocityX = 4
    ball.velocityY = 9

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);
    if(greenBox.isTouching(ball)&&ball.bounceOff(greenBox)){
    ball.shapeColor = "green"
    }
    if(pinkBox.isTouching(ball)&&ball.bounceOff(pinkBox)){
        ball.shapeColor = "pink"
    }
    if(blueBox.isTouching(ball)&&ball.bounceOff(blueBox)){
        ball.shapeColor = "blue";
        music.play();
    }
    if(yellowBox.isTouching(ball)){
        ball.shapeColor = "yellow"
        ball.velocityX=0
        ball.velocityY=0
        music.stop();

    }
    drawSprites()
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
