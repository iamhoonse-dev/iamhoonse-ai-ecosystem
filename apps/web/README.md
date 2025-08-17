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
├── containers/          # 컴포넌트 컨테이너
│   └── TestBrowserUtils/ # 브라우저 유틸리티 테스트 컴포넌트
├── public/             # 정적 파일
└── package.json        # 패키지 설정
```

## 주요 기능

- 🚀 **고성능**: Turbopack을 사용한 빠른 개발 환경
- 🎯 **타입 안전**: TypeScript로 작성된 완전 타입 안전한 코드
- 🧩 **모듈화**: 공유 컴포넌트 라이브러리 활용
- 📱 **반응형**: 모바일 퍼스트 디자인
- 🧪 **통합 테스트**: 내부 패키지들의 실제 동작 확인 (utils-common, node-utils, browser-utils)

## 개발 가이드라인

### 코드 스타일

- ESLint 규칙 준수 (`@repo/eslint-config` 사용)
- TypeScript strict 모드 활성화
- CSS Modules 사용 권장

### 페이지 및 컴포넌트 작성

```tsx
// app/example/page.tsx
import { Button } from "@repo/ui/button";
import { isEmptyString } from "@repo/utils-common/string";
import { getMemoryInfo } from "@repo/browser-utils/bom";

export default function ExamplePage() {
  const memoryInfo = getMemoryInfo();

  return (
    <div>
      <h1>예제 페이지</h1>
      <Button>클릭하세요</Button>
      <p>문자열 검사: {isEmptyString("") ? "빈 문자열" : "일반 문자열"}</p>
      {memoryInfo.isSupported && (
        <p>메모리 사용량: {memoryInfo.usedJSHeapSize} bytes</p>
      )}
    </div>
  );
}
```

### 내부 패키지 활용

이 웹 애플리케이션은 다음 내부 패키지들을 활용하여 기능을 구현합니다:

- **`@repo/utils-common`**: 범용 유틸리티 함수 (브라우저 + Node.js 환경)
- **`@repo/node-utils`**: Node.js 전용 유틸리티 함수 (서버 컴포넌트에서 사용)
- **`@repo/browser-utils`**: 브라우저 전용 유틸리티 함수 (클라이언트 컴포넌트에서 사용)
- **`@repo/ui`**: 공유 UI 컴포넌트 라이브러리

실제 사용 예제는 홈페이지(`app/page.tsx`)와 테스트 컴포넌트(`containers/TestBrowserUtils`)에서 확인할 수 있습니다.

## 배포

이 애플리케이션은 Vercel에 배포하는 것이 권장됩니다:

1. Vercel 계정에 연결
2. 저장소 import
3. 빌드 설정은 자동으로 감지됨

자세한 배포 방법은 [Next.js 배포 가이드](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.
