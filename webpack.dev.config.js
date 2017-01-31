var config = require('@quantumblack/javascript-standards/config/react/webpack/webpack.config.js');
const path = require('path');
const webpack = require('webpack');

config.resolve.modulesDirectories.push(path.resolve(__dirname, 'src'));

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

config.eslint = {
  configFile: '.eslintrc.js'
};

// remove uglifyjs plugin
config.plugins = [
  new webpack.HotModuleReplacementPlugin()
];

module.exports = config;
