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
