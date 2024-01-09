const pkg = require("./package.json");
const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/styled-off-canvas.cjs.js",
  bundle: true,
  format: "cjs",
  minify: true,
  external: [...Object.keys(pkg.devDependencies)],
});

esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/styled-off-canvas.esm.js",
  bundle: true,
  format: "esm",
  minify: true,
  external: [...Object.keys(pkg.devDependencies)],
});
