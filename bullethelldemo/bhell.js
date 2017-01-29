function gbi(id) {
  return document.getElementById(id);
}

function s(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let gameCan = gbi('gameCan');
let context = gameCan.getContext('2d');

let w = 640;
let h = 480;

gameCan.width = w;
gameCan.height = h;

let score = 0;

let xVels = [-1, 0, 1];
let yVels = [5, 6, 7];
let xPos = [];

for(i=10; i<w; i+=5) {
  xPos.push(i);
}

function draw(obj) {
  context.beginPath();
  context.fillStyle = 'rgb(20, 245, 60)';
  context.arc(obj.x, obj.y, 5, 0, Math.PI*2);
  context.fill();
}

function Bullet(x, vx, vy) {
  this.x = x;
  this.y = 0;
  this.r = 5;
  this.vx = vx;
  this.vy = vy;
}

let b0, b1, b2, b3, b4, b5, b6, b7, b8, b9;

b0 = new Bullet(s(xPos)[0], s(xVels)[0], s(yVels)[0]);
b1 = new Bullet(s(xPos)[0], s(xVels)[0], s(yVels)[0]);
b2 = new Bullet(s(xPos)[0], s(xVels)[0], s(yVels)[0]);
b3 = new Bullet(s(xPos)[0], s(xVels)[0], s(yVels)[0]);
b4 = new Bullet(s(xPos)[0], s(xVels)[0], s(yVels)[0]);
b5 = new Bullet(s(xPos)[0], s(xVels)[0], s(yVels)[0]);
b6 = new Bullet(s(xPos)[0], s(xVels)[0], s(yVels)[0]);
b7 = new Bullet(s(xPos)[0], s(xVels)[0], s(yVels)[0]);
b8 = new Bullet(s(xPos)[0], s(xVels)[0], s(yVels)[0]);
b9 = new Bullet(s(xPos)[0], s(xVels)[0], s(yVels)[0]);

bullets = [b0,b1,b2,b3,b4,b5,b6,b7,b8,b9];

let player = {
  x: w/2-10,
  y: h-20,
}

// start screen

tx = 170;
ty = 165;

tFlag = true;

var tScreen = setInterval(function() {
  context.clearRect(0,0,w,h);
  context.fillStyle = 'rgb(20, 245, 60)';
  context.font = "40px sans-serif";
  context.fillText("Bullet Hell Demo", tx, ty);
  if(tFlag) {
    ty++;
  } else {
    ty--;
  }

  if(ty == 169) {
    tFlag = false;
  } else if(ty == 161) {
    tFlag = true;
  }

  context.font = '10px sans-serif';
  context.fillText('Click to start!', tx+120, h-75);
},1000/5);

gameCan.addEventListener('click', function() {
  clearInterval(tScreen);
  play();
});

function play() {
  gameCan.removeEventListener('click', function() {
    clearInterval(tscreen);
    play();
  });

  context.clearRect(0,0,gameCan.width, gameCan.height);
  for(i=0; i!=bullets.length; i++) {
    draw(bullets[i]);
  }

  context.fillStyle = 'rgb(20,245,60)';
  context.fillRect(player.x, player.y, 10, 10);

  context.font = '10px sans-serif';
  context.fillText('Score: ' + score, 5, 10);

  let theGame = setInterval(function() {
    context.clearRect(0,0, gameCan.width, gameCan.height);
    for(i=0; i!=bullets.length; i++) {
      bullets[i].x += bullets[i].vx;
      bullets[i].y += bullets[i].vy;
      if(bullets[i].y > h || bullets[i].x > w || bullets[i].x < 0) {
        bullets[i].x = s(xPos)[0];
        bullets[i].y = 0;
        bullets[i].vx = s(xVels)[0];
        bullets[i].vy = s(yVels)[0];
        score++;
      }
      draw(bullets[i]);
      context.fillStyle = 'rgb(20,245,60)';
      context.fillRect(player.x, player.y, 10, 10);
    }

    context.fillText('Score: ' + score, 5, 10);
  }, 1000/60);
}

function gameOver() {
  clearInterval(theGame);
}
