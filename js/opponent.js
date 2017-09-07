//Monster Function
let monsters = function(attack, health){
    this.health = health;
    this.attack = attack;
};

//string names
let names;


//random number
let randomnumber = Math.floor(Math.random(10)*10);


//selected monster
let selectedmonster;
if (randomnumber >= 0 && randomnumber < 3){
selectedmonster = reaper;
names = "reaper";
}
else if (randomnumber > 3 && randomnumber < 6){
selectedmonster = dragon;
names = "dragon";
}
else if (randomnumber > 6){
selectedmonster = orc;
names = "orc";
}
else if (randomnumber > 9){
selectedmonster = ogre;
names = "ogre";
}

//battle code


var battle = 1;
var monsterdead = 0;
var playerdead = 0;


// player first, player turn =1
var playerturn = 1;
var monsterturn = 0;


while (battle == 1) {
//my turn
while (playerturn == 1) {
//attack script
selectedmonster.health = selectedmonster.health - Math.ceil(Math.random(player.attack)*10);
console.log(names + "'s Health is now " + selectedmonster.health);
playerturn = 0;
monsterturn = 1;
}


//monster turn


while (monsterturn ==1) {
//attack script
player.health = player.health - Math.ceil(Math.random(selectedmonster.attack)*10);
console.log("Player's Health is now " + player.health);
playerturn = 1;
monsterturn = 0;
}


//when the opponent dies
if (selectedmonster.health < 0) {
monsterdead = 1;
battle = 0;
}
