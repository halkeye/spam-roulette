var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var appName = 'app';
var host = '0.0.0.0';
var port = '3000';

var plugins = [
  new HtmlWebpackPlugin({ inject: true, template: './src/index.html' })
];
var outputFile;
var config;
var entry = ['./src/index.js'];

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = appName + '.min.js';
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  outputFile = appName + '.js';
}

config = {
  entry: entry,
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    publicPath: './'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loaders: ['react-hot', 'babel'],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      { test: /\.(gif|jpg|jpeg|png)$/, loader: 'file-loader' }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
  plugins: plugins
};

if (env === 'dev') {
  config.entry = [
    'webpack-dev-server/client?https://dev.gavinmogan.com/', // WebpackDevServer host and port
    'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
  ].concat(config.entry);
  new WebpackDevServer(webpack(config), {
    contentBase: config.output.path,
    inline: true,
    hot: true,
    debug: true
  }).listen(port, host, function (err, result) {
    if (err) {
      console.log(err);
    }
  });
  console.log('-------------------------');
  console.log('Local web server runs at http://' + host + ':' + port);
  console.log('-------------------------');
}

module.exports = config;
