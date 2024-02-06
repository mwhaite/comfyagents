class GUIManager {
    constructor(io, workflowManager) {
        this.io = io;
        this.workflowManager = workflowManager;

        this.setupListeners();
    }

    setupListeners() {
        this.io.on('connection', (socket) => {
            socket.on('createWorkflow', () => {
                const workflow = this.workflowManager.createWorkflow();
                socket.emit('workflowCreated', workflow);
            });

            // Additional listeners for other GUI interactions
        });
    }
}

module.exports = { GUIManager };
