export class Dice {
  constructor(diceRoll) {
    this.diceRoll = 6;
  }

  checkDice(){
    return  Math.floor((Math.random() * this.diceRoll) + 1);
  }
}
