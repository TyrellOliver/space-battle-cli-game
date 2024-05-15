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
    
  }
  defend() {}
  powerUp() {}
}

const player1 = new Player("bob");
console.log(player1);

module.exports = Player;
