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
let div = 50;

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

//
// for (let i = 0; i < 5; i++){
//   if (i )
// }


  // ellipse(mouseX, mouseY, 200, 200);

  //
  for (let i = 0; i < div; i++){
      let r = random(0, 1000);
      stroke(5, 9, 255, 15);
      noFill();
      ellipse(mouseX + i, mouseY + i, r, r);
      stroke(52, 52, 54, 15);
      noFill();
      ellipse(width - (mouseX + i), height - (mouseY + i), r, r);
      // stroke(52, 52, 54, 20);
      // noFill();
      // ellipse(r, r, r, r);

    // else if (i % 20 == 0){
    //   stroke(200, i);
    //   noFill();
    //   // strokeWeight(10);
    //   ellipse(mouseX + i, mouseY + i, r, r);
    //   console.log(i);
    // }
    // else{
    //   stroke(200, i);
    //   noFill();
    //   ellipse(mouseX + i, mouseY + i, r, r);
    // }

  }
// div++;
//
// if (div == 500){
//   div = 0;
// }



}
