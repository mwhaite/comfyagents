const Node = require('./Node');

class LogicNode extends Node {
    constructor(id) {
        super(id, 'LogicNode');
    }

    execute() {
        // Logic node execution logic
    }
}

module.exports = LogicNode;
