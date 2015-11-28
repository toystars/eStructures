/**
  * Creates an empty List.
  * @class A List is a data structure that declares the behavior of a collection 
  * that stores a sequence of elements.
  * The list class can be used on its own, but it is defined as abstract as possible
  * that any class extending it can set rules about operations that can be perfomed on the collection
  * @constructor
  */

var eList = function() {

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
  list.count = 0;

  /**
    * Adds an element to the list.
    * @param {Integer} index - Optional index to add the element. If no index is specified
    * the element is added to the end of the list.
    * @param {Object} item - Element to be added (must always be present).
    * @return {boolean} True if the element was added or false if error occurs
    */
  list.add = function(index, item) {
    // if arguments.length === 0 || > 2, throw error
    if (arguments.length === 0 || arguments.length > 2) {
      return false;
    }

    // if arguments.length === 1, treat as element to be inserted and insert as last element of list
    if (arguments.length === 1) {
      list.data.push(arguments[0]);
      return true;
    }

    // if arguments.length === 2, treat first as index and second as item
    if (arguments.length === 2) {
      // check if specified index is a number
      if ((typeof index !== 'number') || (index % 1 !== 0) || (index < 0)) {
        return false;
      }

      // all checks passed, insert into list
      if (list.data.length - 1 < index) {
        // push into array
        list.data.push(item);
        return true;
      } else if (index < list.data.length - 1) {
        // spliice array and insert item
        list.data.splice(index, 0, item);
        return true;
      }
    }
    return false;
  };

  return list;
};