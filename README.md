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
│   ├── utils-common/  # 공통 유틸리티 함수 패키지
│   ├── node-utils/    # Node.js 전용 유틸리티 함수 패키지
│   ├── browser-utils/ # 브라우저 전용 유틸리티 함수 패키지
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

#### `@repo/utils-common`

- 공통 유틸리티 함수 라이브러리
- TypeScript로 작성된 재사용 가능한 유틸리티 함수
- **범용 환경 지원**: 브라우저, Node.js 모든 환경에서 동작
- Tree-shaking 지원으로 필요한 기능만 선택적 임포트
- ESM/CJS 모듈 형식 지원
- 카테고리별 함수 분리 (`string` 카테고리)

**주요 기능:**

- `isEmptyString`: 문자열 빈 값 검사 함수

**사용 예시:**

```typescript
// 전체 임포트
import { isEmptyString } from "@repo/utils-common";

// 카테고리별 임포트 (권장 - Tree-shaking 최적화)
import { isEmptyString } from "@repo/utils-common/string";

// 사용
isEmptyString(""); // true
isEmptyString("   "); // true
isEmptyString("hello"); // false
```

#### `@repo/node-utils`

- **Node.js 전용** 유틸리티 함수 라이브러리
- TypeScript로 작성된 서버사이드 전용 유틸리티 함수
- **Node.js 22+ 환경에서만 동작** (node: 프로토콜 사용)
- Tree-shaking 지원으로 필요한 기능만 선택적 임포트
- ESM/CJS 모듈 형식 지원
- 카테고리별 함수 분리 (`fs` 카테고리)

**주요 기능:**

- `ls`: Unix ls 명령어와 유사한 디렉토리 목록 조회 함수
  - 파일/디렉토리 정보 제공 (이름, 경로, 타입, 크기, 수정시간)
  - 숨김 파일 포함 옵션
  - 정렬 기능 (디렉토리 우선, 알파벳순)
  - 상세한 에러 처리

**사용 예시:**

```typescript
// 카테고리별 임포트 (권장 - Tree-shaking 최적화)
import { ls } from "@repo/node-utils/fs";

// 사용
const entries = await ls("./");
console.log(
  entries.map((e) => `${e.name} (${e.isDirectory ? "dir" : "file"})`),
);

// 숨김 파일 포함
const allEntries = await ls("./", { includeHidden: true });

// 파일 정보 확인
entries.forEach((entry) => {
  console.log(
    `${entry.name}: ${entry.size} bytes, modified ${entry.modifiedTime}`,
  );
});
```

**유틸리티 패키지 비교:**

| 특징             | utils-common        | node-utils          | browser-utils    |
| ---------------- | ------------------- | ------------------- | ---------------- |
| **실행 환경**    | 브라우저 + Node.js  | Node.js 전용        | 브라우저 전용    |
| **Node.js 버전** | 범용                | 22+ 필수            | N/A              |
| **API 접근**     | Web API + 공통 기능 | Node.js 내장 모듈   | Browser API      |
| **용도**         | 범용 유틸리티       | 서버사이드 전용     | 클라이언트 전용  |
| **예시 기능**    | 문자열, 배열 처리   | 파일시스템, OS 기능 | BOM, 메모리 정보 |

#### `@repo/browser-utils`

- **브라우저 전용** 유틸리티 함수 라이브러리
- TypeScript로 작성된 클라이언트사이드 전용 유틸리티 함수
- **브라우저 환경에서만 동작** (window 객체 의존)
- Tree-shaking 지원으로 필요한 기능만 선택적 임포트
- ESM/CJS/UMD 모듈 형식 지원
- 카테고리별 함수 분리 (`bom` 카테고리)

**주요 기능:**

- `getMemoryInfo`: 브라우저 메모리 정보 조회 함수
  - Performance API와 Navigator API를 활용한 메모리 상태 조회
  - JS 힙 크기, 디바이스 메모리 용량 등의 정보 제공
  - 브라우저 호환성 자동 감지
  - Chrome/Chromium 기반 브라우저에서 최적화

**사용 예시:**

```typescript
// 카테고리별 임포트 (권장 - Tree-shaking 최적화)
import { getMemoryInfo } from "@repo/browser-utils/bom";

// 사용
const memInfo = getMemoryInfo();

if (memInfo.isSupported) {
  console.log(`사용 중인 JS 힙 크기: ${memInfo.usedJSHeapSize} bytes`);
  console.log(`총 JS 힙 크기: ${memInfo.totalJSHeapSize} bytes`);
  console.log(`디바이스 메모리: ${memInfo.deviceMemory} GB`);
  console.log(`정보 출처: ${memInfo.source}`);
} else {
  console.log("메모리 정보를 사용할 수 없습니다.");
}
```

**browser-utils와 다른 패키지와의 차이점:**

- **utils-common**: 브라우저와 Node.js 모두에서 동작하는 범용 유틸리티
- **node-utils**: Node.js 환경에서만 동작하는 서버사이드 전용 유틸리티
- **browser-utils**: 브라우저 환경에서만 동작하는 클라이언트사이드 전용 유틸리티

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
