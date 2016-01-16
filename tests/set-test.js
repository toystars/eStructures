/**
 * Test cases for eSet data structure
 */


describe("eSet - getType query", function() {
  it("should return type of eSet", function() {
    var set = new eSet();
    expect(set.getType()).toBe('eSet');
  });
});

describe("eSet - size of set", function() {
  it("should return size of eSet", function() {
    var set = new eSet();
    expect(set.size()).toBe(0);
  });
});

describe("eSet - size and pre-data constructor", function() {
  it("should return type of eSet", function() {
    var set = new eSet([5, 3, 5, 3, 1, 'name']);
    expect(set.size()).toBe(4);
  });
});

describe("eSet - test add method of set", function() {
  it("should return true if value is added, false if error occurs", function() {
    var set = new eSet();
    expect(set.add(70)).toBeTruthy();
  });
});

describe("eSet - test add method of set", function() {
  it("should return true if value is added, false if error occurs", function() {
    var set = new eSet();
    set.add(100);
    set.add(70);
    expect(set.add(70)).toBeFalsy();
  });
});

describe("eSet - test addAll method of set", function() {
  it("should return correct size after filtering repeating values", function() {
    var set = new eSet();
    set.addAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(set.size()).toBe(9);
  });
});

describe("eSet - test if element is present in set", function() {
  it("should return boolean is element is present in set", function() {
    var set = new eSet();
    set.add(6);
    set.add('name');
    set.add({name: 'set', type: 'eSet'});
    expect(set.exists({name: 'set', type: 'eSet'})).toBeTruthy();
  });
});

describe("eSet - test if element is present in set", function() {
  it("should return boolean is element is present in set", function() {
    var set = new eSet();
    set.add(6);
    set.add('name');
    set.add({name: 'set', type: 'eSet'});
    expect(set.exists({type: 'eSet', name: 'set'})).toBeTruthy();
  });
});

describe("eSet - test if element is present in set", function() {
  it("should return boolean is element is present in set", function() {
    var set = new eSet();
    set.add(6);
    set.add('name');
    set.add({name: 'set', type: 'eSet'});
    expect(set.exists({type: 'eSet', value: undefined})).toBeFalsy();
  });
});

describe("eSet - test pop method of set", function() {
  it("should return last element and remove it", function() {
    var set = new eSet([5, 3, 5, 3, 1, 'name']);
    expect(set.pop()).toBe('name');
  });
});

describe("eSet - test pop method of set", function() {
  it("should return last element and remove it", function() {
    var set = new eSet([5, 4, 3, 2, 1, 'name']);
    set.pop();
    expect(set.size()).toBe(5);
  });
});

describe("eSet - test pop method of set", function() {
  it("should return last element and remove it", function() {
    var set = new eSet();
    expect(set.pop()).toBeUndefined();
  });
});

describe("eSet - test shift method of set", function() {
  it("should return first element and remove it", function() {
    var set = new eSet([5, 3, 5, 3, 1, 'name']);
    expect(set.shift()).toBe(5);
  });
});

describe("eSet - test shift method of set", function() {
  it("should return first element and remove it", function() {
    var set = new eSet([5, 4, 3, 2, 1, 'name']);
    set.shift();
    expect(set.size()).toBe(5);
  });
});

describe("eSet - test shift method of set", function() {
  it("should return first element and remove it", function() {
    var set = new eSet();
    expect(set.shift()).toBeUndefined();
  });
});

describe("eSet - test toArray method of set", function() {
  it("should return array representation of set", function() {
    var set = new eSet([1, 2, 3, 4, 5]);
    expect(set.toArray() instanceof Array).toBeTruthy();
  });
});

describe("eSet - test toArray method of set", function() {
  it("should return array representation of set", function() {
    var set = new eSet([1, 2, 3, 4, 5]);
    expect(set.toArray().length).toBe(5);
  });
});


describe("eSet - test toArray method of set", function() {
  it("should return array representation of set", function() {
    var set = new eSet([1, 2, 3, 4, 5]);
    expect(set.toArray()[0]).toBe(1);
  });
});

describe("eSet - test toArray method of set", function() {
  it("should return array representation of set", function() {
    var array = [1, 2, 3, 4, 5];
    var set = new eSet(array);
    expect(set.toArray().toString(', ')).toBe(array.toString(', '));
  });
});

describe("eSet - test union method of set", function() {
  it("should return union of the set and collection parameter", function() {
    var array = [1, 2, 3, 4, 5];
    var array2 = [1, 2, 3, 4, 5, 6];
    var set = new eSet(array);
    var newSet = set.union(array2);
    expect(newSet.size()).toBe(6);
  });
});

describe("eSet - test union method of set", function() {
  it("should return union of the set and collection parameter", function() {
    var array = [1, 2, 3, 4, 5];
    var array2 = [6, 7, 8, 9];
    var set = new eSet(array);
    var set2 = new eSet(array2);
    var newSet = set.union(set2);
    expect(newSet.size()).toBe(9);
  });
});

describe("eSet - test union method of set", function () {
  it("should return union of the set and collection parameter", function () {
    var array = [1, 2, 3, 4, 5];
    var array2 = [6, 7, 8, 9];
    var set = new eSet(array);
    var set2 = new eSet(array2);
    var newSet = set.union(set2);
    expect(newSet.toArray().toString()).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9].toString());
  });
});

describe("eSet - test intersection method of set", function () {
  it("should return intersection of the set or collection parameter", function () {
    var array = [1, 2, 3];
    var array2 = [1, 2, 5];
    var set = new eSet(array);
    var set2 = new eSet(array2);
    var newSet = set.intersection(set2);
    expect(newSet.size()).toBe(2);
  });
});

