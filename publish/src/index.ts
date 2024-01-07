import { execa } from "execa";
import type { Context } from "semantic-release";

export const prepare = async (_pluginConfig: never, context: Context) => {
  const { env, nextRelease } = context;

  await execa("cp", ["../README.md", "."], {
    env,
    preferLocal: true,
  });

  if (!nextRelease) {
    throw new Error("No data for next release available.");
  }

  await execa(
    "npm",
    [
      "version",
      nextRelease.version,
      "--workspace-update=false",
      "--allow-same-version=true",
    ],
    {
      env,
      preferLocal: true,
    }
  );

  await execa("pnpm", ["pack"]);
};

export const publish = async (_pluginConfig: never, context: Context) => {
  const { env, branch } = context;

  await execa(
    "pnpm",
    [
      "publish",
      "--no-git-checks",
      ...(branch.prerelease ? ["--tag=next"] : []),
    ],
    {
      env,
      preferLocal: true,
    }
  );
};
