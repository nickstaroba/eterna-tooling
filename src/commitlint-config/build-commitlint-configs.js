import { buildConfig } from "../build-config";
import { updateDependencies } from "../update-dependencies";

export function buildCommitlintConfigs(done) {
  buildConfig("commitlint");
  done();
}

export function updateCommitlintDependencies(done) {
  updateDependencies("commitlint");
  done();
}
