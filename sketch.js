var bubbles = [];


function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 10; i++){
    var x = random(width);
    var y = random(height);
    var r = random(15,50);
    bubbles.push(new Bubble(x, y, r));
  }
}

function draw() {
  background(0);
  
  for(var i = 0; i < bubbles.length; i++){
    if(bubbles[i].contains(mouseX,mouseY)){
      bubbles[i].changeColor(255);
    }else{
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].display();
  }
}


/*
function mouseClicked() {
  var x = mouseX;
  var y = mouseY;
  var size = random(10, 50); // Genera un tamaño aleatorio entre 10 y 50
  bubbles.push(new Bubble(x, y, size));
}
*/

function mouseClicked() {
    for(var i = bubbles.length-1; i >= 0; i--){
      if(bubbles[i].contains(mouseX,mouseY)){
        bubbles.splice(i,1);
      }
  }
}

// Función para calcular la distancia entre dos puntos
function distance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

