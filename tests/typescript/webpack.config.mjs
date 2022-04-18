import { config } from "@eterna/webpack-config-typescript";
import { merge } from "webpack-merge";
import path from "path";

const mergeConfig = {
  entry: path.resolve("./src/index.ts"),
};

export default (env, argv) => merge(config(env, argv), mergeConfig);
