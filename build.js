const pkg = require('./package.json')

require('esbuild').buildSync({
  entryPoints: ['src/index.js'],
  outfile: 'dist/main.js',
  bundle: true,
  loader: {
    '.js': 'jsx'
  },
  format: 'cjs',
  minify: true,
  external: [...Object.keys(pkg.devDependencies)]
})
