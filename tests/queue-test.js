
"use strict";

/**
  * Test cases for eQueue data structure
  */

describe("eQueue - isQueue query", function() {
  it("should return type of eQueue", function() {
    var queue = new eQueue();
    expect(queue.getType()).toBe('eQueue');
  });
});

describe("eQueue - add element to queue", function () {
  it("should return 1 when an element is added to an empty queue", function () {
    var queue = new eQueue();
    expect(queue.put(2)).toBe(1);
  });
});

describe("eQueue - get size of queue", function () {
  var queue = new eQueue();
  queue.put(2);
  queue.put(3);
  
  it("should return the number of elements in the queue", function () {
    expect(queue.size()).toBe(2);
  });
  
});

describe("eQueue - return the element at the head of the queue without removing it", function () {
  
  var queue = new eQueue();
  queue.put(2);
  queue.put(3);
  
  it("should return 2", function () {
    expect(queue.peek()).toBe(2);
  });
  
  it("should return 2", function () {
    expect(queue.size()).toBe(2);
  });
  
});

describe("eQueue - return the element at the head of the queue and remove it", function () {
  var queue = new eQueue();
  queue.put(2);
  queue.put(3);
  it("should return 2", function () {
    expect(queue.remove()).toBe(2);
  });
  it("should return 1", function () {
    expect(queue.size()).toBe(1);
  });
});

describe("eQueue - clear contents of queue", function () {
  var queue = new eQueue();
  queue.put(2);
  queue.put(3);
  queue.clear();
  
  it("queue size should return 0 after calling clear function", function () {
    expect(queue.size()).toBe(0);
  });
  
});

describe("eQueue - convert queue to array", function () {  
  it("should be an instance of Array", function () {
    var queue = new eQueue();
    expect(queue.toArray() instanceof Array).toBe(true);
  });
  
});

describe("eQueue - check iterator of queue", function () {
  var queue = new eQueue();
  var iterator = queue.getIterator();
  
  it("queue queue iterator.hasNext() should return false", function () {
    expect(iterator.hasNext()).toBe(false);
  });
  
});

describe("eQueue - check iterator of queue", function () {
  var queue = new eQueue();
  var iterator = queue.getIterator();
  queue.put(3);

  it("queue queue iterator.hasNext() should return true", function () {
    expect(iterator.hasNext()).toBe(true);
  });
  
});

describe("eQueue - check iterator of queue", function () {
  var queue = new eQueue();
  var iterator = queue.getIterator();
  queue.put(3);

  it("queue queue iterator.next() should return 3", function () {
    expect(iterator.next()).toBe(3);
  });
  
});


