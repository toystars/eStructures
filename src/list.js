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
  list.isList = function() {
    return true;
  };

  /**
    * Array property to hold all elements added to the list
    */
  list.data = [];

  /**
    * Adds an element to the list.
    * @param {Object} item Element to be added.
    * @param {Integer} index Optional index to add the element. If no index is specified
    * the element is added to the end of the list.
    * @return {boolean} True if the element was added or false if the index is invalid
    * or if the element is undefined.
    */
  list.add = function(item, index) {

  };

  return list;
};