class Stack {
  
  constructor(maxElements = null) {
    this._elements = [];
    this._maxElements = maxElements;
  }

  /**
   * Clear the stack
   */
  clear() {
    this._elements = {};
    return this.count();
  }

  /**
   * Get the current size
   */
  count() {
    return this._elements.length || 0;
  }
  
  /**
   * Add a new element to stack in the last position
   * 
   * @param {*} newElement 
   * @returns {number} Position of the new element
   */
  push(newElement) {
    if (this.hasLimit() != -1 && this.isFull()) {
      return -1;
    }
    
    this._elements.push(newElement);
    return this.count();
  }

  /**
   * Remove the last element from the stack and return it
   */
  pop() {
    return this._elements.pop();
  }

  /**
   * Return last item
   */
  peek() {
    return this._elements[this.count()-1];
  }

  /**
   * If has limit return true else return false
   * 
   * @return {boolean}
   */
  hasLimit() {
    return this._maxElements == null ? -1 : this._maxElements;
  }

  /**
   * 
   * @returns {boolean}
   */
  isFull() {
    if (this._maxElements == null) {
      return false;
    }
    
    return (this._maxElements <= this.count()) ? true : false;
  }

  /**
   * Determines whether an element is in the Stack
   * 
   * @param {*} el 
   * @returns {boolean}
   */
  constains(el) {
    return this._elements.includes(el) ? true : false;
  }

  /**
   * Return the stack
   * 
   * @returns {Array}
   */
  show() {
    return this._elements;
  }
}

module.exports = Stack;