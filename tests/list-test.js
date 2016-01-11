
"use strict";

/**
  * Test cases for eList data structure
  */

describe("eList - isList query", function() {
  it("should return type of eList", function() {
    var list = new eList();
    expect(list.getType()).toBe('eList');
  });
});

describe("eList - add with no argument", function () {
  it("should return -1 when no argument is specified", function () {
    var list = new eList();
    expect(list.add()).toBe(-1);
  });
});

describe("eList - add without index", function () {
  var list = new eList();
  list.add(5);
  list.add(22);
  list.add("eList");
  it("should return the size of eList when element is inserted", function () {
    expect(list.add(true)).toBe(4);
  });
});

describe("eList - add with index and item", function() {
  var list = new eList();
  it ("should return -1 when non-number is used as index", function() {
    expect(list.add("name", 5)).toBe(-1);
  });
  it ("should return -1 when non-integer is used as index", function() {
    expect(list.add(1.7384, 5)).toBe(-1);
  });
  it ("should return -1 when negative integer is used as index", function() {
    expect(list.add(-1, 5)).toBe(-1);
  });
  it("should return eList size when element is inserted", function() {
    expect(list.add(5, 5)).toBe(1);
  });
});

describe("eList - get size of list", function () {
  it("should return the number of elements in list", function () {
    var list = new eList();
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.size()).toBe(3);
  });
});

describe("eList - get array representation of the list", function () {
  var list = new eList();
  list.add(5);
  list.add(22);
  list.add("eList");
  it("should return an array matching the eList", function () {
    expect(list.toArray().toString()).toBe([5, 22, "eList"].toString());
  });
});

describe("eList - get string representation of the list", function() {
  var list = new eList();
  list.add(5);
  list.add(22);
  list.add("eList");
  it("should return an array matching the eList", function () {
    expect(list.toString()).toBe("5,22,eList");
  });
});

describe("eList - get element at specified index", function() {
  var list = new eList();
  it("should return -1 when list contains no element", function() {
    expect(list.get(2)).toBe(-1);
  });
});

describe("eList - get element at specified index", function() {
  var list = new eList();
  list.add(5);
  list.add(22);
  list.add("eList");

  it("should return -1 when index is not provided", function() {
    expect(list.get()).toBe(-1);
  });

  it("should return element in specified index", function () {
    expect(list.get(2)).toBe("eList");
  });

  it("should return -1 when index is negative", function() {
    expect(list.get(-5)).toBe(-1);
  });

  it("should return -1 when index is greater than all available index", function() {
    expect(list.get(7)).toBe(-1);
  });
});

describe("eList - add another eList object to current eList", function () {
  var list = new eList();
  list.add(1);
  list.add(2);
  list.add(3);
  var secondList = new eList();
  secondList.add("eStructures");
  secondList.add("JavaScript");
  secondList.add({name: "eStructures"});

  it("should return null if non-eList object is provided", function() {
    expect(list.addAll([1, 2, 3, 4])).toBe(null);
  });    

  it("should return current size of eList after inflating with other eList argument", function () {
    expect(list.addAll(secondList)).toBe(6);
  });
});

describe("eList - add another eList object to current eList at specified index", function () {
  var list = new eList();
  list.add(1);
  list.add(2);
  list.add(3);
  var secondList = new eList();
  secondList.add("eStructures");
  secondList.add("JavaScript");

  it("should return null if non-eList object is provided", function() {
    expect(list.addAll(1, [1, 2, 3, 4])).toBe(null);
  });    

  it("should return current size of eList after inflating with other eList argument", function () {
    expect(list.addAll(1, secondList)).toBe(5);
  });
});

describe("eList - use forEach function to loop through the list (Automatic)", function() {
  var list = new eList();
  list.add(1);
  list.add(2);
  list.add(3);
  var array = [];

  list.forEach(function(element, index) {
    array.push(element);
  });

  it("should have toString equal to string representation of list", function() {
    expect(list.toString()).toBe(array.toString());
  });
});

