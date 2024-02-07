const Node = require('./node');
const axios = require('axios');

class OpenAINode extends Node {
  constructor(id) {
    super(id);
    this.apiKey = '';
  }

  configure(config) {
    this.apiKey = config.apiKey;
  }

  async execute(prompt) {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
      prompt: prompt,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
    return response.data.choices[0].text;
  }
}

module.exports = OpenAINode;
