let bubble1, bubble2, bubble3, bubble4, bubble5

function setup() {
  createCanvas(960, 540);
  bubble1 = new Bubble(800, 300, 20);
  bubble2 = new Bubble(350, 200,20);
  bubble3 = new Bubble(700,430,20);
  bubble4 = new Bubble(320,100,20);
  bubble5 = new Bubble(200,96,20);
  
 
}

function draw() {
  background(36,36,36);
  bubble1.move();
  bubble1.show();
  bubble2.show();
  bubble2.move();
  bubble3.show();
  bubble3.move();
  bubble4.show();
  bubble4.move();
  bubble5.show();
  bubble5.move();
  
  
}

class Bubble {
	constructor(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;
	}
	move() {
		this.x = this.x + random(-5,5)
        this.y = this.y + random(-5,5)
	}
	show() {
push();
fill(253,255,0);
stroke(2);
strokeWeight(2);
ellipse(this.x, this.y, this.r * 2);	
pop();
	}
} 
