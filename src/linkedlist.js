/**
  * Creates an empty LinkedList.
  * @class A Linkedlist is a data structure that declares the behavior of a collection 
  * that stores a sequence of elements with each element pointing to the next element,
  * while the last element points to null to signify the end of the link chai
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
    * Returns the element at the specified index of eLinkedList
    */
  linkedList.nodeAtIndex = function (index) {
    var node, i;
    if (typeof index !== 'number' || index < 0 || index >= length) {
      return undefined;
    }
    if (index === (length - 1)) {
      return linkedList.getLast();
    }
    node = linkedList.getFirst()
    for (i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
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
    * Adds an element to the linkedList.
    * @param {Object} item - Element to be added (must always be present).
    * @return {Integer} Non-negeative integer if the element was added or -1 if error occurs
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
    * @param {Integer} Non-negative integer - Index of element tobe replaced
    * @param {Object} Object - Replacement object
    * @return {Boolean} true if element replacement is successful, false if otherwise
    */
  linkedList.set = function (index, data) {
    if (arguments.length < 2 || typeof index !== 'number') {
      return false;
    }
    var node = linkedList.nodeAtIndex(index);
    node.data = data;
    return true;
  };

  /**
    * Adds an element as first element of the linkedList.
    * @param {Object} item - Element to be added (must always be present).
    * @return {Integer} Non-negeative integer if the element was added or -1 if error occurs
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
    * @param {Object} Function - CallBack function that takes the data and position at each level of 
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
    linkedList.iterate(function(data) {
      array.push(data);
    });
    return array;
  };
  

  return linkedList;
};

if (typeof module !== 'undefined' && module !== null && module.exports) {
  module.exports = eLinkedList;
}
