"use strict";

/**
  * Test cases for eMap data structure
  */

describe("eMap - getType to return eMap", function() {
  it("should return type of eMap", function() {
    var map = new eMap();
    expect(map.getType()).toBe('eMap');
  });
});

describe("eMap - put with no argument", function () {
  it("should return -1 when no argument is specified", function () {
    var map = new eMap();
    expect(map.put()).toBe(-1);
  });
});

describe("eMap - put with 1 argument", function () {
  it("should return -1 when 1 argument is specified", function () {
    var map = new eMap();
    expect(map.put("key")).toBe(-1);
  });
});

describe("eMap - put with more than 2 arguments", function () {
  it("should return -1 when more than 2 arguments are specified", function () {
    var map = new eMap();
    expect(map.put("key", [1, 5, 6], 17)).toBe(-1);
  });
});

describe("eMap - put with non string key argument", function() {
  it("should return -1 when non-string is provided as key", function() {
    var map = new eMap();
    expect(map.put(45, 100)).toBe(-1);
  });
});

describe("eMap - put with correct arguments", function() {
  it("should return size of Map when correct arguments are supplied", function() {
    var map = new eMap();
    expect(map.put("age", 25)).toBe(1);
  });
});

describe("eMap - get size of map", function() {
  it("should return size of Map", function() {
    var map = new eMap();
    map.put("name", "Babatunde");
    map.put("age", 25);
    expect(map.size()).toBe(2);
  });
});

describe("eMap - check if map is empty", function() {
  it("should return empty status of map", function() {
    var map = new eMap();
    map.put("name", "Babatunde");
    map.put("age", 25);
    expect(map.isEmpty()).toBe(false);
  });
});

describe("eMap - check if map contains specified key", function() {
  it("should return containsKey status of map", function() {
    var map = new eMap();
    map.put("name", "Babatunde");
    map.put("age", 25);
    expect(map.containsKey("name")).toBe(true);
  });
});



