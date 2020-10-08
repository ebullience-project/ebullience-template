const config = require('ebullience/lib/eslint.js');

const rules = {
  // your rules
};

config.rules = {
  ...config.rules,
  ...rules
};

module.exports = config;
