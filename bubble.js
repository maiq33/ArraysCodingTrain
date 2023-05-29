class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.brightness = 0; 
  }

  display() {
    stroke(255);
    fill(this.brightness, 100);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  changeColor(bright){
    this.brightness = bright;
  }

  contains(px,py){
  let d = distance(px, py, this.x, this.y)
    if(d < this.size/2){
      return true;
    }else{
      return false;
    }
}

}
