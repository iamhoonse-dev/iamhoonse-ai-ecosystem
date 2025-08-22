import { defineConfig } from "tsup";

export default defineConfig([
  // Main entry point
  {
    entry: { index: "src/index.ts" },
    format: ["cjs", "esm"],
    dts: true,
    clean: false,
    sourcemap: true,
    splitting: false,
    treeshake: true,
    outDir: "dist",
    external: ["react", "react-dom", "react/jsx-runtime"],
    globalName: "ReactUI",
    outExtension({ format }) {
      return {
        js: format === "cjs" ? ".js" : ".mjs",
      };
    },
  },
  // Subpackage entry points for tree shaking
  {
    entry: {
      common: "src/common/index.ts",
      base: "src/base/index.ts",
      lib: "src/lib/index.ts",
    },
    format: ["cjs", "esm"],
    dts: true,
    clean: false,
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
