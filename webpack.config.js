const path = require('path');
const webpack = require('webpack')
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = require('./webpack.developments');
const production = require('./webpack.production')

const { NODE_ENV } = process.env;
const devMode = NODE_ENV !== 'production';

module.exports = webpackMerge({
  mode: NODE_ENV,
  entry: {
    app: path.resolve(__dirname, 'src/index.ts'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Arena',
      template: path.resolve(__dirname, 'src/template.html'),
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js'],
  },
}, devMode ? development : production);
