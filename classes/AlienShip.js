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

}

const alien1 = new AlienShip()
console.log(alien1)

module.exports = AlienShip;
