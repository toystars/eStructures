"use strict";

/**
  * Test cases for ePriorityQueue data structure
  */

describe("ePriorityQueue - isQueue query", function () {
  it("should return type of ePriorityQueue", function () {
    var queue = new ePriorityQueue();
    expect(queue.getType()).toBe('ePriorityQueue');
  });
});

describe("ePriorityQueue - add element to queue", function () {
  it("should return 1 when an element is added to an empty queue", function () {
    var queue = new ePriorityQueue();
    expect(queue.put(2)).toBe(1);
  });
});

describe("ePriorityQueue - get size of queue", function () {

  var queue = new ePriorityQueue();
  queue.put(3);
  queue.put(2);

  it("should return the number of elements in the queue", function () {
    expect(queue.size()).toBe(2);
  });

});

describe("ePriorityQueue - return the element at the head of the queue without removing it", function () {

  var queue = new ePriorityQueue();
  queue.put(2);
  queue.put(3);
  queue.put(1);

  it("should return 2", function () {
    expect(queue.peek()).toBe(1);
  });

  it("should return 2", function () {
    expect(queue.size()).toBe(2);
  });

});

describe("ePriorityQueue - use custom compare function", function () {

  var queue = new ePriorityQueue(function (a, b) {

    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }

    return 0;
  });
  
  queue.put({name: 'John', age: 34});
  queue.put({name: "Jane", age: 22});
  queue.put({name: "Jake", age: 24});

  it("should return the object with name property equal to Jane", function () {
    expect(queue.peek().name).toBe("Jane");
    expect(queue.peek().age).toBe(22);
  });

  it("should return 2", function () {
    expect(queue.size()).toBe(2);
  });

});

describe("ePriorityQueue - return the element at the head of the queue and remove it", function () {
  var queue = new ePriorityQueue();
  queue.put(2);
  queue.put(3);
  queue.put(1);
  it("should return 2", function () {
    expect(queue.remove()).toBe(2);
  });
  it("should return 1", function () {
    expect(queue.size()).toBe(1);
  });
});

describe("ePriorityQueue - clear contents of queue", function () {
  var queue = new ePriorityQueue();
  queue.put(2);
  queue.put(3);
  queue.clear();

  it("queue size should return 0 after calling clear function", function () {
    expect(queue.size()).toBe(0);
  });

});

describe("ePriorityQueue - convert queue to array", function () {
  it("should be an instance of Array", function () {
    var queue = new ePriorityQueue();
    expect(queue.toArray() instanceof Array).toBe(true);
  });

});