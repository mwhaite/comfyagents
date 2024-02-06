// Existing part: Logging that index.js is running
console.log('index.js is running');

// Enhanced initGUI function with GUI setup and initial node creation
function initGUI() {
    const appElement = document.getElementById('app');
    if (!appElement) {
        console.error('App element not found');
        return;
    }
    // Create a test element to visually confirm the GUI is working
    let testDiv = document.createElement('div');
    testDiv.textContent = 'If you see this, GUI elements are being added.';
    testDiv.style.backgroundColor = 'limegreen'; // Making it visually stand out
    testDiv.style.color = 'white';
    testDiv.style.padding = '10px';
    appElement.appendChild(testDiv);
    // Dynamically creating the workspace grid
    const workspace = document.createElement('div');
    workspace.id = 'workspace';
    workspace.style.display = 'grid';
    workspace.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
    workspace.style.gap = '10px';
    appElement.appendChild(workspace);

    console.log('GUI Initialized');
}

// New functions: createInitialNodes, createNode, manageNodes
function createInitialNodes() {
    // Logic to create and display initial nodes
}

function createNode() {
    // Logic to dynamically add new nodes
}

function manageNodes() {
    // Logic for node management, like editing or removing nodes
}

// Existing part: Initializing the GUI when the document is fully loaded
document.addEventListener('DOMContentLoaded', initGUI);

