# Web App

iamhoonse AI Ecosystem의 메인 웹 애플리케이션입니다.

## 개요

이 앱은 Next.js 15 App Router를 기반으로 구축된 현대적인 웹 애플리케이션으로, AI 기반 개발 워크플로우의 핵심 인터페이스를 제공합니다.

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript
- **Bundler**: Turbopack
- **Styling**: CSS Modules
- **UI Components**: `@repo/ui` (내부 컴포넌트 라이브러리)

## 개발 시작하기

### 프로젝트 루트에서 실행

```bash
# 모든 앱을 함께 실행
pnpm dev

# 이 앱만 실행
pnpm turbo dev --filter=web
```

웹 앱은 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 개별 실행 (앱 디렉토리에서)

```bash
cd apps/web

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# 린트
pnpm lint

# 타입 체크
pnpm check-types
```

## 프로젝트 구조

```
apps/web/
├── app/                 # Next.js App Router
│   ├── globals.css     # 전역 스타일
│   ├── layout.tsx      # 루트 레이아웃
│   └── page.tsx        # 홈 페이지
├── public/             # 정적 파일
└── package.json        # 패키지 설정
```

## 주요 기능

- 🚀 **고성능**: Turbopack을 사용한 빠른 개발 환경
- 🎯 **타입 안전**: TypeScript로 작성된 완전 타입 안전한 코드
- 🧩 **모듈화**: 공유 컴포넌트 라이브러리 활용
- 📱 **반응형**: 모바일 퍼스트 디자인

## 개발 가이드라인

### 코드 스타일

- ESLint 규칙 준수 (`@repo/eslint-config` 사용)
- TypeScript strict 모드 활성화
- CSS Modules 사용 권장

### 페이지 및 컴포넌트 작성

```typescript
// app/example/page.tsx
import { Button } from '@repo/ui/button'

export default function ExamplePage() {
  return (
    <div>
      <h1>예제 페이지</h1>
      <Button>클릭하세요</Button>
    </div>
  )
}
```

## 배포

이 애플리케이션은 Vercel에 배포하는 것이 권장됩니다:

1. Vercel 계정에 연결
2. 저장소 import
3. 빌드 설정은 자동으로 감지됨

자세한 배포 방법은 [Next.js 배포 가이드](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.
