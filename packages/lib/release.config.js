/**
 * @type {import('semantic-release').GlobalConfig}
 */

// eslint-disable-next-line no-undef
module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    // publish command currently not working fine with pnpm -> use custom plugin as workaround
    "styled-off-canvas-publish", // "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        assets: "dist/*.tgz",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md"],
        message:
          "chore(release): set `package.json` to ${nextRelease.version} [skip ci]",
      },
    ],
  ],
};
