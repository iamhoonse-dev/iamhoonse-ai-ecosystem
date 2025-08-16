import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import pluginNext from "@next/eslint-plugin-next";
import { config as baseConfig } from "./base.js";

/**
 * Next.js 애플리케이션을 위한 ESLint 설정
 * 
 * Next.js 앱에 특화된 ESLint 설정으로 기본 설정을 확장합니다.
 * React, React Hooks, Next.js 플러그인 규칙이 포함되어 있습니다.
 *
 * 주요 기능:
 * - 기본 ESLint 설정 상속
 * - React 권장 규칙 및 JSX 지원
 * - React Hooks 규칙 (Hook 의존성 검사 등)
 * - Next.js 권장 규칙 (이미지 최적화, 링크 사용법 등)
 * - Core Web Vitals 최적화 규칙
 * - Service Worker 글로벌 변수 지원
 * - 새로운 JSX Transform 지원 (React import 불필요)
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const nextJsConfig = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
  },
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
    },
  },
];
