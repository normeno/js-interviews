export default class Prime {
  constructor() {
    // TODO
  }
  validNumber = (originalNum: number, recursive: boolean = false) => {
    let result: boolean = true;
    
    result = (recursive)
      ? this.recursive(originalNum) : this.validPrime(originalNum); 
    
    return result;
  }

  private formatNumber = (num: number, maxPosition: number) => {
    const aNumber: Array<string> | number = Array.from(num.toString());
  
    // Remove number by position
    for(let i = aNumber.length; i >= 0; i--) {
      if (i > maxPosition) {
        aNumber.splice(i, 1);
      }
    }
  
    return Number(aNumber.join(''));
  }

  private validPrime = (num: number) => {
    let isPrime: boolean = true;
    let invalidBy: Array<number> = [];

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        invalidBy.push(i);
      }
    }

    return isPrime;
  }

  private recursive = (originalNum: number) => {
    let result: boolean = true;

    for (let i: number = originalNum.toString().length -1; i >= 0; i--) {
      let num: number = this.formatNumber(originalNum, i);
      const isPrime: boolean = this.validPrime(num);
      
      if (!isPrime) {
        result = false;
      }
    }

    return result;
  }
}