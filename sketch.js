let x;
let y;


let xspeed;
let yspeed;

let tommy;

function preload() {
  tommy = loadImage("tommy lee2.png");
}

// Set up how big your background is.
function setup() {
  createCanvas(2550, 1430);
  x = 500;
  y = 600;
  xspeed = 5;
  yspeed = 5;
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}


// Color of background = black
function draw() {
  background(0);
  //rect(x,y,80,60);
  image(tommy, x, y, 350, 350);

  x = x + xspeed;
  y = y + yspeed;

  if (x + 350 >= width+32 || x <= -30) {
    xspeed = xspeed * -1;
  }

  if (y + 320 >= height+15 || y <= 0) {
    yspeed = yspeed * -1;
  }

}