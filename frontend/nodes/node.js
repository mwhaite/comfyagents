class Node {
    constructor(id, type) {
        this.id = id;
        this.type = type;
        this.inputs = [];
        this.outputs = [];
    }

    // Method to process the node's logic
    process() {
        throw new Error('Process method must be implemented by subclasses');
    }
}

module.exports = Node;
