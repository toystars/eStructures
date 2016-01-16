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

describe("eLinkedList - test nodeAtPosition method of linkedList", function() {
  it("should return element at specified position", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.nodeAtPosition('Babatunde')).toBe(undefined);
  });
});

describe("eLinkedList - test nodeAtPosition method of linkedList", function() {
  it("should return element at specified position", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.nodeAtPosition()).toBe(undefined);
  });
});

describe("eLinkedList - test nodeAtPosition method of linkedList", function() {
  it("should return element at specified position", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    var node = linkedList.nodeAtPosition(2);
    expect(node.data).toBe('linkedList');
  });
});

describe("eLinkedList - test clear method of linkedList", function() {
  it("should return null as first element in linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    linkedList.clear();
    expect(linkedList.getFirst()).toBe(null);
  });
});

describe("eLinkedList - test clear method of linkedList", function() {
  it("should return null as last element in linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    linkedList.clear();
    expect(linkedList.getLast()).toBe(null);
  });
});

describe("eLinkedList - test clear method of linkedList", function() {
  it("should return 0 as the size of linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    linkedList.clear();
    expect(linkedList.size()).toBe(0);
  });
});

describe("eLinkedList - test toArray method of linkedList", function() {
  it("should return array version of linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.toArray() instanceof Array).toBe(true);
  });
});

describe("eLinkedList - test toArray method of linkedList", function() {
  it("should return array version of linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.toArray().length).toBe(4);
  });
});

describe("eLinkedList - test set method of linkedList", function() {
  it("should return false due to parameter errors", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.set(2)).toBe(false);
  });
});

describe("eLinkedList - test set method of linkedList", function() {
  it("should return false due to parameter errors", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.set()).toBe(false);
  });
});

describe("eLinkedList - test set method of linkedList", function() {
  it("should return false due to parameter errors", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.set('name', 25)).toBe(false);
  });
});

describe("eLinkedList - test set method of linkedList", function() {
  it("should return true if data is successfully replaced", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.set(1, 25)).toBe(true);
  });
});

describe("eLinkedList - test set method of linkedList", function() {
  it("should replace element in specified position", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    linkedList.set(2, 100);
    expect(linkedList.nodeAtPosition(2).data).toBe(100);
  });
});

describe("eLinkedList - test removeFirst method of linkedList", function() {
  it("should return true if head is successfully removed", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.removeFirst()).toBe(true);
  });
});

describe("eLinkedList - test removeFirst method of linkedList", function() {
  it("should return new item shifted to head of linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    linkedList.removeFirst();
    expect(linkedList.getFirst().data).toBe('linkedList');
  });
});

describe("eLinkedList - test remove method of linkedList", function() {
  it("should return item removed from linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.remove(2).data).toBe('linkedList');
  });
});


describe("eLinkedList - test remove method of linkedList", function() {
  it("should return item removed from linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.remove(1).data).toBe('eStructures');
  });
});

describe("eLinkedList - test remove method of linkedList", function() {
  it("should return item removed from linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('eStructures');
    linkedList.add('linkedList');
    linkedList.add('JavaScript');
    linkedList.add(57);
    expect(linkedList.remove(4).data).toBe(57);
    expect(linkedList.size()).toBe(3);
  });
});

describe("eLinkedList - test remove method of linkedList", function() {
  it("should return item removed from linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('nodeJS');
    expect(linkedList.remove(1).data).toBe('nodeJS');
    expect(linkedList.size()).toBe(0);
  });
});

describe("eLinkedList - test isEmpty method of linkedList", function() {
  it("should return empty status of linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add('nodeJS');
    expect(linkedList.isEmpty()).toBeFalsy();
  });
});

describe("eLinkedList - test isEmpty method of linkedList", function() {
  it("should return empty status of linkedList", function() {
    var linkedList = new eLinkedList();
    expect(linkedList.isEmpty()).toBeTruthy();
  });
});

describe("eLinkedList - test equal method of linkedList", function() {
  it("should return equal status of linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add(5);
    linkedList.add(10);
    var otherLinkedList = new eLinkedList();
    otherLinkedList.add(5);
    otherLinkedList.add(10);
    expect(linkedList.equal(otherLinkedList)).toBeTruthy();
  });
});


describe("eLinkedList - test equal method of linkedList", function() {
  it("should return equal status of linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add(5);
    linkedList.add(10);
    var otherLinkedList = new eLinkedList();
    otherLinkedList.add(5);
    otherLinkedList.add("Equal Test");
    expect(linkedList.equal(otherLinkedList)).toBeFalsy();
  });
});

describe("eLinkedList - test equal method of linkedList using user defined comparator", function() {
  it("should return equal status of linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add({ name: 'c2g', status: true});
    linkedList.add({ name: 'andela', status: false });
    var otherLinkedList = new eLinkedList();
    otherLinkedList.add({ name: 'c2g', status: true});
    otherLinkedList.add({ name: 'andela', status: false });
    expect(linkedList.equal(otherLinkedList)).toBeTruthy();
  });
});

describe("eLinkedList - test equal method of linkedList using user defined comparator", function() {
  it("should return equal status of linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add({ name: 'c2g', status: true});
    linkedList.add({ name: 'andela', status: false });
    var otherLinkedList = new eLinkedList();
    otherLinkedList.add({ name: 'c2g', status: true});
    otherLinkedList.add({ name: 'andela', status: true });
    expect(linkedList.equal(otherLinkedList)).toBeFalsy();
  });
});

describe("eLinkedList - test equal method of linkedList", function() {
  it("should return equal status of linkedList", function() {
    var linkedList = new eLinkedList();
    linkedList.add(10);
    linkedList.add(20);
    var list = new eList();
    list.add(10);
    list.add(20);
    expect(linkedList.equal(list)).toBeFalsy();
  });
});


