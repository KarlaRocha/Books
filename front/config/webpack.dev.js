const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/js/index.tsx']
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../server/public'),
    filename: '[name]-bundle.js',
    publicPath: "/"
  },
  devServer: {
    hot: true,
    contentBase: 'public',
    overlay: true,
    stats: {
      color: true
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        use: [
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.s[c|a]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpeg|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader' ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.tsx',
      '.ts'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
