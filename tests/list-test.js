
"use strict";

describe("List - add without index", function () {
  it("should return true when element is inserted", function () {
    var list = new eList();
    expect(list.add(5)).toBe(true);
  });
});