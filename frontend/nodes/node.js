// every node has an id, type, inputs, and outputs. The process method is called to execute the node's associated python file
class Node {
    constructor(id, type) {
        this.id = id;
        this.type = type;
        this.inputs = [];
        this.outputs = [];
    }

    // a node is processed by calling the associated python file 
    process() {
        throw new Error('Process method must be implemented by subclasses');
    }
}

module.exports = Node;
