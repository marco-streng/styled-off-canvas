/**
 * @type {import('semantic-release').GlobalConfig}
 */

// eslint-disable-next-line no-undef
module.exports = {
  branches: [
    "main",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true }
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
      '@semantic-release/exec',
      {
        prepareCmd: 'pnpm --filter styled-off-canvas build:package'
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'packages/lib'
      }
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
