
"use strict";

/**
  * Test cases for eStack data structure
  */

describe("eStack - isstack query", function () {
  it("should return type of eStack", function () {
    var stack = new eStack();
    expect(stack.getType()).toBe('eStack');
  });
});

describe("eStack - add element to stack", function () {
  it("should return 1 when an element is added to an empty stack", function () {
    var stack = new eStack();
    expect(stack.put(2)).toBe(1);
  });
});

describe("eStack - get size of stack", function () {

  var stack = new eStack();
  stack.put(2);
  stack.put(3);

  it("should return the number of elements in the stack", function () {
    expect(stack.size()).toBe(2);
  });

});

describe("eStack - return the element at the head of the stack without removing it", function () {

  var stack = new eStack();
  stack.put(2);
  stack.put(3);

  it("should return 2", function () {
    expect(stack.peek()).toBe(3);
  });

  it("should return 2", function () {
    expect(stack.size()).toBe(2);
  });

});

describe("eStack - return the element at the head of the stack and remove it", function () {
  var stack = new eStack();
  stack.put(2);
  stack.put(3);
  it("should return 2", function () {
    expect(stack.remove()).toBe(3);
  });
  it("should return 1", function () {
    expect(stack.size()).toBe(1);
  });
});

describe("eStack - clear contents of stack", function () {
  var stack = new eStack();
  stack.put(2);
  stack.put(3);
  stack.clear();

  it("stack size should return 0 after calling clear function", function () {
    expect(stack.size()).toBe(0);
  });

});

describe("eStack - convert stack to array", function () {
  it("should be an instance of Array", function () {
    var stack = new eStack();
    expect(stack.toArray() instanceof Array).toBe(true);
  });

});

describe("eStack - check if stack is empty", function () {
  it("should return empty status of stack", function () {
    var stack = new eStack();
    expect(stack.isEmpty()).toBe(true);
  });
});

describe("eStack - check if stack is empty", function () {
  it("should return empty status of stack", function () {
    var stack = new eStack();
    stack.put(10);
    expect(stack.isEmpty()).toBe(false);
  });
});
