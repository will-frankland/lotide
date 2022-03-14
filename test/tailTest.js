
const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), 3);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5']), '5');
  });
});