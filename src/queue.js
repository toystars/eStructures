/**
  * Creates an empty Queue.
  * @class A Queue is a data structure that declares the behavior of a collection 
  * that stores a sequence of elements according to the First In First Out rule.
  * The queue class can be used on its own, but it is defined as abstract as possible
  * that any class extending it can set rules about operations that can be perfomed on the collection
  * @constructor
  */

var eQueue = function () {
  
  // object containing all properties and functions of the queue
  var queue = {};
  
  /**
    * Function to get type of eStructure object
    */
  queue.getType = function () {
    return 'eQueue';
  };

  /**
    * Private array property to hold all elements added to the queue
    */
  var data = [];
  
  /**
    * Function to get size of eQueue
    */
  queue.size = function () {
    return data.length;
  };
  
  /**
    * Adds an element to the queue and returns the new size.
    * @param {Object} item - Element to be added (must always be present).
    * @return {Integer} New size of the queue if the element was added or -1 if error occurs
    */
  queue.put = function (element) {
    
    // return error code if no argument is specified
    if (arguments.length === 0) {
      return -1;
    }
    
    // add first item passed as argument to private array, ignore all extras
    data.push(element);
    
    // return new size of queue
    return queue.size();

  };
  
  /**
    * Returns element at the head of the queue.
    * @return {Object} Object at the head of the queue, -1 if queue is empty
    */
  queue.peek = function () {
    
    // return error code if no argument is specified
    if (data.length === 0) {
      return -1;
    }
    
    // return first element in data array
    return data[0];

  };
  
  /**
    * Removes element at the head of the queue and returns it.
    * @return {Object} Object at the head of the queue, -1 if queue is empty
    */
  queue.remove = function () {
    
    // return error code if no argument is specified
    if (data.length === 0) {
      return -1;
    }
    
    // remove and return first element in data array
    return data.shift();

  };
  
  /**
    * Clears all elements in the queue
    */
  queue.clear = function () {
    
    // Assign an empty array literal to the data array
    data = [];

  };
  
  /**
    * Returns the queue as an array
    */
  queue.toArray = function () {
    
    // Return the data array
    return data;

  };

  return queue;

};

eGlobal.eQueue = eQueue;
