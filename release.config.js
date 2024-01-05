/**
 * @type {import('semantic-release').GlobalConfig}
 */

// eslint-disable-next-line no-undef
module.exports = {
  branches: [
    "master",
    {
      name: "pre",
      prerelease: true,
    },
  ],
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
      "@semantic-release/npm",
      {
        pkgRoot: "lib",
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
