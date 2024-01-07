/**
 * @type {import('semantic-release').GlobalConfig}
 */

// eslint-disable-next-line no-undef
module.exports = {
  branches: ["master"],
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
    [
      "@semantic-release/npm",
      {
        // publish command currently not working fine with pnpm -> use exec as workaround
        publish: false,
      },
    ],
    [
      "@semantic-release/exec",
      {
        publishCmd: "pnpm publish --no-git-checks",
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
