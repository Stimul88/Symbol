const heroArray = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];


export default class Character {
  constructor(name, type) {
    if (!(2 < name.trim().length && name.trim().length <= 10)) {
      throw new Error('the name must contain at least 2 characters and a maximum of 10 characters');
    }

    if (!heroArray.includes(type)) {
      throw new Error('type not in the list');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp () {
    if (this.health === 0) {
      throw new Error('it is impossible to raise the level of the deceased')
    }
    this.level++;
    this.attack = this.attack + this.attack/100 * 20
    this.defence = this.defence + this.defence/100 * 20
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence/100)
    }
  }
}
