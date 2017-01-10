var webpack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
  'lodash', 'redux', 'react-redux', 'react', 'react-dom', 'react-router', 'redux-promise', 'react-retina-image'
];

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8000&name=images/[name].[ext]'
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  // performance: {
  //   hints: false
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HTMLWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('styles.css')
  ]
};
