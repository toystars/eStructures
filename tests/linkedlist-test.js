"use strict";

/**
  * Test cases for eLinkedList data structure
  */

describe("eLinkedList - getType query", function() {
  it("should return type of eList", function() {
    var linkedList = new eLinkedList();
    expect(linkedList.getType()).toBe('eLinkedList');
  });
});

describe("eLinkedList - test add and size methods of linkedList", function() {
  it("should return size of linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    expect(linkedList.size()).toBe(3);
  });
});

describe("eLinkedList - test add and size methods of linkedList", function() {
  it("should return size of linkedList after successfully adding item", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    expect(linkedList.add({name: 'JavaScript'})).toBe(4);
  });
});

describe("eLinkedList - test add method of linkedList", function() {
  it("should return -1 if no parameter is passed into the add method", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    expect(linkedList.add()).toBe(-1);
  });
});

describe("eLinkedList - test getFirst method of linkedList", function() {
  it("should return first item added to linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.getFirst().data).toBe('eStructures');
  });
});

describe("eLinkedList - test getLast method of linkedList", function() {
  it("should return last item added to linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.getLast().data).toBe(57);
  });
});

describe("eLinkedList - test iterate method of linkedList", function() {
  it("should iterate through the linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    var array = [];
    linkedList.iterate(function(element) {
      array.push(element);
    });
    expect(array.length).toBe(4);
  });
});

describe("eLinkedList - test iterate method of linkedList", function() {
  it("should iterate through the linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    var array = [];
    linkedList.iterate(function(element) {
      array.push(element);
    });
    expect(array[2]).toBe('JavaScript');
  });
});

describe("eLinkedList - test insertAsFirst method of linkedList", function() {
  it("should return the new item as the first item added to linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    linkedList.insertAsFirst('Babatunde')
    expect(linkedList.getFirst().data).toBe('Babatunde');
  });
});

describe("eLinkedList - test insertAsFirst method of linkedList", function() {
  it("should return new size of linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.insertAsFirst('Babatunde')).toBe(5);
  });
});


