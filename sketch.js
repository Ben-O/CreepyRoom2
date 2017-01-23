var Room;
var Creepy;
var Scare;
var Glass;
var Sound;

function preload () {
  Room = loadImage ("assets/Background.jpg");
  Scare = loadImage ("assets/jumpscare.jpg");
  Creepy = loadSound ("assets/Knock.mp3");
  Glass = loadSound ("assets/Glass.mp3");
  Sound = loadSound ("assets/Scare.mp3");
}

function setup() {
  createCanvas (1000, 600);
  image (Room, 0,0);
}
function draw(){
  
 
}
function mouseClicked() {
  if(dist(mouseX, mouseY, 300, 200)<=150){
    Creepy.play();
    Creepy.setVolume(1)
  Creepy.play
  }
  {
  if(dist(mouseX, mouseY, 610, 249)<=20){
    Glass.play(); 
    Glass.setVolume(1);
 Glass.play;
  }
  

  }
}

function keyPressed() {
  if (keyCode == 32){
    image (Scare,0,0, Scare.width/2.7, Scare.height/2);
    Sound.play
    Sound.setVolume(1)
    Sound.play
  }
}
