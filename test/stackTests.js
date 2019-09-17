
var assert = require('assert');
var Stack = require('../src/stack/stack');

describe('Stack', () => {
  describe('#push()', () => {
    it('Should add one element', () => {
      const stack = new Stack();
      const el = Math.floor(Math.random() * 101);
      assert.equal(stack.push(el), 1);
    });

    it('Should add two elements', () => {
      const stack = new Stack();
      const el1 = Math.floor(Math.random() * 101);
      const el2 = Math.floor(Math.random() * 101);
      stack.push(el1);
      assert.equal(stack.push(el2), 2);
    });

    it('Should throw error adding second element', () => {
      const stack = new Stack(1);
      const el1 = Math.floor(Math.random() * 101);
      const el2 = Math.floor(Math.random() * 101);
      stack.push(el1);
      assert.equal(stack.push(el2), -1);
    });
  });

  describe('#pop()', () => {
    it('Should remove the last element from the stack and return it', () => {
      const stack = new Stack();
      const el1 = Math.floor(Math.random() * 101);
      const el2 = Math.floor(Math.random() * 101);
      stack.push(el1);
      stack.push(el2);
      assert.equal(stack.pop(el2), el2);
      assert.equal(stack.count(), 1);
    });
  });

  describe('#peek()', () => {
    it('Should be return last item', () => {
      const stack = new Stack();
      const el1 = Math.floor(Math.random() * 101);
      const el2 = Math.floor(Math.random() * 101);
      stack.push(el1);
      stack.push(el2);
      assert.equal(stack.peek(el2), el2);
      assert.equal(stack.count(), 2);
    });
  });
  
  describe('#hasLimit()', () => {
    it('Has limit', () => {
      const stack = new Stack(10);
      assert.notEqual(stack.hasLimit(), -1);
    });

    it('Hasn\'t limit', () => {
      const stack = new Stack();
      assert.equal(stack.hasLimit(), -1);
    });
  });

  describe('#isFull()', () => {
    it('Shouldn\'t be full because it hasn\'t limit', () => {
      const stack = new Stack();
      const el = Math.floor(Math.random() * 101);
      stack.push(el);
      assert.equal(stack.isFull(), false);
    });

    it('Shouldn\'t be full because the number of elements is less than the limit', () => {
      const stack = new Stack(10);
      const el = Math.floor(Math.random() * 101);
      stack.push(el);
      assert.equal(stack.isFull(), false);
    });

    it('Should be full', () => {
      const stack = new Stack(1);
      const el = Math.floor(Math.random() * 101);
      stack.push(el);
      assert.equal(stack.isFull(), true);
    });
  });

  describe('#clear()', () => {
    it('Should be remove all elements', () => {
      const stack = new Stack();
      const el = Math.floor(Math.random() * 101);
      stack.push(el);
      stack.clear();
      assert.equal(stack.count(), 0);
    });
  });

  describe('#count()', () => {
    it('Should be count 0 elements', () => {
      const stack = new Stack();
      assert.equal(stack.count(), 0);
    });

    it('Should be count 1 element', () => {
      const stack = new Stack();
      const el = Math.floor(Math.random() * 101);
      stack.push(el);
      assert.equal(stack.count(), 1);
    });
  });

  describe('#contains()', () => {
    it('Should contain the element', () => {
      const stack = new Stack();
      const el = Math.floor(Math.random() * 101);
      stack.push(el);
      assert.equal(stack.constains(el), true);
    });

    it('Should not contain the element', () => {
      const stack = new Stack();
      const el = Math.floor(Math.random() * 101);
      stack.push(el);
      assert.equal(stack.constains(123), false);
    });
  });

  describe('#show()', () => {
    it('Should be return a empty stack', () => {
      const stack = new Stack();
      assert.equal(Array.isArray(stack.show()), true);
      assert.equal(stack.show().length, 0);
    });

    it('Should be return the stack with elements', () => {
      const stack = new Stack();
      const el = Math.floor(Math.random() * 101);
      stack.push(el);
      assert.equal(Array.isArray(stack.show()), true);
      assert.equal(stack.show().length, 1);
    });
  });
});