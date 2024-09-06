let posicaoXbolinha=200 //fornece a posicao X da bolinha
let posicaoYbolinha=200 //fornece a posicao Y da bolinha
let diametro=50
let cor

function setup() {
  createCanvas(400, 400);
  cor=[color(random(0,255), random(0,255), random(255)),color(random(0,255), random(0,255), random(255))]
  background(128,0,0);
}

function draw() {
  
  
  circle(posicaoXbolinha,posicaoYbolinha,diametro)
  
  fill(cor)
  
  circle(posicaoXbolinha2,posicaoYbolinha2,diametro2)
  
  fill(cor)
  //posicaoXbolinha= posicaoXbolinha+1
  //posicaoYbolinha= posicaoYbolinha+1
  diametro= diametro+1
  if(mouseIsPressed){
    cor=color(random(0,255), random(0,255), random(0,255))
    diametro=0
}
}