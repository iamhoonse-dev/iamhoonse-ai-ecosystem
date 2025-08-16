# Docs App

iamhoonse AI Ecosystem의 통합 문서화 사이트입니다.

## 개요

이 앱은 프로젝트의 모든 문서, API 참조, 가이드 및 튜토리얼을 제공하는 종합적인 문서화 사이트입니다. Next.js 15를 기반으로 구축되어 빠르고 SEO 최적화된 문서 경험을 제공합니다.

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript
- **Bundler**: Turbopack
- **UI Components**: `@repo/ui` (내부 컴포넌트 라이브러리)
- **Documentation**: MDX (향후 계획)

## 개발 시작하기

### 프로젝트 루트에서 실행

```bash
# 모든 앱을 함께 실행
pnpm dev

# 이 앱만 실행
pnpm turbo dev --filter=docs
```

문서 사이트는 [http://localhost:3001](http://localhost:3001)에서 실행됩니다.

### 개별 실행 (앱 디렉토리에서)

```bash
cd apps/docs

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
apps/docs/
├── app/                 # Next.js App Router
│   ├── globals.css     # 전역 스타일
│   ├── layout.tsx      # 루트 레이아웃
│   └── page.tsx        # 문서 홈페이지
├── public/             # 정적 파일 및 이미지
└── package.json        # 패키지 설정
```

## 주요 기능

- 📚 **통합 문서**: 모든 프로젝트 문서를 한 곳에서 관리
- 🔍 **검색 최적화**: SEO 최적화된 문서 페이지
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 읽기 경험
- ⚡ **빠른 성능**: Turbopack과 Next.js 15의 최신 최적화 기능

## 문서 구조 (계획)

```
/docs
├── /getting-started     # 시작 가이드
├── /api-reference       # API 문서
├── /guides             # 사용자 가이드
├── /examples           # 코드 예제
├── /claude-code        # Claude Code 통합 가이드
└── /contributing       # 기여 가이드
```

## 개발 가이드라인

### 문서 작성

- 모든 문서는 한국어로 작성
- 명확하고 구체적인 예제 포함
- 코드 스니펫에는 한국어 주석 추가
- 단계별 가이드 형식 권장

### 코드 스타일

- ESLint 규칙 준수 (`@repo/eslint-config` 사용)
- TypeScript strict 모드 활성화
- 접근성(a11y) 고려한 마크업

### 문서 페이지 예제

```typescript
// app/api-reference/page.tsx
export default function ApiReferencePage() {
  return (
    <div className="container">
      <h1>API 참조</h1>
      <section>
        <h2>주요 API</h2>
        {/* API 문서 내용 */}
      </section>
    </div>
  )
}
```

## 향후 계획

- **MDX 통합**: Markdown 기반 문서 작성 시스템
- **검색 기능**: 문서 내 전체 검색 기능
- **다크 모드**: 사용자 선호에 따른 테마 지원
- **국제화**: 영어 문서 버전 제공

## 배포

문서 사이트는 Vercel을 통해 자동 배포됩니다:

1. `main` 브랜치 push 시 자동 배포
2. PR 생성 시 프리뷰 배포 생성
3. SEO 최적화를 위한 정적 생성 활용

자세한 문서화 가이드는 프로젝트 메인 README를 참조하세요.