describe("eList - use iterator object to loop through the list (Manual)", function() {
  var list = new eList();
  list.add(1);
  list.add(2);
  list.add(3);
  // get iterator from list
  var iterator = list.getIterator();

  it("should have iterator currentPosition to be 0", function() {
    expect(iterator.currentPosition).toBe(0);
  });

  it("should return true for iterator.hasNext()", function() {
    expect(iterator.hasNext()).toBe(true);
  });

  it("should have iterator.next() to equal first element in list", function() {
    expect(iterator.next()).toBe(1);
  });

  it("should have iterator currentPosition to be 1", function() {
    expect(iterator.currentPosition).toBe(1);
  });

  it("should return true for iterator.hasNext()", function() {
    expect(iterator.hasNext()).toBe(true);
  });

  it("should have iterator.next() to equal second element in list", function() {
    expect(iterator.next()).toBe(2);
  });

  it("should have iterator currentPosition to be 2", function() {
    expect(iterator.currentPosition).toBe(2);
  });

  it("should return true for iterator.hasNext()", function() {
    expect(iterator.hasNext()).toBe(true);
  });

  it("should have iterator.next() to equal third element in list", function() {
    expect(iterator.next()).toBe(3);
  });

  it("should have iterator currentPosition to be 3", function() {
    expect(iterator.currentPosition).toBe(3);
  });

  it("should return false for iterator.hasNext()", function() {
    expect(iterator.hasNext()).toBe(false);
  });
});

describe("eList - use iterator object to loop through the list (Automatic)", function() {
  var list = new eList();
  list.add(1);
  list.add(2);
  list.add(3);
  // get iterator from list
  var iterator = list.getIterator();
  var array = [];

  while (iterator.hasNext()) {
    array.push(iterator.next());
  };

  it("should have toString equal to string representation of list", function() {
    expect(list.toString()).toBe(array.toString());
  });
});

describe("eList - use iterate function of the iterator object to loop through the list (Automatic)", function() {
  var list = new eList();
  list.add(1);
  list.add(2);
  list.add(3);
  // get iterator from list
  var iterator = list.getIterator();
  var array = [];

  iterator.iterate(function(element, index) {
    array.push(element);
  });

  it("should have toString equal to string representation of list", function() {
    expect(list.toString()).toBe(array.toString());
  });
});

describe("eList - replace element in given index", function() {
  var list = new eList();
  list.add(1);
  list.add(2);
  list.add(3);

  it("should return -1 for empty parameters", function() {
    expect(list.set()).toBe(-1);
  });

  it("should return -1 for 1 parameter", function() {
    expect(list.set(4)).toBe(-1);
  });

  it("should return -1 for more than 2 parameters", function() {
    expect(list.set(3, 7, {name: "eList"})).toBe(-1);
  });

  it("should return -1 when non integer is specified as index", function() {
    expect(list.set("eList", 100)).toBe(-1);
  });

  it("should return -1 for index greater than maximum list index", function() {
    expect(list.set(4, 17)).toBe(-1);
  });

  it("should return set value for successful element replacement", function() {
    expect(list.set(1, 17)).toBe(17);
  });

});

describe("eList - remove element in given index", function() {
  var list = new eList();
  list.add(1);
  list.add(2);
  list.add(3);

  it("should return -1 for empty parameters", function() {
    expect(list.remove()).toBe(-1);
  });

  it("should return -1 for more than 1 parameters", function() {
    expect(list.remove(3, 7, {name: "eList"})).toBe(-1);
  });

  it("should return -1 when non integer is specified as index", function() {
    expect(list.remove("eList")).toBe(-1);
  });

  it("should return -1 for index greater than maximum list index", function() {
    expect(list.remove(4)).toBe(-1);
  });

  it("should return set value for successful element replacement", function() {
    expect(list.remove(1).toString()).toBe("2");
  });

});

describe("eList - test equal method of list", function() {
  it("should return equal status of list", function() {
    var list = new eList();
    list.add(5);
    list.add(10);
    var otherList = new eList();
    otherList.add(5);
    otherList.add(10);
    expect(list.equal(otherList)).toBeTruthy();
  });
});

describe("eList - test equal method of list", function() {
  it("should return equal status of list", function() {
    var list = new eList();
    list.add(53);
    list.add(10);
    var otherList = new eList();
    otherList.add(5);
    otherList.add(10);
    expect(list.equal(otherList)).toBeFalsy();
  });
});

describe("eList - test equal method of list using user defined comparator", function() {
  it("should return equal status of list", function() {
    var list = new eList();
    list.add(53);
    list.add(10);
    var otherList = new eList();
    otherList.add(5);
    otherList.add(10);
    expect(list.equal(otherList, function (firstData, secondData) {
      return firstData === secondData;
    })).toBeFalsy();
  });
});

describe("eList - test equal method of list using user defined comparator", function() {
  it("should return equal status of list", function() {
    var list = new eList();
    list.add({ name: 'c2g', status: true});
    list.add({ name: 'andela', status: false });
    var otherList = new eList();
    otherList.add({ name: 'c2g', status: true});
    otherList.add({ name: 'andela', status: false });
    expect(list.equal(otherList, function (firstData, secondData) {
      return firstData.name === secondData.name && firstData.status === secondData.status;
    })).toBeTruthy();
  });
});
