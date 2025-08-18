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
    external: ["react", "react-dom", "react/jsx-runtime"],
    outExtension({ format }) {
      return {
        js: format === "cjs" ? ".js" : ".mjs",
      };
    },
  },
  // Category-specific entry points for tree shaking
  {
    entry: { hooks: "src/hooks/index.ts" },
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    splitting: false,
    treeshake: true,
    outDir: "dist",
    external: ["react", "react-dom", "react/jsx-runtime"],
    outExtension({ format }) {
      return {
        js: format === "cjs" ? ".js" : ".mjs",
      };
    },
  },
]);
