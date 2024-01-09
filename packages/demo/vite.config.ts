import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // esbuild: {
  //   // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
  //   logOverride: { "this-is-undefined-in-esm": "silent" },
  // },
  plugins: [react()],
});
