// let liveTable;
// let tablewWapper;
//
// function setup(){
//   tableWrapper = select('.table-wrapper');
//   liveTable = select('#liveTable');
//   tableWrapper.position(500, 500);
//
//   console.log(liveTable.getColumnCount());
// }
//
// function draw(){
//     liveTable.mouseOver(changeColor);
// }
//
// function changeColor(){
//   liveTable.style('background-color', 'red');
// }
//
// let liveTable;
// let columns;
//
// function setup(){
// liveTable = document.getElementById("liveTable");
// columns = document.getElementById("columns");
// console.log(liveTable.rows[1].cells.length);
// // columns.style();
// // columns.style('background-color', 'red');
// liveTable.rows[0].cells.style('background-color', 'blue');
// }
let r1, g1, b1, r2, g2, b2;
let div = 100;

let canvas;
function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noCursor();
  r1 = 177;
  g1 = 176;
  b1 = 255;
  r2 = 1;
  g2 = 0;
  b2 = 64;
}

function draw(){
  background(255);

  noStroke();
  fill(120, 150, 100);
  ellipse(mouseX, mouseY, 1000, 1000);
  for (let i = 0; i < 100; i++){
    // strokeWeight(1);
    fill(r1 + ((r2 - r1)/div)*i, g1 + ((g2 - g1)/div)*i, b1 + ((b2 - b1)/div)*i);
    noStroke();
    rect(0,i + i*height/div, width, height/div);
    }

}
