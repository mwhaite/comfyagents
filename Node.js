class Node {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }

  execute() {
    throw new Error('Execute method must be implemented in derived classes');
  }
}

module.exports = Node;
