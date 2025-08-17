# iamhoonse AI Ecosystem

> AI 기반 개발 워크플로우와 도구들을 위한 모노레포 프로젝트

이 프로젝트는 AI 기반 개발 환경을 구축하기 위한 통합 생태계입니다. Claude Code와의 통합을 통해 자동화된 문서 업데이트, PR 생성, 코드 리뷰 등의 기능을 제공합니다.

## 주요 특징

- 🤖 **Claude Code 통합**: AI 기반 개발 워크플로우 자동화
- 📝 **한국어 기술 문서**: 한국 개발자를 위한 전문 기술 문서 작성
- 🎯 **Git 훅 스크립트**: 커밋 전 자동 코드 품질 검사 및 규약 준수
- ⚡ **Turborepo**: 고성능 모노레포 빌드 시스템
- 🔧 **TypeScript**: 타입 안전한 개발 환경
- 📦 **pnpm**: 효율적인 패키지 관리

## 프로젝트 구조

```
iamhoonse-ai-ecosystem/
├── apps/
│   ├── docs/          # 문서 사이트 (Next.js)
│   └── web/           # 메인 웹 애플리케이션 (Next.js)
├── packages/
│   ├── ui/            # 공유 React 컴포넌트 라이브러리
│   ├── eslint-config/ # ESLint 설정 패키지
│   └── typescript-config/ # TypeScript 설정 패키지
└── .claude/
    ├── agents/        # Claude Code AI 에이전트
    └── commands/      # Slash 커맨드 정의
```

## Claude Code 통합 기능

### AI 에이전트

프로젝트에 포함된 전문 AI 에이전트들:

- **korean-tech-writer**: 한국어 기술 문서 작성 전문가
- **architecture-guru**: 시스템 아키텍처 설계 전문가
- **performance-code-auditor**: 코드 성능 최적화 전문가
- **security-vulnerability-auditor**: 보안 취약점 분석 전문가
- **workflow-efficiency-guru**: 개발 워크플로우 최적화 전문가
- **conventional-commit-writer**: Conventional Commits 규약에 따른 커밋 메시지 작성 전문가
- **frontend-ecosystem-guru**: 모던 프론트엔드 개발 (React, Next.js, TailwindCSS, Vite) 전문가
- **js-ts-comment-auditor**: JavaScript/TypeScript 코드 주석 검토 및 개선 전문가

### Slash 커맨드

- `/update-documents`: 저장소 문서 자동 업데이트
- `/create-pr`: 자동화된 풀 리퀘스트 생성
- `/write-commit-message`: Conventional Commits 규약에 따른 커밋 메시지 자동 생성

## 시작하기

### 필수 요구사항

- Node.js 22 이상
- pnpm 9.0.0
- Claude Code CLI (선택사항)

### 설치

```bash
# 저장소 클론
git clone https://github.com/iamhoonse-dev/iamhoonse-ai-ecosystem.git
cd iamhoonse-ai-ecosystem

# Node.js 버전 설정 (nvm 사용 시)
nvm use

# 의존성 설치
pnpm install
```

**💡 Node.js 버전 관리**

프로젝트는 `.nvmrc` 파일을 통해 권장 Node.js 버전(22)을 명시합니다:

- **nvm 사용 시**: `nvm use` 명령어로 자동으로 올바른 버전 사용
- **수동 관리 시**: Node.js 22 이상 버전이 설치되어 있는지 확인
- **CI/CD 환경**: `.nvmrc` 파일을 참조하여 일관된 런타임 환경 보장

### 개발 서버 실행

```bash
# 모든 앱 개발 서버 실행
pnpm dev

# 특정 앱만 실행
pnpm turbo dev --filter=web
pnpm turbo dev --filter=docs
```

### 빌드

```bash
# 모든 패키지 빌드
pnpm build

# 특정 패키지 빌드
pnpm turbo build --filter=web
```

## 개발 워크플로우

### 코드 품질 관리

```bash
# 린트 검사
pnpm lint:check

# 린트 오류 자동 수정
pnpm lint:fix

# 타입 체크
pnpm check-types

# 코드 포맷팅 확인
pnpm format:check

# 코드 포맷팅 적용
pnpm format:fix
```

**💡 자동 품질 검사**

Git Hook Scripts가 설정되어 있어 커밋 시 자동으로 다음 검사가 실행됩니다:

- 린트 규칙 검사 (`lint:check`)
- 코드 포맷팅 검사 (`format:check`)
- TypeScript 타입 검사 (`check-types`)
- 커밋 메시지 규약 검사 (Conventional Commits)

검사에 실패하면 커밋이 거부되므로 사전에 `pnpm lint:fix`와 `pnpm format:fix`로 문제를 해결하세요.

### Claude Code 활용

1. **문서 업데이트**: `/update-documents` 명령어로 자동 문서 업데이트
2. **PR 생성**: `/create-pr` 명령어로 자동화된 풀 리퀘스트 생성
3. **커밋 메시지 작성**: `/write-commit-message` 명령어로 Conventional Commits 규약에 따른 커밋 메시지 자동 생성
4. **AI 리뷰**: 코드 변경사항에 대한 AI 기반 리뷰 및 피드백

#### 커밋 메시지 자동화 워크플로우

```bash
# 1. 변경사항 스테이징
git add .

# 2. Claude Code로 커밋 메시지 생성
/write-commit-message

# 3. 생성된 메시지로 커밋 (자동 품질 검사 포함)
git commit -m "생성된-커밋-메시지"
```

**💡 자동 커밋 메시지 생성 기능**

- **AI 기반 분석**: 스테이징된 파일의 변경사항을 자동으로 분석
- **Conventional Commits**: 표준 커밋 메시지 규약 자동 적용
- **한국어/영어 지원**: 프로젝트 컨텍스트에 맞는 언어 선택
- **타입 자동 분류**: feat, fix, docs, chore 등 적절한 타입 자동 선택

## 패키지 상세

### Apps

#### `docs`

- Next.js 기반 문서 사이트
- 프로젝트 문서화 및 API 레퍼런스 제공

#### `web`

- 메인 웹 애플리케이션
- Next.js App Router 사용

### Packages

#### `@repo/ui`

- 공유 React 컴포넌트 라이브러리
- TypeScript로 작성된 재사용 가능한 UI 컴포넌트

#### `@repo/eslint-config`

- 프로젝트 전체에서 사용하는 ESLint 설정
- Next.js와 Prettier 설정 포함

#### `@repo/typescript-config`

- 공유 TypeScript 설정
- 다양한 환경별 설정 파일 제공

## 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. 풀 리퀘스트를 생성합니다

### 개발 가이드라인

- 모든 코드는 TypeScript로 작성
- ESLint와 Prettier 규칙 준수
- 커밋 메시지는 [Conventional Commits](https://www.conventionalcommits.org/) 형식 사용
- 새로운 기능에 대한 문서 작성 필수

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 연락처

- GitHub: [@iamhoonse-dev](https://github.com/iamhoonse-dev)
- Email: contact@iamhoonse.com

---

> 이 프로젝트는 AI와 인간 개발자의 협업을 통해 더 나은 개발 경험을 만들어가는 것을 목표로 합니다.
