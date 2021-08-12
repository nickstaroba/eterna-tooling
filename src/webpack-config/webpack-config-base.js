const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = (env, argv) => ({
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          argv.mode === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png)$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: "@svgr/webpack",
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    clean: true,
    filename: "js/main.js",
    path: path.resolve("./dist"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve("./src/index.html"),
    }),
    new MiniCssExtractPlugin({
      chunkFilename: "[id].css",
      filename: "css/[name].css",
      ignoreOrder: false,
    }),
  ],
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
  target: "web",
});
