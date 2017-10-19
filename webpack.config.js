const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'production';

const config = {
  entry: ['./assets/scripts/scripts.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/scripts'),
  },
  plugins: [
    new BrowserSyncPlugin({
      server: { baseDir: 'public', },
      port: 3333,
      notify: true,
      open: true,
      files: './public/**/*',
    }),
    new HTMLWebpackPlugin({
      template: './assets/index.html',
      filename: './../index.html',
    }),
    new ExtractTextPlugin({
      filename: 'styles/styles.css',
      
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false, },
      output: { comments: false, },
      sourcemap: true,
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      },
      {
        test: /\.(s?css$|styl$)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1, }
            },
            'postcss-loader',
            'stylus-loader',
          ],
        }),
      },
      // CSS Modules option!
      // {
      //   test: /\.(s?css$|styl$)/,
      //   use: [
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 1, 
      //         modules: true,
      //         localIdentName: '[local]--[hash:base64:3],
      //       },
      //     },
      //     'postcss-loader',
      //     'stylus-loader',
      //   ],
      // },
    ]
  },
  devtool: 'cheap-eval-source-map',
};

module.exports = config;