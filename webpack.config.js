const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  devtool: 'cheap-module-source-map',
   module: {
      rules: [
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                 "presets": ["@babel/preset-env", "@babel/preset-react"]
              }
            }
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
             loader: 'babel-loader',
             options: {
                "presets": ["@babel/preset-env", "@babel/preset-react"]
             }
           },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [
        new CopyPlugin([
          { from: './src/popup.html', to: './popup.html' },

          { from: './src/js/background.js', to: './background.js' },
          { from: './src/js/popup.js', to: './popup.js' },

          { from: './src/manifest.json', to: './manifest.json' },

          { from: './src/img', to: './img' }
         ]),
          new HtmlWebpackPlugin({template: "./src/index.html"})
      ]
};