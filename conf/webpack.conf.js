const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const SASS_INCLUDES_PATHS = [];
SASS_INCLUDES_PATHS.push(path.resolve(__dirname, '../node_modules', 'angular-material'));
SASS_INCLUDES_PATHS.push(path.resolve(__dirname, '../node_modules', 'font-awesome/scss'));
SASS_INCLUDES_PATHS.push(path.resolve(__dirname, '../node_modules', 'material-design-icons/iconfont'));

module.exports = {
  devServer: {
    proxy: {
      '/api*': {
        target: 'https://localhost:8443/backoffice/api',
        secure: false,
      },
    },
  },
  module: {
    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style',
          'css',
          'postcss',
          'resolve-url',
          'sass?sourceMap',
        ]
      },
      {
         test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
         loader: 'url-loader?limit=10000'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate',
          'babel'
        ]
      },
      {
        test: /.html$/,
        loaders: [
          'html'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html'),
      inject: true
    })
  ],
  sassLoader: {
    includePaths: SASS_INCLUDES_PATHS
  },
  postcss: () => [autoprefixer],
  debug: true,
  devtool: '#cheap-module-eval-source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: 'index.js'
  },
  entry: `./${conf.path.src('index')}`
};
