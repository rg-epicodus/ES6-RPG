import { Player } from './../js/character.js';
import { Opponent } from './../js/opponent.js';
import { Dice } from './../js/dice.js';


$(document).ready(function() {
  $('#attack').submit(function(event) {
    event.preventDefault();
    let player = new Player();
    let opponent = new Opponent();
    let dice = new Dice();
    $("#diceRoll").text(diceRoll);

    });
  });
});
