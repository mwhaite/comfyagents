const fs = require('fs');

const loadNodeDefinition = (file) => {
    // Load and return node definition from file
    const definition = fs.readFileSync(file, 'utf8');
    return JSON.parse(definition);
};

module.exports = { loadNodeDefinition };
