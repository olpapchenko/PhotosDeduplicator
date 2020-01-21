const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
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
          { from: './src/app.html', to: './app.html' },
          { from: './src/popup.html', to: './popup.html' },
          { from: './src/manifest.json', to: './manifest.json' }
         ]),
      ]
};