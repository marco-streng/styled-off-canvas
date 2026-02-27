import { exec } from 'child_process';
import { build } from 'esbuild';
import { rmSync } from 'fs';
import { promisify } from 'util';
import packageJson from './package.json';

const execAsync = promisify(exec);

// Clean dist directory
console.log('🧹 Cleaning dist directory...');
rmSync('dist', { recursive: true, force: true });

const peerDependencies = Object.keys(packageJson.peerDependencies || {});
const external = [
  ...peerDependencies,
  'react/jsx-runtime',
];

const sharedConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: false,
  sourcemap: true,
  external,
  platform: 'neutral' as const,
  target: ['es2016', 'node18'],
};

async function buildPackage() {
  try {
    // Build CommonJS
    console.log('📦 Building CommonJS...');
    await build({
      ...sharedConfig,
      format: 'cjs',
      outfile: 'dist/styled-off-canvas.cjs.js',
    });
    console.log('✅ CommonJS build complete');

    // Build ESM
    console.log('📦 Building ES Module...');
    await build({
      ...sharedConfig,
      format: 'esm',
      outfile: 'dist/styled-off-canvas.esm.js',
    });
    console.log('✅ ES Module build complete');

    // Generate TypeScript declarations
    console.log('📝 Generating TypeScript declarations...');
    await execAsync('tsc --project tsconfig.declaration.json --outdir dist');
    console.log('✅ TypeScript declarations generated');

    console.log('🎉 Build complete! Package is ready for publishing.');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildPackage();
