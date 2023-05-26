class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.brightness = 0;
  }

  display() {
    stroke(255);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  clicked(){
    let d = distance(mouseX, mouseY, this.x, this.y)
    if(d < this.size/2){
      this.brightness = 255;
      console.log("circle clicked");
    }
  }
}
