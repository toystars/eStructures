
var eGlobal = {};
if (typeof module !== 'undefined' && module !== null && module.exports) {
  module.exports = eGlobal;
}

/**
  * Creates an empty LinkedList.
  * @class A Linkedlist is a data structure that declares the behavior of a collection 
  * that stores a sequence of elements with each element pointing to the next element,
  * while the last element points to null to signify the end of the link chain
  * @constructor
  */

var eLinkedList = function () {

  // private references to start and end of linkedList
  var start = null;
  var end = null;

  // private length property of linkedList
  var length = 0;

  // linkedList object to be returned, containing all exposed methods
  var linkedList = {};

  // function to create empty node
  var makeNode = function () {
    return {
      data: null,
      next: null
    };
  };

  /**
    * Function to get type of eStructure object
    */
  linkedList.getType = function () {
    return 'eLinkedList';
  };

  /**
    * Function to get size of eLinkedList
    */
  linkedList.size = function () {
    return length;
  };

  /**
    * Function to get first element of eLinkedList
    */
  linkedList.getFirst = function () {
    return start;
  };

  /**
    * Function to get last element of eLinkedList
    */
  linkedList.getLast = function () {
    return end;
  };

  /**
   * Function to test empty status eLinkedList
   */
  linkedList.isEmpty = function () {
    return length <= 0;
  };

  /**
    * Returns the element at the specified position of eLinkedList
    */
  linkedList.nodeAtPosition = function (position) {
    var node, i;
    if (typeof position !== 'number' || position < 1 || position > length) {
      return undefined;
    }
    if (position === length) {
      return linkedList.getLast();
    }
    node = linkedList.getFirst();
    for (i = 1; i < position; i++) {
      node = node.next;
    }
    return node;
  };

  /**
    * Removes node from specified index in linkedList.
    * @return {Object} removed node if successful, undefined if error occurs
    */
  linkedList.remove = function (position) {
    var previousNode, currentNode;

    if (!position || position < 1 || position > length) {
      return undefined;
    }

    if (position === 1) {
      currentNode = start;
      start = start.next;
      length--;
      return currentNode;
    } else if (position === length) {
      previousNode = linkedList.nodeAtPosition(position - 1);
      currentNode = end;
      previousNode.next = null;
      length--;
      return currentNode;
    }

    previousNode = linkedList.nodeAtPosition(position - 1);
    currentNode = linkedList.nodeAtPosition(position);
    previousNode.next = linkedList.nodeAtPosition(position + 1);
    length--;

    return currentNode;
  };

  /**
    * Removes all the elements from the eLinkedList.
    */
  linkedList.clear = function () {
    start = null;
    end = null;
    length = 0;
  };

  /**
    * Removes first element from the eLinkedList.
    * @return {Boolean} true if first element is successfully removed, false if error occur
    */
  linkedList.removeFirst = function () {
    if (length > 0) {
      start = start.next;
      length--;
      return true;
    }
    return false;
  };

  /**
   * Adds an element to the linkedList.
   * @return {Integer} Non-negative integer if the element was added or -1 if error occurs
   * @param data
   */
  linkedList.add = function (data) {
    if (!data) {
      return -1;
    }
    if (start === null) {
      start = makeNode();
      end = start;
    } else {
      end.next = makeNode();
      end = end.next; 
    }
    end.data = data;
    length++;
    return linkedList.size();
  };

  /**
   * Sets data of element at specified index to new data
   * @return {Boolean} true if element replacement is successful, false if otherwise
   * @param position
   * @param data
   */
  linkedList.set = function (position, data) {
    if (arguments.length < 2 || typeof position !== 'number' || position < 1 || position > length) {
      return false;
    }
    var node = linkedList.nodeAtPosition(position);
    node.data = data;
    return true;
  };

  /**
    * Adds an element as first element of the linkedList.
    * @param {Object} data - Element to be added (must always be present).
    * @return {Integer} Non-negative integer if the element was added or -1 if error occurs
    */
  linkedList.insertAsFirst = function (data) {
    var temp = makeNode();
    temp.next = start;
    start = temp;
    temp.data = data;
    length++;
    return linkedList.size();
  };

  /**
    * Iterates over linkedList
    * @param {Function} callBack - CallBack function that takes the data and position at each level of
    * linkedList
    * at each level...
    */
  linkedList.iterate = function (callBack) {
    var current = start,
    position = 1;
    while (current !== null) {
      callBack(current.data, position);
      current = current.next;
      position++;
    }
  };

  /**
    * Returns array representation of linkedList data
    */
  linkedList.toArray = function () {
    var array = [];
    linkedList.iterate(function (data) {
      array.push(data);
    });
    return array;
  };

  /**
   * Returns boolean
   * @param {Object} linkedList - LinkedList to compare against
   */
  linkedList.equal = function (linkedList) {
    if (!linkedList || !linkedList.hasOwnProperty('getType') || linkedList.getType() !== this.getType()) {
      return false;
    }
    if (this.size() !== linkedList.size()) {
      return false;
    }
    var isEqual = true;
    var isNotEqual = true;
    this.iterate(function (data, position) {
      var status = eCompare(linkedList.nodeAtPosition(position).data, data);
      if (!status) {
        isNotEqual = status;
      } else {
        isEqual = status;
      }
    });
    return isNotEqual === false ? isNotEqual : isEqual;
  };
  

  return linkedList;
};

