# `@repo/typescript-config`

iamhoonse AI Ecosystem을 위한 공유 TypeScript 설정 패키지입니다.

## 개요

이 패키지는 프로젝트 전반에서 일관된 TypeScript 설정을 제공합니다. 다양한 환경(Next.js, React 라이브러리 등)에 최적화된 설정을 포함하며, 모든 apps와 packages에서 공유됩니다.

## 제공되는 설정

### `@repo/typescript-config/base.json`

기본 TypeScript 설정으로 모든 프로젝트의 기반이 됩니다.

**주요 특징:**

- ES2022 타겟 및 라이브러리
- Node.js의 최신 모듈 시스템 (NodeNext)
- Strict 모드 활성화
- 타입 안전성 강화 (`noUncheckedIndexedAccess`)
- 증분 컴파일 비활성화 (Turbo 캐싱 최적화)

### `@repo/typescript-config/nextjs.json`

Next.js 프로젝트 전용 설정입니다.

**추가 기능:**

- Next.js 플러그인 통합
- App Router 및 Pages Router 지원
- JSX 처리 설정
- Next.js 최적화 옵션

### `@repo/typescript-config/react-library.json`

**React 컴포넌트 라이브러리 개발용 설정**입니다.

**라이브러리 특화:**

- 선언 파일 생성 활성화
- 모듈 번들링 최적화
- React JSX 변환 설정 (`jsx: "react-jsx"`)

**현재 사용 패키지:**

- `@repo/react-ui`: React UI 컴포넌트 라이브러리
- `@repo/react-utils`: React 커스텀 훅 및 유틸리티 (2025년 1월 설정 통일 완료)

이 설정을 통해 모든 React 관련 패키지들이 일관된 TypeScript 환경에서 개발됩니다.

## 사용법

### Next.js 앱에서 사용

```json
// tsconfig.json
{
  "extends": "@repo/typescript-config/nextjs.json",
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### React 라이브러리에서 사용

```json
// tsconfig.json
{
  "extends": "@repo/typescript-config/react-library.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": [
    "dist",
    "node_modules",
    "**/*.test.ts",
    "**/*.spec.ts",
    "**/*.test.tsx",
    "**/*.spec.tsx"
  ]
}
```

**테스트 파일 제외**: React 라이브러리에서는 `.tsx` 확장자를 포함한 모든 테스트 파일이 컴파일 대상에서 제외되어야 합니다.

### 기본 TypeScript 프로젝트에서 사용

```json
// tsconfig.json
{
  "extends": "@repo/typescript-config/base.json",
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## 주요 컴파일러 옵션

### 타입 안전성

- `strict: true` - 모든 strict 모드 체크 활성화
- `noUncheckedIndexedAccess: true` - 인덱스 접근 시 undefined 체크 강제
- `isolatedModules: true` - 각 파일이 독립적으로 컴파일 가능하도록 보장

### 모던 JavaScript

- `target: "ES2022"` - 최신 JavaScript 기능 사용
- `lib: ["es2022", "DOM", "DOM.Iterable"]` - 최신 API 지원
- `module: "NodeNext"` - Node.js 최신 모듈 시스템 사용

### 개발 경험

- `skipLibCheck: true` - 라이브러리 타입 체크 건너뛰기 (빌드 속도 향상)
- `resolveJsonModule: true` - JSON 파일 import 지원
- `esModuleInterop: true` - CommonJS/ES 모듈 상호 운용성

## Turbo와의 통합

이 설정들은 Turborepo와 최적화되어 있습니다:

- `incremental: false` - Turbo 캐싱과 충돌 방지
- `moduleDetection: "force"` - 일관된 모듈 감지
- 선언 파일 생성으로 타입 정보 공유

## 프로젝트별 커스터마이징

특별한 설정이 필요한 경우 기본 설정을 확장할 수 있습니다:

```json
// your-project/tsconfig.json
{
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
    // 추가 또는 오버라이드 옵션
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*", "custom-types/**/*"]
}
```

## 개발 도구 통합

### VS Code

프로젝트 루트에서 TypeScript 버전을 workspace 버전으로 설정하면 최적의 개발 경험을 얻을 수 있습니다.

### ESLint

`@repo/eslint-config`와 함께 사용하면 TypeScript ESLint 규칙이 자동으로 적용됩니다.

### 에디터 설정

대부분의 TypeScript 지원 에디터에서 이 설정들을 자동으로 인식하고 활용합니다.

## 버전 호환성

- TypeScript 5.9.2+
- Node.js 18+
- 모든 최신 브라우저 지원

## 문제 해결

### 일반적인 문제들

1. **모듈 해석 오류**: `moduleResolution: "NodeNext"`로 해결
2. **JSON import 오류**: `resolveJsonModule: true`로 해결
3. **타입 체크 성능**: `skipLibCheck: true`로 최적화

### 타입 오류 해결

strict 모드로 인한 오류들은 코드 품질 향상을 위한 것입니다:

- `undefined` 체크 강화
- 암시적 `any` 타입 금지
- null 안전성 강화
