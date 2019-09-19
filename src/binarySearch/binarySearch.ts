class BinarySearch {
  private _elements: Array<number>;
  private _target: number;
  private _position?: number;

  constructor(elements: Array<number>, target: number) {    
    this._elements = elements.sort();
    this._target = target;
    this.main();
  }

  main() {
    let start = 0,
      end = this._elements.length,
      middle = Math.floor((start + end) / 2);

    if (start > end) {
      throw 'number does not exists';
    }

    do {
      middle = Math.floor((start + end) / 2);

      if (this._elements[middle] < this._target) {
        start++;
      } else if (this._elements[middle] > this._target) {
        end--;
      }
    } while (this._elements[middle] !== this._target && start < end);

    this._position = middle;
  }
}

const binarySearch = new BinarySearch([1, 3, 5, 7, 8, 9], 7);
console.log(binarySearch);