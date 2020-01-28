const path = require ("path");
const ExtractTextPlugin = require ("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require ("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve (__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract ({
          fallback: "style-loader",
          use: [
            {loader: "css-loader", options: {sourceMap: true}}
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin ("styles.css"),
    new HtmlWebpackPlugin ({
      template: "src/index.html"
    })
  ],
  mode: "production"
};