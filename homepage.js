let title;
let upcoming;
let meanwhile;
let live;
let latent;
let canvas1;
let events = [];
let links = [];

function preload(){
  live = loadTable('assets/live.csv', 'csv', 'headers');
  // latent = loadTable('assets/latent.csv', 'csv');
}

function setup(){

  title = createDiv().id('title');
  upcoming = createDiv('upcoming...').id('upcoming');
  meanwhile = createDiv('meanwhile').id('meanwhile');

  canvas1 = createCanvas(200, 1200);

  createElement('h1', 'FIVE').parent('title');
  createElement('h1', 'MILLION').parent('title');
  createElement('h1', 'INCIDENTS').parent('title');

  for (let i = 1; i < live.getRowCount(); i++){
    // console.log(live.get(5, 5));
    links[i] = createA(live.get(i, 5), live.get(i, 0), "_blank");
    events[i] = createP( + ' ' + live.get(i, 1) + ' ' + live.get(i, 2) + ' ' + live.get(i, 3) + ' ' + live.get(i, 4));
    links[i].parent('upcoming');
    events[i].parent('upcoming');

  }

  latent = createP().parent('meanwhile');
  latent.html('Anish Cherian invites you to <a href=https://www.desirecollective.com/>listen</a> to the trees in Lodhi Garden. Madhurjya Dey’s <a href=https://madhurjya-dey.itch.io/shepard-tone>story</a>of two estranged brothers goes on and on and on, and ends at the beginning. Sultana Zana plants <a href=https://sultanazana.github.io/fieldness.io/>seeds</a> .Awdhesh Tamrakar builds <a href=>invisible architectures</a>. Vyom Mehta goes on a <a href=https://www.instagram.com/vyomasura/>vacation</a> to Lahore. Shraddha Borwake and Louwrein Wijers <a href=https://www.facebook.com/theageofgarbs>play a game while eating chaat</a>. 33550 minutes were accumulated in Sonam Chaturvedi’s time vending machine. She is now going to <a href=http://kairoi.in/>auction off all of this time</a>. Anuj Malhotra and Suraj Prasad need your help in unearthing a <a href=http://lightcube.in/>lost film from the 1930s</a>. All they have is Baghdadi’s diary full of clues. Bazik Thlana will call you with a <a href=>bedtime story about bedbugs</a>. Krishnapriya CP and Narendran K are building a <a href=http://project4u.co.in/dictionaryofnonsense/>dictionary of nonsense</a>. Sujith Malik and his friends have conversations across the horizon <a href=>while digging a hole in the ground</a>');

}

function draw(){
clear();
// background(10);

}
