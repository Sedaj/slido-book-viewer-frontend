var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

devServer = {
  contentBase: "./",
  quiet: false,
  noInfo: false,
  inline: true,
  publicPath: "http://127.0.0.1:8000/dist/",
  historyApiFallback: {
    index: "index.html"
  },
  host: "127.0.0.1",
  port: 8000,
  hot: true
};

module.exports = {
  devServer: devServer,
  context: __dirname,
  devtool: "inline-source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:8000",
    "webpack/hot/only-dev-server",
    "./index.js"
  ],
  output: {
    publicPath: "http://localhost:8000/public/",
    path: path.resolve(__dirname, "public/"),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin("style/main.css"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!postcss-loader!sass-loader"
      }
    ]
  }
};
