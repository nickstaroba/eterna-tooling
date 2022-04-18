const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { CustomizeRule } = require("webpack-merge");

const defaultHtmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: "index.html",
  template: path.join(process.cwd(), "src/index.html"),
});

const defaultMiniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: (pathData) =>
    pathData.chunk.name === "main" ? "[name].css" : "[name]/[name].css",
  ignoreOrder: false,
});

const devServer = {
  historyApiFallback: true,
  hot: true,
  open: true,
  watchFiles: ["src/**/*"],
};

const fontRule = {
  test: /\.(eot|otf|ttf|woff|woff2)$/i,
  type: "asset/resource",
  generator: {
    filename: "fonts/[hash][ext][query]",
  },
};

const htmlRule = {
  test: /\.html$/,
  use: "html-loader",
};

const imageRule = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
  generator: {
    filename: "images/[hash][ext][query]",
  },
};

const mergeRules = {
  module: {
    rules: {
      test: CustomizeRule.Match,
      use: {
        loader: CustomizeRule.Match,
        options: CustomizeRule.Merge,
      },
    },
  },
};

function styleRule(env, argv) {
  return {
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
  };
}

function config(env, argv) {
  return {
    devServer,
    module: {
      rules: [styleRule(env, argv), imageRule, fontRule, htmlRule],
    },
    output: { clean: true },
    plugins: [defaultHtmlWebpackPlugin, defaultMiniCssExtractPlugin],
    target: "web",
  };
}

exports.defaultHtmlWebpackPlugin = defaultHtmlWebpackPlugin;
exports.defaultMiniCssExtractPlugin = defaultMiniCssExtractPlugin;
exports.devServer = devServer;
exports.fontRule = fontRule;
exports.htmlRule = htmlRule;
exports.imageRule = imageRule;
exports.mergeRules = mergeRules;
exports.styleRule = styleRule;
exports.config = config;
