export default class Team {
  constructor() {
    this.members = new Set();
  }

  add (hero) {
    if(this.members.has(hero)) {
      throw new Error('Ошибка! Такой объект уже существует')
    }
    this.members.add(hero)
  }

  addAll(...allHero) {
    allHero.forEach(hero => this.members.add(hero))
  }

  toArray() {
    return Array.from(this.members)
  }

  [Symbol.iterator](iter) {
    let index = 0;
    return {
      next() {
        if (index >= iter.length) {
          return {
            done: true
          }
        }
        index++
        return {
          value: iter[index - 1],
          done: false,
        };
      }
    }
  }

}