eGlobal.eLinkedList = eLinkedList;

/**
  * Creates an empty List.
  * @class A List is a data structure that declares the behavior of a collection 
  * that stores a sequence of elements.
  * The list class can be used on its own, but it is defined as abstract as possible
  * that any class extending it can set rules about operations that can be perfomed on the collection
  * @constructor
  */

var eList = function () {


  /**
    * Define all utility functions here...
    */
  var isObjectOf = function (object) {
    if (typeof object !== 'object') {
      return false;
    }
    if (!object.hasOwnProperty('getType')) {
      return false;
    }
    if (object.getType() !== 'eList') {
      return false;
    }
  };

  var isValidIndex = function (number) {
    if ((typeof number !== 'number') || (number % 1 !== 0) || (number < 0)) {
      return false;
    }
    return true;
  };


  // object containing all properties and functions of the list
  var list = {};

  /**
    * Function to get type of eStructure object
    */
  list.getType = function () {
    return 'eList';
  };

  /**
    * Private array property to hold all elements added to the list
    */
  var data = [];

  /**
    * Function to get size of eList
    */
  list.size = function () {
    return data.length;
  };

  /**
    * Adds an element to the list.
    * @param {Integer} index - Optional index to add the element. If no index is specified
    * the element is added to the end of the list.
    * @param {Object} item - Element to be added (must always be present).
    * @return {Integer} Non-negeative integer if the element was added or -1 if error occurs
    */
  list.add = function (index, item) {
    // if arguments.length === 0 || > 2, throw error
    if (arguments.length === 0 || arguments.length > 2) {
      return -1;
    }

    // if arguments.length === 1, treat as element to be inserted and insert as last element of list
    if (arguments.length === 1) {
      data.push(arguments[0]);
      return list.size();
    }

    // if arguments.length === 2, treat first as index and second as item
    if (arguments.length === 2) {
      // check if specified index is a number
      if (isValidIndex(index) === false) {
        return -1;
      }

      // all checks passed, insert into list
      if (data.length - 1 < index) {
        // push into array
        data.push(item);
        return list.size();
      } else if (index < data.length - 1) {
        // splice array and insert item
        data.splice(index, 0, item);
        return list.size();
      }
    }
    return -1;
  };

  /**
    * Adds another eList to the list.
    * @param {Integer} index - Optional index to add the eList. If no index is specified
    * the eList is added to the end of the list.
    * @param {Object} eList - List to be added (must always be present).
    * @return {Integer} Non-negeative integer if the eList was added or -1 if error occurs
    */
  list.addAll = function (index, eList) {
    // if arguments.length === 0 || > 2, throw error
    if (arguments.length === 0 || arguments.length > 2) {
      return -1;
    }

    // if arguments.length === 1, treat as eList to be inflated and insert as last element of list
    if (arguments.length === 1) {
      // check if argument is an eList
      if (isObjectOf(arguments[0]) === false) {
        return null;
      }

      data = data.concat(arguments[0].toArray());
      return list.size();
    }

    // if arguments.length === 2, treat first as index and second as item
    if (arguments.length === 2) {
      // check if specified index is a number
      if (isValidIndex(index) === false) {
        return -1;
      }

      // check if argument is an eList
      if (isObjectOf(eList) === false) {
        return null;
      }

      // all checks passed, insert into list
      if (data.length - 1 < index) {
        // append new eList to current
        data = data.concat(eList.toArray());
        return list.size();
      } else if (index < data.length - 1) {
        // go through array and splice at incrementing index
        eList.getIterator().iterate(function (item, currentPosition) {
          data.splice(index, 0, item);
          index++;
        });
        return list.size();
      }
    }
    return -1;
  };

  /**
    * Replace the element in specified index with povided element
    * @param {Integer} index - index to of element to be replaced
    * @param {Object} item - new element to be placed in specified index
    * @return {boolean} true if element is replaced successfully, false if error occurs
    */
  list.set = function (index, item) {
    // if arguments.length === 0 || > 2, throw error
    if (arguments.length < 2 || arguments.length > 2 || isValidIndex(index) === false || index > list.size() - 1) {
      return -1;
    }

    // perform replacement
    data[index] = item;
    return data[index];
  };

  /**
    * Retrieve an element to the list.
    * @param {Integer} index - index of element to be retrieved
    * @return {Object} Object at index if found, -1 if error occur
    */
  list.get = function (index) {
    // validate argument provided
    if (index === undefined || index < 0 || list.size() === 0 || arguments.length > 1 || index >= list.size()) {
      return -1;
    }

    if (isValidIndex(index) === false) {
      return -1;
    }

    return data[index];
  };

  /**
    * Delete element in specified index
    * @return {Object} Array containing removed element
    */
  list.remove = function (index) {
    // validate argument provided
    if (index === undefined || index < 0 || list.size() === 0 || arguments.length > 1 || index >= list.size()) {
      return -1;
    }

    if (isValidIndex(index) === false) {
      return -1;
    }

    return data.splice(index, 1);
  };

  /**
    * @return {Array} Array containing all eList elements or empty array if eList is empty
    */
  list.toArray = function () {
    return data;
  };

  /**
    * @return {String} String containing all eList elements or empty string if eList is empty
    */
  list.toString = function () {
    return data.toString();
  };

  /**
    * ForEach function to loop through eList elements
    * @param {Function} callBack - callBack function to be provided on each element
    */
  list.forEach = function (callBack) {
    list.getIterator().iterate(callBack);
  };

  /**
    * Private iterator property to be used to loop through list elements
    */
  var iterator = {
    currentPosition: 0,
    next: function () {
      var item = list.get(list.getIterator().currentPosition);
      this.currentPosition += 1;
      return item;
    },
    hasNext: function () {
      return this.currentPosition < list.size();
    },
    iterate: function (callBack) {
      while (list.getIterator().hasNext()) {
        callBack(list.getIterator().next(), list.getIterator().currentPosition);
      }
      list.getIterator().reset();
    },
    reset: function () {
      list.getIterator().currentPosition = 0;
    }
  };

  /**
    * Get iterator object
    * @return {Object} Iterator containing useful functions
    * to be used to easily loop through all list elements
    */
  list.getIterator = function () {
    return iterator;
  };

  /**
   * Returns boolean
   * @param {Object} list - LinkedList to compare against
   * @param {Function} compareFunction - Function to use as to compare two objects
   */
  list.equal = function (list, compareFunction) {
    if (!list || !list.hasOwnProperty('getType') || list.getType() !== 'eList') {
      return false;
    }
    if (this.size() !== list.size()) {
      return false;
    }

    var callBack = compareFunction || eCompare;
    var isEqual = true;
    var isNotEqual = true;
    this.forEach(function (data, position) {
      var status = callBack(list.get(position - 1), data);
      if (!status) {
        isNotEqual = status;
      } else {
        isEqual = status;
      }
    });
    return !isNotEqual ? isNotEqual : isEqual;
  };

  return list;

};

