var assert = require('assert');
var Prime = require('../lib/algorithms/prime/prime').default;

describe('#recursive()', () => {
  it('Should return prime', () => {
    const prime = new Prime();
    const validNumber = prime.validNumber(3793, true);
    assert.equal(validNumber, true);
  });

  it('Shouldn\t return prime', () => {
    const prime = new Prime();
    const validNumber = prime.validNumber(3753, true);
    assert.equal(validNumber, false);
  });
});

describe('#simple()', () => {
  it('Should return prime', () => {
    const prime = new Prime();
    const validNumber = prime.validNumber(7, false);
    assert.equal(validNumber, true);
  });

  it('Shouldn\'t return prime', () => {
    const prime = new Prime();
    const validNumber = prime.validNumber(10);
    assert.equal(validNumber, false);
  });
});