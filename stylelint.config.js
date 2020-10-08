const config = require('ebullience/lib/stylelint.js');

const rules = {
  // your rules
};

config.rules = {
  ...config.rules,
  ...rules
};

module.exports = config;
