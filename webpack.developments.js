module.exports = {
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devtool: 'eval',
  devServer: {
    port: 5000,
    contentBase: './dist',
  },
};
