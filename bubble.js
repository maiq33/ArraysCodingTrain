class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    stroke(255);
    ellipse(this.x, this.y, 48, 48);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
