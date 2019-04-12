const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].bundle.[hash].js',
  },
  optimization: {
    noEmitOnErrors: true,
  },
  devtool: 'hidden-source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ]
};
