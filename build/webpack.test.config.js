const merge = require('webpack-merge')
const webpack = require('webpack')
const base = require('./webpack.base.config')

module.exports = merge(base, {
  devtool: 'source-map',
  resolve: {
    alias: {
      'create-api': './create-api-server.js'
    }
  }
})