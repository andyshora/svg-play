var config = require('@quantumblack/javascript-standards/config/react/webpack/webpack.dev.config.js');
const path = require('path');
const webpack = require('webpack');

config.resolve.modules.push(path.resolve(__dirname, 'src'));

config.output = {
  path: 'static',
  filename: 'bundle.js',
  publicPath: '/static/'
};

config.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './src/index'
];

config.externals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
};

// remove uglifyjs plugin
config.plugins = [
  new webpack.HotModuleReplacementPlugin()
];

module.exports = config;
