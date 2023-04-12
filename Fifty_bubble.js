let bubbles = [];

function setup() {
  createCanvas(960, 540);

  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let r = 20;
    bubbles[i] = new Bubble(x, y, r);
    
    
  
  }
}

function draw() {
  background(36, 36, 36);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
    bubbles[i].borderEdges();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    push();
    fill(253, 255, 0);
    stroke(2);
    strokeWeight(2);
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }

   borderEdges() {
    if (this.x < this.r) {
      this.x = this.r;
    } else if (this.x > width - this.r) {
      this.x = width - this.r;
    }

    if (this.y < this.r) {
      this.y = this.r;
    } else if (this.y > height - this.r) {
      this.y = height - this.r;
    }
  }
}
