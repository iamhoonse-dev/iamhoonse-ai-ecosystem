import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";

/**
 * 저장소에서 공유하는 ESLint 설정
 * 
 * 모든 패키지와 애플리케이션에서 사용할 수 있는 기본 ESLint 설정입니다.
 * JavaScript 권장 설정, TypeScript 지원, Prettier 통합, Turbo 최적화가 포함됩니다.
 *
 * 주요 기능:
 * - JavaScript 기본 권장 규칙
 * - TypeScript 타입 검사 및 권장 규칙  
 * - Prettier와의 충돌 방지
 * - Turbo 모노레포 환경변수 검증
 * - 경고로 표시 (빌드 중단 방지)
 * - dist 폴더 무시
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  // JavaScript 기본 권장 설정
  js.configs.recommended,
  
  // Prettier와 충돌하는 포맷팅 규칙 비활성화
  eslintConfigPrettier,
  
  // TypeScript 권장 설정
  ...tseslint.configs.recommended,
  
  // Turbo 모노레포 최적화 규칙
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      // 선언되지 않은 환경변수 사용 시 경고
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  
  // 모든 에러를 경고로 변환 (빌드 중단 방지)
  {
    plugins: {
      onlyWarn,
    },
  },
  
  // 빌드 산출물 폴더 무시
  {
    ignores: ["dist/**"],
  },
];
