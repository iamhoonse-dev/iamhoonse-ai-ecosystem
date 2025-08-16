import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import { config as baseConfig } from "./base.js";

/**
 * React 라이브러리를 위한 ESLint 설정
 * 
 * 내부 React 컴포넌트 라이브러리 개발에 특화된 ESLint 설정입니다.
 * UI 패키지와 같은 공유 React 컴포넌트 개발 시 사용됩니다.
 *
 * 주요 기능:
 * - 기본 ESLint 설정 상속
 * - React 권장 규칙 및 JSX 지원
 * - React Hooks 규칙 (의존성 배열 검사, 규칙 준수 등)
 * - 브라우저 및 Service Worker 환경 글로벌 변수 지원
 * - React 버전 자동 감지
 * - 새로운 JSX Transform 지원 (React import 불필요)
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
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
