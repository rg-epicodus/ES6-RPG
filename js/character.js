//Player Function
let players = function(attack, health){
    this.attack = attack;
    this.health = health;
};

//Make Player Here
let player = new players(50, 1000);

// if dead
if (player.health < 0) {
playerdead = 1;
battle = 0;
}
}
