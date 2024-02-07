import Node from './Node.js';

export default class NodeFactory {
  static createNode(type, id) {
    // Example logic for creating a node based on type
    // In a real scenario, this would dynamically import and instantiate node types
    return new Node(id, type);
  }
}
