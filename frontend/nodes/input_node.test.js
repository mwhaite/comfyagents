const { InputNode } = require('./input_node');

describe('InputNode', () => {
  let inputNode;

  beforeEach(() => {
    inputNode = new InputNode();
  });

  it('should accept and store input values', () => {
    inputNode.setInput('testInput', 123);
    expect(inputNode.process()).toEqual(123);
  });

  it('should return undefined for unset inputs', () => {
    expect(inputNode.process()).toBeUndefined();
  });
});
