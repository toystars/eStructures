/**
  * Creates an empty stack.
  * @class A stack is a data structure that declares the behavior of a collection 
  * that stores a sequence of elements according to the Last In First Out rule.
  * The stack class can be used on its own, but it is defined as abstract as possible
  * that any class extending it can set rules about operations that can be perfomed on the collection
  * @constructor
  */

var eStack = function () {
  
  // object containing all properties and functions of the stack
  var stack = {};
  
  /**
    * Function to get type of eStructure object
    */
  stack.getType = function () {
    return 'eStack';
  };

  /**
    * Private array property to hold all elements added to the stack
    */
  var data = [];
  
  /**
    * Function to get size of eStack
    */
  stack.size = function () {
    return data.length;
  };

  /**
    * Returns empty status of stack
    * @return {Boolean} true if stack is empty, false if otherwise
    */
  stack.isEmpty = function () {
    return data.length === 0;
  };
  
  /**
    * Adds an element to the stack and returns the new size.
    * @param {Object} item - Element to be added (must always be present).
    * @return {Integer} New size of the stack if the element was added or -1 if error occurs
    */
  stack.put = function (element) {
    
    // return error code if no argument is specified
    if (arguments.length === 0) {
      return -1;
    }
    
    // add first item passed as argument to private array, ignore all extras
    data.unshift(element);
    
    // return new size of stack
    return stack.size();

  };
  
  /**
    * Returns element at the head of the stack.
    * @return {Object} Object at the head of the stack, -1 if stack is empty
    */
  stack.peek = function () {
    
    // return error code if no argument is specified
    if (stack.isEmpty()) {
      return -1;
    }
    
    // return first element in data array
    return data[0];

  };
  
  /**
    * Removes element at the head of the stack and returns it.
    * @return {Object} Object at the head of the stack, -1 if stack is empty
    */
  stack.remove = function () {
    
    // return error code if no argument is specified
    if (stack.isEmpty()) {
      return -1;
    }
    
    // remove and return first element in data array
    return data.shift();

  };
  
  /**
    * Clears all elements in the stack
    */
  stack.clear = function () {
    
    // Assign an empty array literal to the data array
    data = [];

  };
  
  /**
    * Returns the stack as an array
    */
  stack.toArray = function () {
    
    // Return the data array
    return data;

  };

  return stack;

};

eGlobal.eStack = eStack;
