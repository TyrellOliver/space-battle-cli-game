const AlienShip = require("./AlienShip");
class Player {
  // A player should have at least these properties:
  // - name
  // - health
  // - power
  // - armor
  constructor(name) {
    this.name = name;
    this.hp = 1000;
    this.power = Math.floor(Math.random() * 51) + 50;
    this.armor = Math.floor(Math.random() * 21) + 20;
  }
  // And these methods
  // - attack
  // - defend
  // - power up
  attack(target) {
    target.hp = target.hp - (this.power - target.armor);
    console.log(
      `HIT! You've struck an alien ship! Their current HP is now ${target.hp}`
    );
  }
  defend() {
    this.armor += Math.floor(Math.random() * 5) + 20;
  }
  powerUp() {
    this.hp += 100;
    this.power += Math.floor(Math.random() * 5) + 15;
    this.armor += Math.floor(Math.random() * 5);
  }
}

const player1 = new Player("bob");
const alien = new AlienShip();
// console.log("/////Before the Attack/////////");
// console.log(player1);
// console.log(alien)

// console.log("/////After the Attack/////////");
// alien.attack(player1)
// console.log(alien)
// console.log(player1)




module.exports = Player;
