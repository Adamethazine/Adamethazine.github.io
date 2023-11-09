
// bemærk hvis man skal oprette flere canvas og køre ikke-global mode
// https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace
// https://www.youtube.com/watch?v=Su792jEauZg
// derman kan man oprette instans som objekt, hvori sketchen kører
// Og man kan oprette flere canvas med samme sketch eller
// forskellige sketches i forskellige canvas
// instans mode skal closure på variable - namespacing - vs global mode med globale variable

// tilføj knapper, og tilføj eventlistener til knappen, funktionskald
// 10 spring til siden hurtigt nok - gør baggrunden helt hvid...

let ned = true;
let rystet = 0;
let flyttet = 0;
let timer = 0; // Timer variabel

function setup() {
  canvas = createCanvas(300, 550, 'beholder');
  textSize(12);
  canvas.elt.style.border = '5px solid black';
  canvas.elt.style.boxSizing = 'border-box';
  canvas.elt.style.borderRadius = '20px';
  canvas.parent('#beholder');
  canvas.elt.style.width = '100%';
  canvas.elt.style.height = '100%';
  const parentDiv = select('#beholder').elt;
  const p = select('#test1').elt;
  parentDiv.insertBefore(canvas.elt, p);
}

function draw() {
  background(255, 255, 255);
  strokeWeight(10);

  if (accelerationX > 70) {
    if (rystet % 2 == 0) {
      ned = !ned;
      timer++; // Øg timeren hver gang rystet er lige
    }
    rystet++;
    if(rystet > 30);
    rystet = 0;
  }
  
  // Vis timeren i midten af skærmen
  fill(0);
  textSize(20);
  text('ANTAL ENGLEHOP: ', width / 2, height / 2);
 
  push();
  textSize(100);
  text(timer, width/2, height / 2 + 150);
  pop();

  push();
  textSize(20);
  text('LAV ENGLEHOP' , width / 2, 100);
  pop();
  
}

function deviceMoved() {
  flyttet++;
}