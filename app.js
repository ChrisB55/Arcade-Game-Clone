// Enemies our player must avoid
var Enemy = function(x, y, speed) {

  // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y =230 * Math.random();
    this.speed = 10 + Math.random() * 200;
    return this;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x = this.x + this.speed * dt;
      if (this.x > 600){
          this.x = 0;
         }
         return;
  // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
Enemy.prototype.getspeed = function(){
var random = Math.random() + .05;
if (Math.floor(random)< 1)
   {
     return 3;
   }
   else
   {
      return 6;
   }

};

var Enemy1= new Enemy(400,220,[100]);
var Enemy2= new Enemy(200,140,[100]);
var Enemy3= new Enemy(100,60,[100]);
var allEnemies = [Enemy1, Enemy2, Enemy3];

var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = "images/char-boy.png";
}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
  this.x = 200;
  this.y = 400;

};

var collision = function(a, b) {
  return (a.x < (b.x + 50) &&
          (a.x + 50) > b.x &&
          a.y < (b.y + 30) &&
          (a.y + 30) > b.y);
};

Player.prototype.collision = function() {
  for (var i = 0; i < allEnemies.length; i++) {
    if (collision(this, allEnemies[i])) {
      this.reset();
      return;
    }
  }
};


Player.prototype.update = function() {
  if (this.y <= 40) {
    this.reset();
  }
  this.collision();
};

Player.prototype.handleInput = function (keyCode) {
  switch (keyCode) {
  case 'left':
    if (this.x > 0) {
      this.x -= 101;
    }
    break;
  case 'right':
    if (this.x < 400) {
      this.x += 101;
    }
    break;
  case 'up':
    if (this.y > 0) {
      this.y -= 85;
    }
    break;
  case 'down':
    if (this.y < 400) {
      this.y += 85;
    }
    return;
  }

};

var player = new Player(200, 400);

document.addEventListener('keyup', function (e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});
