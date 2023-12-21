import Bowerman from '../Bowman.js';
import Swordsman from '../Swordsman.js';
import Magician from '../Magician.js';
import Daemon from '../Daemon.js';
import Undead from '../Undead.js';
import Zombie from '../Zombie.js';
import Character from "../Character.js";

const heroArray = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

class Boomer extends Character {
  constructor(name) {
    super(name, 'Boomer', 25, 25);
  }
}

class Pop extends Character {
  constructor(name) {
    super(name, 'Bowman', 25, 25);
    this.health = 0;
  }

}

test('bowerman test', () => {
  const bowerman = new Bowerman('Bowman');
  const correct = {
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }
  expect(bowerman).toEqual(correct);
});

test('swordsman test', () => {
  const swordsman = new Swordsman('Swordsman');
  const correct = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }
  expect(swordsman).toEqual(correct);
});

test('magician test', () => {
  const magician = new Magician('Magician');
  const correct = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }
  expect(magician).toEqual(correct);
});

test('undead test', () => {
  const undead = new Undead('Undead');
  const correct = {
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }
  expect(undead).toEqual(correct);
});

test('zombie test', () => {
  const zombie = new Zombie('Zombie');
  const correct = {
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }
  expect(zombie).toEqual(correct);
});

test('daemon test', () => {
  const daemon = new Daemon('Daemon');
  const correct = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }
  expect(daemon).toEqual(correct);
});

test('incorrect name test', () => {
  expect(() => {
    new Bowerman('p');
  }).toThrow();
});

test('type to be in list test', () => {
  const bowerman = new Bowerman('Bowman');
  expect(heroArray).toContain(bowerman.type);
});

test('type not in list test', () => {
  expect(() => {
    new Boomer('Pop');
  }).toThrow();
});

test('level up test', () => {
  const bowerman = new Bowerman('Bowman');
  bowerman.levelUp()
  expect(bowerman.level).toBe(2);
});


test('level up impossible test', () => {
  expect(() => {
    new Pop('Pop').levelUp();
  }).toThrow();
});

test('attack up test', () => {
  const bowerman = new Bowerman('Bowman');
  bowerman.levelUp()
  expect(bowerman.attack).toBe(30);
});

test('defence up test', () => {
  const bowerman = new Bowerman('Bowman');
  bowerman.levelUp()
  expect(bowerman.defence).toBe(30);
});

test('health up test', () => {
  const bowerman = new Bowerman('Bowman');
  bowerman.levelUp()
  expect(bowerman.health).toBe(100);
});

test('damage test', () => {
  const bowerman = new Bowerman('Bowman');
  bowerman.damage(30)
  expect(bowerman.health).toBe(77.5);
});