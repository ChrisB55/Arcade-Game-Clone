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
    this.speed = this.getspeed();
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
var Player = function(x,y, speed){
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/char-boy.png';
};
// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.update = function(dt){
this.x * (dt);
this.y * (dt);
};

Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction){

  if(direction === 'left'){
 this.x -= 100;
 }
 if(direction === 'up'){
 this.y -= 82.5;
 }
 if(direction === 'right'){
 this.x += 100;
 }
 if(direction === 'down'){
 this.y += 82.5;
 }
 };

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var Enemy1= new Enemy(400,220,[100]);
var Enemy2= new Enemy(200,140,[100]);
var Enemy3= new Enemy(100,60,[100]);
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
// Place the player object in a variable called player

var player = new Player(200,400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    Player.prototype.handleInput(allowedKeys[e.keyCode]);
});
//code I need to reconsider
///var allEnemies = [];
//for (var i = 0; i < 3; i++) {
    ///allEnemies.push (new Enemy());
//};

///
//var keyPressed = allowedKeys[e.keyCode];
//});
