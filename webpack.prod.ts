import { resolve } from "path";

import { merge } from "webpack-merge";

import common from "./webpack.common";

const config = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist")
  }
});

export default config;
