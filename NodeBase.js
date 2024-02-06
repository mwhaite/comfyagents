class NodeBase {
    constructor(id) {
        this.id = id;
    }

    execute() {
        throw new Error('execute must be implemented by subclasses');
    }
}

module.exports = NodeBase;
