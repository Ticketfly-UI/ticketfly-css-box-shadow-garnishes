/* global module */
module.exports = {
  input: 'index.css',
  output: 'build/ticketfly-css-box-shadow-garnishes.css',

  use: [
    'postcss-import',
    'postcss-cssnext'
  ]
};
