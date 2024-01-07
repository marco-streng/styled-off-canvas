/**
 * @type {import('semantic-release').GlobalConfig}
 */

// eslint-disable-next-line no-undef
module.exports = {
  branches: ["master", { name: "pre", prerelease: true }],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "cp ../README.md .",
      },
    ],
    // publish command currently not working fine with pnpm -> use exec as workaround
    // "@semantic-release/npm",
    [
      "@semantic-release/exec",
      {
        prepareCmd:
          "npm version ${nextRelease.version} --workspace-update=false --allow-same-version=true",
      },
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "pnpm pack",
      },
    ],
    [
      "@semantic-release/exec",
      {
        publishCmd: "pnpm publish --no-git-checks",
      },
    ],
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
