const path = require ("path");
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require ("html-webpack-plugin");
const { CleanWebpackPlugin } = require ("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    about: "./src/about.js"
  },
  output: {
    path: path.resolve (__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ExtractTextPlugin.extract ({
          fallback: "style-loader",
          use: [{loader: "css-loader", options: {sourceMap: true}}]
        })
      },
      {
        test: /\.scss$/, 
        use: ExtractTextPlugin.extract ({
          fallback: "style-loader",
          use: [
            {loader: "css-loader", options: {sourceMap: true}},
            {loader: "sass-loader", options: {sourceMap: true}}
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin (),
    new ExtractTextPlugin ("styles.css"),
    new HtmlWebpackPlugin ({
      title: "Webpack App"
    })
  ],
  mode: "production"
}
