import { execa } from "execa";
import type { Context } from "semantic-release";

export const prepare = async (_pluginConfig: never, context: Context) => {
  const { env, nextRelease } = context;

  if (!nextRelease) {
    throw new Error("No data for next release available.");
  }

  const result = execa(
    "npm",
    [
      "version",
      nextRelease.version,
      "--no-git-tag-version",
      "--allow-same-version",
    ],
    {
      env,
      preferLocal: true,
    }
  );

  await result;
};

export const publish = async (_pluginConfig: never, context: Context) => {
  const { env } = context;

  await execa("pnpm", ["publish", "--no-git-checks"], {
    env,
    preferLocal: true,
  });
};
