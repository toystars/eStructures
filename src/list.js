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
