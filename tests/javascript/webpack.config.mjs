import { config } from "@eterna/webpack-config-javascript";
import { merge } from "webpack-merge";
import path from "path";

const mergeConfig = {
  entry: path.resolve("./src/index.js"),
};

export default (env, argv) => merge(config(env, argv), mergeConfig);
