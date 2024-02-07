const { v4: uuidv4 } = require('uuid');

class WorkflowManager {
  constructor() {
    this.workflows = {};
  }

  createWorkflow(name) {
    const id = uuidv4();
    this.workflows[id] = { id, name, nodes: [] };
    console.log(`Workflow ${name} created with ID: ${id}`);
    return this.workflows[id];
  }

  // Implement updateWorkflow, deleteWorkflow, executeWorkflow similarly
}

module.exports = new WorkflowManager();
