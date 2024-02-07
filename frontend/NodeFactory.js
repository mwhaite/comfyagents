import Node from './Node.js';

// This factory class is used to create nodes of different types
// nodes types are defined in the ../nodes directory
export default class NodeFactory {
  static async createNode(type, id) {
    let NodeClass;
    try {
      NodeClass = await import(`../nodes/${type}Node.js`);
    } catch (error) {
      NodeClass = await import('../nodes/Node.js');
    }
    return new NodeClass.default(id, type);
  }
}
