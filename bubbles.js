var bubbles = [];
function Bubble () {
      this.x = random(0, width);
      this.y = random(0, height);
      this.display = function() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 24, 24);
      };
      this.move = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
      }
}

Bubble.prototype.color = function(r,b,g){
  this.display = function() {
    stroke(r,b,g);
    fill(r,b,g);
    ellipse(this.x, this.y, 24, 24);
  };
}

Bubble.prototype.jitter = function(xneg,xpos,yneg,ypos){
  this.move = function() {
    this.x = this.x + random(xneg, xpos);
    this.y = this.y + random(yneg, ypos);
  };
  return this.move();
}

Bubble.prototype.avoid = function(mouseX, mouseY, cubeSize, runAwaySpeed){
  if(this.x < mouseX + cubeSize && this.x > mouseX - cubeSize && this.y < mouseY + cubeSize && this.y > mouseY - cubeSize ){
    if(this.x < mouseX + cubeSize){
      this.x = this.x + random(runAwaySpeed);
    }
    if(this.x > mouseX - cubeSize){
      this.x = this.x - random(runAwaySpeed);
    }
    if(this.y < mouseY + cubeSize){
      this.y = this.y + random(runAwaySpeed);
    }
    if(this.y > mouseY - cubeSize){
      this.y = this.y - random(runAwaySpeed);
    }
  //  this.color(125,255,125);
  } else{
    return this.move();
  }

}

function setup() {
  createCanvas(600, 400);
  //object definition in setup
  for (var i = 0; i < 1750; i++) {
     bubbles[i] = new Bubble();
     bubbles[i].color(random(255),random(255),random(255));
  }
//  frameRate(60);
}

function message(){
  textSize(72);
  textAlign(RIGHT);
  fill(255,0,0,10)
  text("you",width/3,height/4);
  fill(0, 102, 153,10);
  textAlign(CENTER);
  text("win,",width/3,height/2);
  fill(0, 102, 153, 10);
  textAlign(LEFT);
  text("congrats!",width/2,height/1.5);
}

function draw() {
  background(0);
  message();
  for (var i = 0; i < bubbles.length; i++) {
//    bubbles[i].jitter(-random(10),random(10),-random(10),random(10));
//    bubbles[i].move();
    bubbles[i].avoid(mouseX, mouseY, 75, 25);
    bubbles[i].display();

  }
}
