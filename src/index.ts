class Sorter {
  constructor(public collection: number[]) {
    this.collection = collection;
  }
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; i < length - i - 1; i++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const temp = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = temp;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 0, -3, 5]);
sorter.sort();
console.log(sorter.collection);
