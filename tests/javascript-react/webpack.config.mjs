import configJavascript from "@eterna/webpack-config-javascript";
import configReact from "@eterna/webpack-config-react";
import path from "path";
import { mergeWithRules } from "webpack-merge";

const mergeConfig = {
  entry: path.resolve("./src/index.jsx"),
};

export default (env, argv) =>
  mergeWithRules(configJavascript.configBase.mergeRules)(
    configJavascript.config(env, argv),
    configReact.config(env, argv),
    mergeConfig
  );
