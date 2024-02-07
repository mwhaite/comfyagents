const { OutputNode } = require('./output_node');

describe('OutputNode', () => {
  let outputNode;

  beforeEach(() => {
    outputNode = new OutputNode();
  });

  it('should correctly output the received input', () => {
    outputNode.setInput('testOutput', 'outputValue');
    expect(outputNode.process()).toEqual('outputValue');
  });

  it('should handle multiple inputs and output the last set input', () => {
    outputNode.setInput('firstInput', 'first');
    outputNode.setInput('secondInput', 'second');
    expect(outputNode.process()).toEqual('second');
  });
});
