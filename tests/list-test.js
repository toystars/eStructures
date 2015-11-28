
"use strict";

/**
  * Test cases for eList data structure
  */

describe("List - isList query", function() {
  it("should return true when called", function() {
    var list = new eList();
    expect(list.isList()).toBe(true);
  });
});

describe("List - add with no argument", function () {
  it("should return false when no argument is specified", function () {
    var list = new eList();
    expect(list.add()).toBe(false);
  });
});

describe("List - add without index", function () {
  it("should return true when element is inserted", function () {
    var list = new eList();
    expect(list.add(5)).toBe(true);
  });
});

describe("List - add with index and item", function() {
  var list = new eList();
  it ("should return false when non-number is used as index", function() {
    expect(list.add("name", 5)).toBe(false);
  });
  it ("should return false when non-integer is used as index", function() {
    expect(list.add(1.7384, 5)).toBe(false);
  });
  it ("should return false when negative integer is used as index", function() {
    expect(list.add(-1, 5)).toBe(false);
  });
  it("should return true when element is inserted", function() {
    expect(list.add(5, 5)).toBe(true);
  });
});