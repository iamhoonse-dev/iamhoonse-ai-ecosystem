import { defineConfig } from "tsup";

export default defineConfig([
  // Main entry point
  {
    entry: { index: "src/index.ts" },
    format: ["cjs", "esm"],
    dts: true,
    clean: true,
    sourcemap: true,
    splitting: false,
    treeshake: true,
    outDir: "dist",
    outExtension({ format }) {
      return {
        js: format === "cjs" ? ".js" : ".mjs",
      };
    },
  },
  // Category-specific entry points for tree shaking
  {
    entry: { bom: "src/bom/index.ts" },
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    splitting: false,
    treeshake: true,
    outDir: "dist",
    outExtension({ format }) {
      return {
        js: format === "cjs" ? ".js" : ".mjs",
      };
    },
  },
]);
