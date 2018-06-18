// Enemies our player must avoid
const Enemy = function(startx,starty) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = startx;
    this.y = starty;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {

  this.sprite = "images/char-cat-girl.png"
  this.x = 200;
  this.y = 380;
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyCode) {
  if (keyCode === 'left' && this.x != -2) {
    this.x -= 101;
  }
  if (keyCode === 'up' && this.y != -35) {
    this.y -= 83;
  }
  if (keyCode === 'right' && this.x != 402) {
    this.x += 101;
  }
  if (keyCode === 'down' && this.y != 380) {
    this.y += 83;
  }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const enm1 = new Enemy(210,200);
const enm2 = new Enemy(110,300);
const enm3 = new Enemy(410,100);


const allEnemies = [enm1, enm2, enm3];
const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
