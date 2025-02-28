import ESLintPlugin from "eslint-webpack-plugin";
import { merge } from "webpack-merge";

import common from "./webpack.common";

import "webpack-dev-server";

const config = merge(common, {
  mode: "development",
  devtool: "eval",
  output: {
    filename: `./[name].js`
  },
  devServer: {
    hot: true,
    port: 6677,
    compress: true,
    historyApiFallback: true
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["ts", "tsx"],
      overrideConfigFile: `.eslintrc.json`,
      fix: true,
      failOnError: false,
      emitWarning: true
    })
  ]
});

export default config;