describe("eSet - test intersection method of set", function () {
  it("should return intersection of the set or collection parameter", function () {
    var array = [1, 2, 3];
    var array2 = [1, 2, 5];
    var set = new eSet(array);
    var newSet = set.intersection(array2);
    expect(newSet.size()).toBe(2);
  });
});

describe("eSet - test intersection method of set", function () {
  it("should return intersection of the set or collection parameter", function () {
    var set = new eSet([1, 2, 3]);
    var newSet = set.intersection(new eSet([1, 2, 5]));
    expect(newSet.toArray().toString()).toBe([1, 2].toString());
  });
});

describe("eSet - test intersection method of set", function () {
  it("should return intersection of the set or collection parameter", function () {
    var set = new eSet([1, 2, 3]);
    var newSet = set.intersection([1, 2, 5]);
    expect(newSet.toArray().toString()).toBe([1, 2].toString());
  });
});

describe("eSet - test difference method of set", function () {
  it("should return the set of values that are in this set, excluding the values that are also in the other set", function () {
    var set = new eSet([2, 8, 5]);
    var differenceSet = set.difference([3, 8, 5]);
    expect(differenceSet.toArray().toString()).toBe([2].toString());
  });
});

describe("eSet - test difference method of set", function () {
  it("should return the set of values that are in this set, excluding the values that are also in the other set", function () {
    var set = new eSet([2, 8, 5]);
    var differenceSet = set.difference(new eSet([3, 8, 5]));
    expect(differenceSet.toArray().toString()).toBe([2].toString());
  });
});

describe("eSet - test isMaths method of set", function () {
  it("should return status of set if it is composed of only numbers or not", function () {
    var set = new eSet([2, 8, 5]);
    expect(set.isMaths()).toBeTruthy();
  });
});

describe("eSet - test isMaths method of set", function () {
  it("should return status of set if it is composed of only numbers or not", function () {
    var set = new eSet([2, 8, 5, 'name', {age: 55}]);
    expect(set.isMaths()).toBeFalsy();
  });
});

describe("eSet - test max method of set", function () {
  it("should return the largest value in set (only meant for mathematical sets)", function () {
    var set = new eSet([2, 8, 5]);
    expect(set.max()).toBe(8);
  });
});

describe("eSet - test min method of set", function () {
  it("should return the smallest value in set (only meant for mathematical sets)", function () {
    var set = new eSet([2, 8, 5]);
    expect(set.min()).toBe(2);
  });
});

describe("eSet - test average method of set", function () {
  it("should return the mean of set (only meant for mathematical sets)", function () {
    var set = new eSet([2, 8, 5]);
    expect(set.average()).toBe(5);
  });
});

describe("eSet - test forEach method of set", function () {
  it("should take a callBack with set element, current index and set.toArray() value", function () {
    var set = new eSet([2, 8, 5, 3]);
    var sum = 0;
    set.forEach(function (element) {
      sum += element;
    });
    expect(sum).toBe(18);
  });
});

describe("eSet - test clear method of set", function () {
  it("should remove all elements in set and reset set to initial state", function () {
    var set = new eSet([2, 8, 5, 3]);
    set.clear();
    expect(set.size()).toBe(0);
  });
});

describe("eSet - test toggle method of set", function () {
  it("should remove element if it exists in set, adds it if not", function () {
    var set = new eSet([2, 8, 5, 3]);
    set.toggle(8);
    expect(set.size()).toBe(3);
  });
});

describe("eSet - test toggle method of set", function () {
  it("should remove element if it exists in set, adds it if not", function () {
    var set = new eSet([2, 8, 5, 3]);
    set.toggle(7);
    expect(set.size()).toBe(5);
  });
});

describe("eSet - test remove method of set", function () {
  it("should remove element if it exists in set, returns true if successful, false if not", function () {
    var set = new eSet([2, 8, 5, 3]);
    set.remove(8);
    expect(set.size()).toBe(3);
  });
});

describe("eSet - test remove method of set", function () {
  it("should remove element if it exists in set, returns true if successful, false if not", function () {
    var set = new eSet([2, 8, 5, 3]);
    expect(set.remove({ name: 'eSet' })).toBeFalsy();
  });
});

describe("eSet - test get method of set", function () {
  it("should return element in specified index of set, return undefined if error occurs", function () {
    var set = new eSet([2, 8, 5, 3]);
    expect(set.get(2)).toBe(5);
  });
});

describe("eSet - test get method of set", function () {
  it("should return element in specified index of set, return undefined if error occurs", function () {
    var set = new eSet([2, 8, 5, 3]);
    expect(set.get(7)).toBeUndefined();
  });
});

describe("eSet - test removeFromIndex method of set", function () {
  it("should remove element in specified index and returns it, undefined if error occurs", function () {
    var set = new eSet([2, 8, 5, 3]);
    expect(set.removeFromIndex(1)).toBe(8);
  });
});

describe("eSet - test removeFromIndex method of set", function () {
  it("should remove element in specified index and returns it, undefined if error occurs", function () {
    var set = new eSet([2, 8, 5, 3]);
    set.removeFromIndex(1);
    expect(set.size()).toBe(3);
  });
});

describe("eSet - test removeFromIndex method of set", function () {
  it("should remove element in specified index and returns it, undefined if error occurs", function () {
    var set = new eSet([2, 8, 5, 3]);
    expect(set.removeFromIndex(9)).toBeUndefined();
  });
});

