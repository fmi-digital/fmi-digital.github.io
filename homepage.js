//we need to access a google spreadsheet which contains links and labels, and then display them on the webpage
let links;
let schedule;
let sched = [];
let date = [];
let j = 0;
let check1;

function preload(){
  links = loadTable('assets/links.csv', 'csv');
  schedule = loadTable('assets/schedule.csv', 'csv');
}

//
// function setup(){
// noCanvas();
// let button = createButton('next');
// button.mousePressed(() => {
//   j++;
//   console.log(j);
// for (let i = 0; i < 20; i++){
//   sched[i] = createP(schedule.get(i, j));
//   sched[i].position(100, 100 + i*20);
// }
// });
//
// check1 = new now(2);
// }

function setup(){
  createCanvas(200, 200);
  check1 = new now(2);
  console.log(schedule.get(1, 2));
  console.log(schedule.get(0, 2));
}

function draw(){
  // background(255);
// console.log(j);
check1.display();
}