eGlobal.eList = eList;

/**
  * Creates an empty Map.
  * @class A map is a data structure that maps keys to values
  * They are also known as key-value pair in which a value is set
  * and retrieved with a key
  * @constructor
  */

var eMap = function () {

  // utility functions
  var sanitizeArguments = function (params) {
    // check for argument length
    if (params.length < 2 || params.length > 2) {
      return false;
    }
    // check for type of first argument
    return typeof params[0] === 'string';

  };

  var validateKeysToValues = function () {
    return keys.length === values.length;
  };


  // Private arrays to hold keys and values
  var keys = [];
  var values = [];

  // object containing all properties and functions of the map
  var map = {};

  /**
    * Function to get type of eStructure object
    */
  map.getType = function () {
    return 'eMap';
  };

  /**
    * Function to get size of eMap
    * @return {Integer} Non-negeative integer if the element was added or -1 if error occurs
    */
  map.size = function () {
    if (validateKeysToValues()) {
      return values.length;
    }
    return -1;
  };

  /**
    * Function to check if map is empty or not
    * @return {Boolean/Integer} true if map is empty, false if otherwise, -1 if error occurs
    */
  map.isEmpty = function () {
    if (validateKeysToValues()) {
      return values.length === 0;
    }
    return -1;
  };

  /**
    * Function clear map
    * @return {Integer} 0 if map successfully cleared
    */
  map.clear = function () {
    keys = [];
    values = [];
    return map.size();
  };

  /**
    * Function to check if map contains key
    * @param {String} key - Key to check
    * @return {Boolean/Integer} true is key is in map, false if otherwise or -1 if error occurs
    */
  map.containsKey = function (key) {
    if (!key) {
      throw new eException(false, 'No argument provided. Key must be provided', 0);
    }

    if (keys.indexOf(key.toLowerCase()) !== -1) {
      return true;
    }
    return false;
  };

  /**
    * Adds a key-value pair to map (converts key to lowercase).
    * @param {String} key - Key to be used to store and retrieve value
    * @param {Object} value - Value to be stored with key
    * @return {Integer} Non-negeative integer if the element was added or -1 if error occurs
    */
  map.put = function (key, value) {
    // validate
    if (!sanitizeArguments(arguments) || map.containsKey(key) || !validateKeysToValues()) {
      return -1;
    }

    // add key and value to map
    keys.push(key.toLowerCase());
    values.push(value);

    return map.size();
  };

  /**
    * Sets value associated with key (converts key to lowercase).
    * @param {String} key - Key to be used to retrieve value
    * @param {Object} value - value to be used as replacement
    * @return {Object/undefined} element or undefined if key is not in map
    */
  map.set = function (key, value) {
    if (!key || !map.containsKey(key) || !value) {
      return -1;
    }
    // set value
    values[keys.indexOf(key.toLowerCase())] = value;
    return map.get(key);
  };

  /**
    * Gets value associated with key (converts key to lowercase).
    * @param {String} key - Key to be used to retrieve value
    * @return {Object/undefined} element or undefined if key is not in map
    */
  map.get = function (key) {
    if (!key || !map.containsKey(key)) {
      return undefined;
    }
    // fetch value
    return values[keys.indexOf(key.toLowerCase())];
  };

  /**
    * Gets all keys in eMap as an array of strings
    * @return {Object} array of all keys
    */
  map.getKeySet = function() {
    return keys;
  };

  /**
    * Delete key-value pair from eMap (converts key to lowercase).
    * @param {String} key - Key associated with value to be deleted
    * @return {Integer/undefined} new size of eMap or undefined if key is not in map
    */
  map.remove = function(key) {
    if (!key || !map.containsKey(key)) {
      return undefined;
    }
    var index = keys.indexOf(key);
    keys.splice(index, 1);
    values.splice(index, 1);
    return map.size();
  };

  /**
    * Returns eList equivallent of eMap
    * @return {Object/undefined} eList
    */
  map.values = function () {
    var list = new eList();
    map.getIterator().iterate(function (key, value) {
      list.add(value);
    });
    return list;
  };

  /**
    * Private iterator property to be used to loop through map elements
    */
  var iterator = {
    currentPosition: 0,
    next: function () {
      var key = keys[map.getIterator().currentPosition];
      var value = values[map.getIterator().currentPosition];
      map.getIterator().currentPosition += 1;
      return [key, value];
    },
    hasNext: function () {
      return map.getIterator().currentPosition < map.size();
    },
    iterate: function (callBack) {
      while (map.getIterator().hasNext()) {
        var keyValue = map.getIterator().next();
        callBack(keyValue[0], keyValue[1]);
      }
      map.getIterator().reset();
    },
    reset: function () {
      map.getIterator().currentPosition = 0;
    }
  };

  /**
    * Get iterator object
    * @return {Object} Iterator containing useful functions
    * to be used to easily loop through all map elements and 
    */
  map.getIterator = function () {
    return iterator;
  };

  return map;

};

