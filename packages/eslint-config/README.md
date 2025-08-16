# `@repo/eslint-config`

iamhoonse AI Ecosystem을 위한 ESLint 설정 패키지입니다.

## 개요

이 패키지는 프로젝트 전반에서 일관된 코드 품질과 스타일을 유지하기 위한 ESLint 설정을 제공합니다. Next.js, React, TypeScript 환경에 최적화되어 있으며, 모든 apps와 packages에서 공유됩니다.

## 제공되는 설정

### `@repo/eslint-config/base`

- JavaScript/TypeScript 기본 규칙
- Prettier와 통합된 포맷팅 규칙
- Turbo 관련 규칙

### `@repo/eslint-config/next-js`

- Next.js 전용 규칙
- App Router 및 Pages Router 지원
- 성능 최적화 및 접근성 규칙

### `@repo/eslint-config/react-internal`

- React 내부 컴포넌트용 규칙
- React Hooks 최적화
- 컴포넌트 라이브러리 개발용 설정

## 사용법

### Next.js 앱에서 사용

```javascript
// eslint.config.js
import baseConfig from "@repo/eslint-config/base";
import nextConfig from "@repo/eslint-config/next-js";

export default [...baseConfig, ...nextConfig];
```

### React 컴포넌트 라이브러리에서 사용

```javascript
// eslint.config.js
import baseConfig from "@repo/eslint-config/base";
import reactInternalConfig from "@repo/eslint-config/react-internal";

export default [...baseConfig, ...reactInternalConfig];
```

## 주요 규칙

- **코드 품질**: TypeScript strict 모드, 사용되지 않는 변수 검출
- **성능**: React re-render 최적화, Next.js 성능 모범 사례
- **접근성**: ARIA 속성, 시맨틱 HTML 사용 권장
- **일관성**: Prettier와 통합된 코드 포맷팅

## 의존성

- ESLint 9.x
- TypeScript ESLint
- React/React Hooks 플러그인
- Next.js ESLint 플러그인
- Prettier 통합
- Turbo ESLint 플러그인

## 확장 및 커스터마이징

프로젝트별 특별한 규칙이 필요한 경우:

```javascript
// your-app/eslint.config.js
import baseConfig from "@repo/eslint-config/base";

export default [
  ...baseConfig,
  {
    rules: {
      // 커스텀 규칙 추가
      "prefer-const": "error",
    },
  },
];
```
