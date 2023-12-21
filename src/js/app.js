import Team from "./Team.js"
import TeamGenerator from "./TeamGenerator.js"
import Character from "./Character.js";

const team = new Team();
const teamGenerator = new TeamGenerator();

const bowman = new Character('Bowman', 'Bowman' );
const daemon = new Character('Daemon', 'Daemon' );
const zombie = new Character('Zombie', 'Zombie' );

team.addAll(bowman, daemon, bowman, zombie)

const array = team.toArray()
const data = team[Symbol.iterator](array)
const data2 = teamGenerator[Symbol.iterator](array)


console.log(data.next())
console.log(data.next())
console.log(data.next())
console.log(data.next())

console.log('--------------------------------------------')

console.log(data2.next())
console.log(data2.next())
console.log(data2.next())
console.log(data2.next())