eGlobal.eMap = eMap;

/**
  * Creates an empty Queue.
  * @class A Priority Queue is a data structure that declares the behavior of a collection 
  * that stores a sequence of elements according to the First In First Out rule
  * while keeping the elements in the sequence sorted according to a specified condition
  * The queue class can be used on its own, but it is defined as abstract as possible
  * that any class extending it can set rules about operations that can be perfomed on the collection
  * @constructor
  */

var ePriorityQueue = function (compareFunction) {
  
  // object containing all properties and functions of the queue
  var queue = {};
  
  /**
    * Function to get type of eStructure object
    */
  queue.getType = function () {
    return 'ePriorityQueue';
  };

  /**
    * Private array property to hold all elements added to the queue
    */
  var data = [];
  
  /**
    * Function to get size of ePriorityQueue
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
    
    if (compareFunction && typeof compareFunction === 'function') {
      data.sort(compareFunction);
    } else {
      data.sort();
    }
    
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

eGlobal.ePriorityQueue = ePriorityQueue;

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

/**
 * Creates an empty Set.
 * @class A set is a data structure with non-duplicating member values
 * @constructor
 */


var eSet = function(array) {

  var set = {};
  var values = [];


  /**
   * Function to get type of eStructure object
   * @return {String}
   */
  set.getType = function () {
    return 'eSet';
  };


  /**
   * Function to get size of eSet
   * @return {Integer} Number integer if the element was added or -1 if error occurs
   */
  set.size = function () {
    return values.length;
  };


  /**
   * Function to add single value to set
   * @param {Object} value to add to eSet
   * @return {Boolean} true if value is added successfully, false if error occurs
   */
  set.add = function (value) {
    if (value && !set.exists(value)) {
      values.push(value);
      return true;
    }
    return false;
  };


  /**
   * Get element from specified index
   * @param {Number} index - index i  which element is to be retrieved
   * @return {Object} Element from index
   */
  set.get = function (index) {

    if (!index || index > values.length - 1) {
      return undefined;
    }

    return values[index];
  };


  /**
   * Function to add all array elements into eSet (repeating array elements will be ignored)
   * @param {Array} array to join to eSet
   * @return {Boolean} true if array is added successfully, false if error occurs
   */
  set.addAll = function (array) {
    if (array && array instanceof Array) {

      for (var i = 0; i < array.length; i++) {
        set.add(array[i]);
      }
    }
    return false;
  };


  /**
   * Function to check if value is present in set
   * @param {Object} value to check if in set or not
   * @return {Boolean} true if present, false if not present
   */
  set.exists = function (value) {
    if (!value) {
      return false;
    }

    for (var i = 0; i < values.length; i++) {
      if (eCompare(values[i], value)) {
        return true;
      }
    }
    return false;
  };


  /**
   * Function to remove the last added element from set
   * @return {Object} Last element, undefined if set is empty
   */
  set.pop = function () {
    if (set.length === 0) {
      return undefined;
    }
    var last = values.splice(values.length - 1, 1);
    return last[0];
  };


  /**
   * Function to remove the first element from set
   * @return {Object} First element, undefined if set is empty
   */
  set.shift = function () {
    if (set.length === 0) {
      return undefined;
    }
    var last = values.splice(0, 1);
    return last[0];
  };


  /**
   * Join all unique elements in two sets or a set and collection
   * @param {Object} set or collection to be unified with calling set
   * @return {Object} new set from the union
   */
  set.union = function (set) {
    if (set && (set instanceof Array || set.getType() === this.getType())) {
      var newSet;
      if (set instanceof Array) {
        newSet = new eSet(set);
        newSet.addAll(set);
        return newSet;
      } else {
        newSet = new eSet(this.toArray());
        newSet.addAll(set.toArray());
        return newSet;
      }
    } else {
      return -1
    }
  };


  /**
   * Get intersection of set (returns all similar elements in set)
   * @param {Object} set or collection to be intersected with calling set
   * @return {Object} new set from the intersection
   */
  set.intersection = function (set) {
    var self = this;
    if (set && (set instanceof Array || set.getType() === this.getType())) {
      var newSet;
      if (set instanceof Array) {
        newSet = new eSet();
        eForEach(set, function (element) {
          if (self.exists(element)) {
            newSet.add(element);
          }
        });
        return newSet;
      } else {
        newSet = new eSet();
        eForEach(set.toArray(), function (element) {
          if (self.exists(element)) {
            newSet.add(element);
          }
        });
        return newSet;
      }
    } else {
      return -1
    }
  };


  /**
   * Get difference of set - should return the set of values that are in this set, excluding the values that are also in the other set
   * @param {Object} set or collection to be differentiated with calling set
   * @return {Object} new set from the difference operation
   */
  set.difference = function (set) {
    var self = this;
    if (set && (set instanceof Array || set.getType() === this.getType())) {
      var newSet;
      var paramSet;
      if (set instanceof Array) {
        newSet = new eSet();
        paramSet = new eSet(set);
        eForEach(self.toArray(), function (element) {
          if (!paramSet.exists(element)) {
            newSet.add(element);
          }
        });
        return newSet;
      } else {
        newSet = new eSet();
        eForEach(self.toArray(), function (element) {
          if (!set.exists(element)) {
            newSet.add(element);
          }
        });
        return newSet;
      }
    } else {
      return -1
    }
  };


  /**
   * Remove element from specified index
   * @param {Number} index - index in which element is to be removed from
   * @return {Object} Element popped out of set
   */
  set.removeFromIndex = function (index) {

    if (!index || index > values.length - 1) {
      return undefined;
    }

    var removed = values.splice(index, 1);
    return removed[0];
  };


  /**
   * Remove element from set if exists
   * @param {Object} element - index in which element is to be removed from
   * @return {Boolean} true if removal is successful, false if otherwise
   */
  set.remove = function (element) {
    if (!element) {
      return false;
    }
    set.forEach(function (currentElement, index) {
      if (eCompare(element, currentElement)) {
        values.splice(index, 1);
        return true;
      }
    });
    return false;
  };


  /**
   * Remove element from set if exists, add if not
   * @param {Object} element - index in which element is to be removed from
   * @return {Boolean} true if removal is successful, false if otherwise
   */
  set.toggle = function (element) {
    if (!element) {
      return false;
    }
    if (this.exists(element)) {
      this.remove(element);
    } else {
      this.add(element);
    }
  };


  /**
   * Iterate over set elements
   * @param {Function} callBack - call back function to be invoked on each iteration
   */
  set.forEach = function (callBack) {
    if (typeof callBack !== 'function') {
      throw new TypeError(callBack + ' is not a function');
    } else {
      for (var x = 0; x < values.length; x++) {
        callBack(values[x], x, values);
      }
    }
  };


  /**
   * Check if set is composed of numbers only or not
   */
  set.isMaths = function () {
    var status = true;
    set.forEach(function (currentElement) {
      if (typeof currentElement !== 'number') {
        status = false;
      }
    });
    return status;
  };


  /**
   * Get biggest element in set (If it is a mathematical set)
   * @return {Object} Number
   */
  set.max = function () {
    if (this.isMaths()) {
      return Math.max.apply(null, this.toArray());
    }
    return undefined;
  };


  /**
   * Get smallest element in set (If it is a mathematical set)
   * @return {Object} Number
   */
  set.min = function () {
    if (this.isMaths()) {
      return Math.min.apply(null, this.toArray());
    }
    return undefined;
  };


  /**
   * Get mean of set (If it is a mathematical set)
   * @return {Object} Number
   */
  set.average = function () {
    if (this.isMaths()) {
      var sum = 0;
      var collection = [];
      this.forEach(function (element, index, wholeCollection) {
        sum += element;
        collection = wholeCollection;
      });
      return sum / collection.length;
    }
    return undefined;
  };


  /**
   * Reset set to clean state
   */
  set.clear = function () {
    values = [];
  };


  /**
   * Get array representation of set
   * @return {Object} Array
   */
  set.toArray = function () {
    return values;
  };


  // initializing logic
  if (array) {
    if (array instanceof Array) {
      set.addAll(array);
    }
  }


  return set;
};

eGlobal.eMap = eMap;

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




// function to check deep difference between two variables regardless of types
var diff = function (a, b, objectKey, reference) {

  var log = [];
  var logObject = {};

  if (typeof a !== typeof b) {
    log.push({
      event: 'different types'
    });
    return log;
  }

  if (typeof b === 'object' && Object.keys(b).length === 0) {
    log.push({
      event: 'deleted',
      referenceKey: '',
      referenceId: ''
    });
    return log;
  }

  if (typeof a !== 'object' && typeof b !== 'object') {
    if (a !== b) {
      log.push({
        event: 'changed'
      });
      return log;
    }
  } else {

    var object = {};
    // get keys for base object
    var keys = Object.keys(a);

    // loop through
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (b.hasOwnProperty(key)) {

        if (a[key] === b[key]) {

        } else {
          // check for array type
          if (a[key] instanceof Array || b[key] instanceof Array) {

            if (a[key].length > 0 && typeof a[key][0] !== 'object') {
              var aString = a[key].join(', ');
              var bString = b[key].join(', ');
              console.log(bString);
              if (aString !== bString) {
                log.push({
                  event: 'changed',
                  referenceKey: key,
                  referenceId: reference ? reference : '',
                  oldValue: aString,
                  newValue: bString
                });
              }
            } else {
              // check for removal and presence
              for (var x = 0; x < a[key].length; x++) {

                object = find(a[key][x], b[key]);

                if (object) {
                  log = log.concat(diff(a[key][x], object, key, a[key][x]._id));
                } else {
                  logObject = {
                    event: 'removed',
                    referenceKey: key + '.' + a[key][x]._id,
                    referenceId: a[key][x]._id
                  };
                  log.push(logObject);
                }

              }

              // check for addition
              for (var y = 0; y < b[key].length; y++) {

                object = find(b[key][y], a[key]);

                if (!object) {
                  log = log.concat(diff({}, b[key][y], key, b[key][y]._id));
                }


              }
            }

          } else if (typeof a[key] === 'object' || typeof b[key] === 'object') {
            // object check
            var newKey = '';
            if (objectKey) {
              newKey = objectKey + '.' + key;
            } else {
              newKey = key;
            }
            log = log.concat(diff(a[key], b[key], newKey, reference));
          } else {
            // primitive check
            if (objectKey) {
              logObject = {
                event: 'changed',
                referenceKey: objectKey + '.' + key,
                referenceId: reference ? reference : '',
                oldValue: (a[key]).toString(),
                newValue: (b[key]).toString()
              };
            } else {
              logObject = {
                event: 'changed',
                referenceKey: key,
                referenceId: reference ? reference : '',
                oldValue: (a[key]).toString(),
                newValue: (b[key]).toString()
              };
            }
            log.push(logObject);
          }
        }
      } else {
        // it has been removed then
        logObject = {
          event: 'removed',
          referenceKey: key
        };
        log.push(logObject);
      }
    }

    if (b) {
      keys = Object.keys(b);
      for (i = 0; i < keys.length; i++) {
        var bKey = keys[i];
        if (!a.hasOwnProperty(bKey)) {
          var bNewKey = '';
          if (objectKey) {
            bNewKey = objectKey + '.' + bKey;
          } else {
            bNewKey = bKey;
          }
          if (typeof b[bKey] === 'object') {
            if (b[bKey] instanceof Array) {
              if (b[bKey].length > 0 && b[bKey][0] !== 'object') {
                log.push({
                  event: 'set',
                  referenceKey: bNewKey,
                  referenceId: reference ? reference : '',
                  oldValue: '',
                  newValue: b[bKey].join(', ')
                });
              } else {
                _.each(b[bKey], function (object) {
                  log = log.concat(diff({}, object, bNewKey, reference));
                });
              }
            } else {
              log = log.concat(diff({}, b[bKey], bNewKey, reference));
            }
          } else {

            logObject = {
              event: 'set',
              referenceKey: bNewKey,
              referenceId: reference ? reference : '',
              oldValue: '',
              newValue: b[bKey] ? (b[bKey]).toString() : ''
            };
            log.push(logObject);

          }
        }
      }
    }
  }
  return log;
};


var find = function (object, array) {
  for (var i = 0; i < array.length; i++) {
    if (diff(object, array[i]).length === 0) {
      return array[i];
    }
    return null;
  }
};


/**
 * Creates an eException.
 * @class An exception (or exceptional event) is a problem that arises during the execution of a program.
 * When an Exception occurs the normal flow of the program is disrupted,
 * and the program/Application terminates abnormally, which is not recommended,
 * therefore these exceptions are to be handled.
 * @constructor
 */


var eException = function (status, reason, errorCode) {
  return {
    getType: function () {
      return 'eException';
    },
    status: status || null, // successful or failed
    reason: reason || null, // description of the error
    errorCode: errorCode || null // different code for different exceptions based on implementation
  };
};

var eCompare = function (firstData, secondData) {
  return diff(firstData, secondData).length === 0;
};

var eForEach = function (collection, callBack) {
  if (typeof callBack !== 'function') {
    throw new TypeError(callBack + ' is not a function');
  }
  if (typeof collection === 'object') {
    var keys = Object.keys(collection);
    for (var x = 0; x < keys.length; x++) {
      var key = keys[x];
      callBack(collection[key], x, collection);
    }
  }
};

