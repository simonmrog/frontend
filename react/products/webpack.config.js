const path = require ("path");
const HtmlWebpackPlugin = require ("html-webpack-plugin");

module.exports = {
  entry: {
    app: "/src/index.js"
  },
  output: {
    path: path.resolve (__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
}