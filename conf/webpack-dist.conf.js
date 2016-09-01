const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json');
const autoprefixer = require('autoprefixer');

const SASS_INCLUDES_PATHS = [];
SASS_INCLUDES_PATHS.push(path.resolve(__dirname, '../node_modules', 'angular-material'));
SASS_INCLUDES_PATHS.push(path.resolve(__dirname, '../node_modules', 'font-awesome/scss'));
SASS_INCLUDES_PATHS.push(path.resolve(__dirname, '../node_modules', 'material-design-icons/iconfont'));

module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],

    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css?minimize!postcss!resolve-url!sass?sourceMap'
        })
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
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {unused: true, dead_code: true} // eslint-disable-line camelcase
    }),
    new ExtractTextPlugin('index-[contenthash].css')
  ],
  postcss: () => [autoprefixer],
  sassLoader: {
    includePaths: SASS_INCLUDES_PATHS
  },
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name]-[hash].js'
  },
  entry: {
    app: `./${conf.path.src('index')}`,
    vendor: Object.keys(pkg.dependencies)
  }
};
