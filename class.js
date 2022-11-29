class Character {
  constructor(name, inventory) {
    this.name = name;
    this.inventory = inventory;
  }
  power = 5;
}

class Enemy{
  constructor (name, strength, agility, intellect, stamina, power, life){
  this.name = name;
  this.strength = strength;
  this.agility = agility;
  this.intellect = intellect;
  this.stamina = stamina;
  this.power = power;
  this.life = life;
  }
}

module.exports = {
  Character,
  Enemy,
};
