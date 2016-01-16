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
