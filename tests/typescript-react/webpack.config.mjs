import configTypescript from "@eterna/webpack-config-typescript";
import configReact from "@eterna/webpack-config-react";
import path from "path";
import { mergeWithRules } from "webpack-merge";

const mergeConfig = {
  entry: path.resolve("./src/index.tsx"),
};

export default (env, argv) =>
  mergeWithRules(configTypescript.configBase.mergeRules)(
    configTypescript.config(env, argv),
    configReact.config(env, argv),
    mergeConfig
  );
