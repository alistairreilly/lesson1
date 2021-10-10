let circlex
let circley
let speedx
let speedy
function setup() {
  createCanvas(400, 400);
  circlex = 10;
  circley = 20;
  speedx = 5;
  speedy = 6;
}

function draw() {
  background(220);
  circle(circlex,circley,20);
  circlex += speedx;
  circley += speedy;
  if(circlex >= 400){
    speedx*=-1;}
  if(circlex <= 0){
    speedx*=-1;
  }
    if(circley>= 400){
    speedy*=-1;}
  if(circley<= 0){
    speedy*=-1;
  }
}
