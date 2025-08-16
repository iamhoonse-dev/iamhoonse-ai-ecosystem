import { nextJsConfig } from "@repo/eslint-config/next-js";

/**
 * 웹 애플리케이션의 ESLint 설정
 * 
 * 웹 앱에서 사용하는 ESLint 설정입니다.
 * 공유 Next.js ESLint 설정(@repo/eslint-config/next-js)을 그대로 사용합니다.
 * 
 * 포함된 규칙:
 * - JavaScript/TypeScript 기본 규칙
 * - React 및 React Hooks 규칙
 * - Next.js 최적화 규칙
 * - Prettier 통합
 * - Turbo 모노레포 규칙
 *
 * @type {import("eslint").Linter.Config}
 */
export default nextJsConfig;
