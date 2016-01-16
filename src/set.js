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
