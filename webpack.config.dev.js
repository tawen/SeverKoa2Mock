'use strict';


const webpack = require('webpack');

module.exports = {
    entry: {
        'index': [
          // For old browsers
          'eventsource-polyfill',
          'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
          'index.js']
      },
      plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
