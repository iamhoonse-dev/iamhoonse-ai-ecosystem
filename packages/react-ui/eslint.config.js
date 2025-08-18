import { config as reactInternalConfig } from "@repo/eslint-config/react-internal";

export default [
  ...reactInternalConfig,
  {
    ignores: ["dist/**/*", "node_modules/**/*"],
  },
];