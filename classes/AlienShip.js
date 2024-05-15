const Player = require("./Player")
class AlienShip {
  // An alien should have at least these properties:
  // - health
  // - power
  // - armor
  constructor() {
    this.hp = 100;
    this.power = Math.floor(Math.random() * 31) + 30;
    this.armor = Math.floor(Math.random() * 20);
  }

  // And these methods
  // - attack
  // - defend
  // - power up
  attack(target){
    target.hp = target.hp - (this.power - target.armor)
    console.log(`HIT! You've struck ${target.name}! Their current HP is now ${target.hp}`)
  }
  defend() {
    this.armor += Math.floor(Math.random() * 5) + 10;
  }
  powerUp() {
    this.hp += 50;
    this.power += Math.floor(Math.random() * 5) + 25;
    this.armor += Math.floor(Math.random() * 5);
  }

}




module.exports = AlienShip;
