# `@repo/ui`

iamhoonse AI Ecosystem을 위한 공유 React 컴포넌트 라이브러리입니다.

## 개요

이 패키지는 프로젝트 전반에서 일관된 UI/UX를 제공하기 위한 재사용 가능한 React 컴포넌트들을 포함합니다. 모든 앱에서 공유되며, TypeScript로 작성되어 타입 안전성을 보장합니다.

## 현재 제공되는 컴포넌트

### `Button`

- 기본 버튼 컴포넌트
- 커스텀 className 지원
- 앱별 구분을 위한 appName prop

### `Card`

- 카드 레이아웃 컴포넌트
- 콘텐츠 구조화를 위한 기본 컴포넌트

### `Code`

- 코드 표시용 컴포넌트
- 인라인 코드 및 코드 블록 지원

## 설치 및 사용법

### 패키지 설치

이 패키지는 workspace 내부에서만 사용되며, 각 앱에서 자동으로 사용 가능합니다.

```json
// 앱의 package.json
{
  "dependencies": {
    "@repo/ui": "workspace:*"
  }
}
```

### 컴포넌트 사용

```typescript
import { Button, Card, Code } from '@repo/ui/button'

export default function ExamplePage() {
  return (
    <Card>
      <h1>예제 페이지</h1>
      <Button appName="web" className="primary-btn">
        클릭하세요
      </Button>
      <Code>npm install</Code>
    </Card>
  )
}
```

## 개발

### 새 컴포넌트 생성

```bash
# UI 패키지 디렉토리에서
cd packages/ui

# Turbo 생성기 사용
pnpm generate:component
```

### 컴포넌트 개발 가이드라인

#### 1. TypeScript 인터페이스 정의

```typescript
interface ComponentNameProps {
  children?: ReactNode;
  className?: string;
  // 기타 필요한 props
}
```

#### 2. 컴포넌트 구조

```typescript
"use client" // Client 컴포넌트인 경우

import { ReactNode } from "react"

interface ComponentProps {
  // prop 정의
}

export const ComponentName = ({ ...props }: ComponentProps) => {
  return (
    // JSX 구현
  )
}
```

#### 3. 내보내기

컴포넌트는 `src/` 디렉토리에 개별 파일로 작성하며, package.json의 exports 설정을 통해 자동으로 내보내집니다.

```json
{
  "exports": {
    "./*": "./src/*.tsx"
  }
}
```

### 코드 품질

```bash
# 린트 검사
pnpm lint

# 타입 체크
pnpm check-types
```

## 설계 원칙

- **재사용성**: 여러 앱에서 사용할 수 있도록 범용적으로 설계
- **타입 안전**: 모든 컴포넌트에 TypeScript 인터페이스 제공
- **접근성**: ARIA 속성과 시맨틱 HTML 사용
- **성능**: React 19의 최신 기능 활용
- **일관성**: 프로젝트 전체의 디자인 시스템 반영

## 향후 계획

- **디자인 토큰**: CSS Custom Properties를 통한 디자인 시스템 구축
- **Storybook**: 컴포넌트 문서화 및 테스트 환경 구축
- **테스트**: Jest와 React Testing Library를 통한 단위 테스트
- **접근성**: 향상된 a11y 지원
- **테마 지원**: 다크/라이트 테마 전환 기능

## 기여하기

새로운 컴포넌트나 개선사항이 있다면:

1. 컴포넌트의 재사용성과 범용성 검토
2. TypeScript 인터페이스 정의
3. 접근성 고려사항 확인
4. 린트 및 타입 체크 통과
5. 사용 예제 추가

모든 컴포넌트는 프로젝트 전체의 일관성을 유지해야 하며, 성능과 접근성을 고려하여 개발되어야 합니다.
