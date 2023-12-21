export default class TeamGenerator {

  *[Symbol.iterator](iter) {
    let count = 0;
    while (iter.length > count) {
      yield iter[count];
      count++;
    }
  }
}