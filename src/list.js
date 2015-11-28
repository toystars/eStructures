/**
  * Creates an empty List.
  * @class A List is a data structure that declares the behavior of a collection 
  * that stores a sequence of elements.
  * The list class can be used on its own, but it is defined as abstract as possible
  * that any class extending it can set rules about operations that can be perfomed on the collection
  * @constructor
  */

var eList = function() {

  /**
    * Define all utility functions here...
    */
  var isObjectOf = function(object) {
    if (typeof object !== 'object' || !object.hasOwnProperty('eList')) {
      return false;
    }
  };

  // object containing all properties and functions of the list
  var list = {};

  /**
    * Property to show that object is a list
    * To be used in inner functions
    */
  list.eList = true;

  /**
    * Function to get list status of object
    */
  list.isList = function() {
    return list.eList;
  };

  /**
    * Array property to hold all elements added to the list
    */
  list.data = [];

  /**
    * Count property to be used to get quick number of elements in the list
    */
  list.size = function() {
    return list.data.length;
  };

  /**
    * Adds an element to the list.
    * @param {Integer} index - Optional index to add the element. If no index is specified
    * the element is added to the end of the list.
    * @param {Object} item - Element to be added (must always be present).
    * @return {Integer} Non-negeative integer if the element was added or -1 if error occurs
    */
  list.add = function(index, item) {
    // if arguments.length === 0 || > 2, throw error
    if (arguments.length === 0 || arguments.length > 2) {
      return -1;
    }

    // if arguments.length === 1, treat as element to be inserted and insert as last element of list
    if (arguments.length === 1) {
      list.data.push(arguments[0]);
      return list.size();
    }

    // if arguments.length === 2, treat first as index and second as item
    if (arguments.length === 2) {
      // check if specified index is a number
      if ((typeof index !== 'number') || (index % 1 !== 0) || (index < 0)) {
        return -1;
      }

      // all checks passed, insert into list
      if (list.data.length - 1 < index) {
        // push into array
        list.data.push(item);
        return list.size();
      } else if (index < list.data.length - 1) {
        // splice array and insert item
        list.data.splice(index, 0, item);
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
  list.addAll = function(index, eList) {
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

      list.data = list.data.concat(arguments[0].toArray());
      return list.size();
    }

    // if arguments.length === 2, treat first as index and second as item
    if (arguments.length === 2) {
      // check if specified index is a number
      if ((typeof index !== 'number') || (index % 1 !== 0) || (index < 0)) {
        return -1;
      }

      // check if argument is an eList
      if (isObjectOf(eList) === false) {
        return null;
      }

      // all checks passed, insert into list
      if (list.data.length - 1 < index) {
        // append new eList to current
        list.data = list.data.concat(eList.toArray());
        return list.size();
      } else if (index < list.data.length - 1) {
        // go through array and splice at incrementing index
        var currentIndex = index;
        for (var x = 0; x < eList.size(); x++) {
          list.data.splice(currentIndex, 0, eList.get(x));
          currentIndex++
        }
        return list.size();
      }
    }
    return -1;
  };

  /**
    * Retrieve an element to the list.
    * @param {Integer} index - index of element to be retrieved
    * @return {Object} Object at index if found, -1 if error occur
    */
  list.get = function(index) {
    if (index === undefined || index < 0 || index >= list.size()) {
      return -1;
    }
    return list.data[index];
  };

  /**
    * @return {Array} Array containing all eList elements or empty array if eList is empty
    */
  list.toArray = function() {
    return list.data;
  };

  /**
    * @return {String} String containing all eList elements or empty string if eList is empty
    */
  list.toString = function() {
    return list.data.toString();
  };

  return list;
};
