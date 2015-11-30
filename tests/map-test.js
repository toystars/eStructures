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