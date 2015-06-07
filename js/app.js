var Enemy = function(x,y,speed){
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
	
    this.sprite = 'images/enemy-bug.png'; 
    this.x = x;
    this.y = y;
    this.speed = speed;
  
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	this.x = this.x + this.speed * dt;
};

Enemy.prototype.checkOutEnemy = function(i) {
	
	if (this.x > 400){
		if (i==0) {
			this.x = 0;
			this.y = 50;
		}
		if (i==1) {
			this.x = 0;
			this.y = 150;
		}
		if (i==2) {
			this.x = 0;
			this.y = 250;
		}
	}
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png'; 
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x = this.x ;
};


// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.collisions = function() {
	for (var i = 0; i < allEnemies.length; i ++) {
		if ((allEnemies[i].x >= this.x - 99) 
				&& (allEnemies[i].x  <= this.x + 100)
				&& (allEnemies[i].y >= this.y - 99)
				&& (allEnemies[i].y <= this.y  + 100)){ 
		
					this.x = 200;
					this.y = 400;
			} 
				
		}
	};

Player.prototype.checkOutPlayer= function(i) {
    if (this.x > 400 || this.x < -15 || this.y < 0 || this.y > 460){
		this.x = 200;
		this.y = 400;
	  }
	};
	
Player.prototype.handleInput = function(event) {
   if (event == "up") {
		this.y= this.y - 100;
   }
   if (event == "down") {
	    this.y= this.y + 100;
	    }
   if (event == "right") {
		this.x= this.x + 100;
		
	}
    if (event == "left") {
		this.x= this.x - 100;
	}
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var initialize = function () {
     allEnemies[0] = new Enemy(0,50,30);
     allEnemies[1] = new Enemy(0,150,20);
     allEnemies[2] = new Enemy(0,250,40);
};

var allEnemies = new Array();
var player = new Player(200,400,4);
initialize();

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
