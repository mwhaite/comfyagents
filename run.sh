#!/bin/bash

# Check for Node.js installation
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js."
    exit 1
fi

# Execute setupFrontendEnvironment.js
node setupFrontendEnvironment.js

# Install dependencies
npm install

echo "Setup and dependency installation completed."
