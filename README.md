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
│   ├── react-ui/      # React UI 컴포넌트 라이브러리
│   ├── react-utils/   # React 커스텀 훅 및 유틸리티 패키지 (구성 최적화 완료)
│   ├── common-utils/  # 공통 유틸리티 함수 패키지
│   ├── node-utils/    # Node.js 전용 유틸리티 함수 패키지
│   └── browser-utils/ # 브라우저 전용 유틸리티 함수 패키지
├── configs/
│   ├── eslint-config/ # ESLint 설정 패키지
│   ├── typescript-config/ # TypeScript 설정 패키지
│   └── tailwindcss-config/ # TailwindCSS 설정 패키지
└── .claude/
    ├── agents/        # Claude Code AI 에이전트
    └── commands/      # Slash 커맨드 정의
```

## 최근 개선사항

### TailwindCSS 모노레포 통합 (2025년 1월)

**통합 스타일링 시스템 구축:**

- **`@repo/tailwindcss-config` 패키지 신설**: 프로젝트 전체에서 공유하는 TailwindCSS 설정 및 테마 관리
- **React UI 패키지 스타일 빌드 시스템**: `react-ui` 패키지에서 TailwindCSS 기반 컴포넌트 스타일을 빌드하여 다른 앱에서 `@repo/react-ui/styles.css` import로 재사용
- **Prefix 기반 스타일 격리**: UI 컴포넌트는 `ui:` prefix를 사용하여 스타일 충돌 방지
- **Hot Module Replacement (HMR) 지원**: 개발 환경에서 스타일 변경 시 실시간 반영
- **통합 개발 워크플로우**: `turbo dev` 명령으로 스타일 빌드와 컴포넌트 개발이 동시 실행

이러한 TailwindCSS 통합으로 일관된 디자인 시스템을 유지하면서도 효율적인 스타일 관리가 가능해졌습니다.

### 프로젝트 구조 개선 (2025년 1월)

**설정 패키지 전용 디렉토리 신설:**

- **configs 디렉토리 도입**: `eslint-config`, `typescript-config`, `tailwindcss-config` 같은 설정 관련 패키지들을 별도의 `configs/` 디렉토리로 이동
- **명확한 역할 분리**: 비즈니스 로직 패키지(`packages/`)와 설정 패키지(`configs/`) 간의 명확한 구분
- **pnpm workspace 업데이트**: `pnpm-workspace.yaml`에 `configs/*` 경로 추가로 monorepo 구조 최적화
- **ESLint 버전 안정화**: 9.33.0에서 발생한 module export 이슈를 해결하기 위해 9.32.0으로 다운그레이드

이러한 구조 개선으로 프로젝트의 논리적 구성이 더욱 명확해졌고, 새로운 개발자들이 프로젝트를 이해하기 쉬워졌습니다.

### 패키지 설정 최적화 (2025년 1월)

**@repo/react-utils 패키지 설정 일관성 개선:**

- **TypeScript 설정 통일**: `tsconfig.json`이 `@repo/typescript-config/base.json` 대신 `@repo/typescript-config/react-library.json`을 상속하도록 수정하여 `@repo/react-ui` 패키지와 설정 일관성 확보
- **테스트 파일 제외 규칙 보완**: `.tsx` 확장자 테스트 파일(`.test.tsx`, `.spec.tsx`)을 TypeScript 컴파일 대상에서 제외하도록 설정 추가
- **번들링 최적화**: `tsup.config.ts`의 external 의존성에 `react/jsx-runtime` 추가로 React JSX 런타임의 외부 처리 최적화

이러한 설정 개선으로 React 관련 패키지들(`react-ui`, `react-utils`) 간의 구성 일관성이 향상되었고, 더 안정적인 빌드 환경을 제공합니다.

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

#### `@repo/react-ui`

- **React 전용** UI 컴포넌트 라이브러리
- TypeScript로 작성된 현대적인 React 컴포넌트
- **React 19+ 환경에서만 동작** (peerDependencies 의존성)
- **TailwindCSS 통합**: `ui:` prefix를 사용한 스타일 격리 및 CSS 빌드 시스템
- **스타일 배포**: 컴포넌트와 함께 컴파일된 CSS를 패키지에 포함하여 배포
- Tree-shaking 지원으로 필요한 컴포넌트만 선택적 임포트
- ESM/CJS/UMD 모듈 형식 지원
- 카테고리별 컴포넌트 분리 (`common` 카테고리)
- forwardRef와 같은 최신 React 패턴 적용

**주요 컴포넌트:**

- `Button`: 다양한 variant(primary, secondary, outline)와 size(sm, md, lg)를 지원하는 버튼 컴포넌트
  - 접근성 고려한 설계 (focus-visible, disabled 상태 지원)
  - Tailwind CSS 클래스 기반 스타일링
  - HTML 기본 button 속성 완벽 지원
  - forwardRef를 통한 ref 전달 지원

**TailwindCSS 스타일 사용:**

```tsx
// 앱의 레이아웃 파일에서 스타일시트 import 필요
// apps/web/app/layout.tsx
import "@repo/react-ui/styles.css";
```

**사용 예시:**

```tsx
// 카테고리별 임포트 (권장 - Tree-shaking 최적화)
import { Button } from "@repo/react-ui/common";

// 전체 임포트도 지원
import { Button } from "@repo/react-ui";

// 기본 사용
function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        기본 버튼
      </Button>
      <Button variant="secondary" size="lg">
        보조 버튼
      </Button>
      <Button variant="outline" size="sm">
        외곽선 버튼
      </Button>
    </div>
  );
}

// ref와 이벤트 핸들러 사용
function AdvancedApp() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <Button
      ref={buttonRef}
      variant="primary"
      onClick={() => alert("클릭됨!")}
      disabled={false}
    >
      고급 버튼
    </Button>
  );
}
```

#### `@repo/react-utils`

- **React 전용** 커스텀 훅 및 유틸리티 라이브러리
- TypeScript로 작성된 React 개발에 특화된 유틸리티 함수
- **React 19+ 환경에서만 동작** (peerDependencies 의존성)
- Tree-shaking 지원으로 필요한 기능만 선택적 임포트
- ESM/CJS 모듈 형식 지원
- 카테고리별 함수 분리 (`hooks` 카테고리)
- **설정 일관성**: `@repo/react-ui`와 동일한 TypeScript 설정 (`react-library.json`) 사용

**주요 기능:**

- `useInterval`: 일시정지/재개가 가능한 interval 커스텀 훅
  - 컴포넌트 라이프사이클에 안전하게 통합된 interval 관리
  - delay 값이 `null`일 때 자동 일시정지
  - 메모리 누수 방지를 위한 자동 정리

**기술적 특징:**

- **React 19+ JSX 런타임 지원**: 최신 React JSX 변환 런타임 완전 지원
- **TypeScript 설정 일관성**: `@repo/react-ui`와 동일한 React 라이브러리 전용 TypeScript 설정 적용
- **테스트 파일 분리**: `.tsx` 확장자 테스트 파일이 프로덕션 빌드에서 완전히 제외됨
- **번들 크기 최적화**: React 관련 모든 런타임(`react`, `react-dom`, `react/jsx-runtime`)이 외부 의존성으로 처리되어 최적화된 번들 크기 제공

**사용 예시:**

```tsx
// 카테고리별 임포트 (권장 - Tree-shaking 최적화)
import { useInterval } from "@repo/react-utils/hooks";

// 전체 임포트도 지원
import { useInterval } from "@repo/react-utils";

// 사용 예시
function Timer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // 1초마다 카운터 증가, isRunning이 false일 때 일시정지
  useInterval(
    () => {
      setCount((count) => count + 1);
    },
    isRunning ? 1000 : null,
  );

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "일시정지" : "재개"}
      </button>
    </div>
  );
}
```

### Configs

#### `@repo/eslint-config`

- 프로젝트 전체에서 사용하는 ESLint 설정
- Next.js와 Prettier 설정 포함
- `configs/eslint-config/` 디렉토리에 위치

#### `@repo/common-utils`

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
import { isEmptyString } from "@repo/common-utils";

// 카테고리별 임포트 (권장 - Tree-shaking 최적화)
import { isEmptyString } from "@repo/common-utils/string";

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

**패키지 비교표:**

| 특징                | common-utils        | react-utils            | react-ui               | node-utils          | browser-utils    |
| ------------------- | ------------------- | ---------------------- | ---------------------- | ------------------- | ---------------- |
| **실행 환경**       | 브라우저 + Node.js  | React 19+ 전용         | React 19+ 전용         | Node.js 전용        | 브라우저 전용    |
| **React 의존성**    | 없음                | React 19+ 필수         | React 19+ 필수         | 없음                | 없음             |
| **Node.js 버전**    | 범용                | 22+ (개발 환경)        | 22+ (개발 환경)        | 22+ 필수            | N/A              |
| **TypeScript 설정** | base.json           | **react-library.json** | **react-library.json** | base.json           | base.json        |
| **JSX 런타임**      | N/A                 | **react-jsx 완전지원** | **react-jsx 완전지원** | N/A                 | N/A              |
| **API 접근**        | Web API + 공통 기능 | React Hooks API        | React Components API   | Node.js 내장 모듈   | Browser API      |
| **용도**            | 범용 유틸리티       | React 컴포넌트 전용    | React UI 컴포넌트      | 서버사이드 전용     | 클라이언트 전용  |
| **예시 기능**       | 문자열, 배열 처리   | 커스텀 훅              | Button, Input 등       | 파일시스템, OS 기능 | BOM, 메모리 정보 |

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

**각 패키지의 특징 및 차이점:**

- **common-utils**: 브라우저와 Node.js 모두에서 동작하는 범용 유틸리티
- **react-utils**: React 컴포넌트에서만 사용 가능한 커스텀 훅 및 React 전용 유틸리티
- **react-ui**: React 애플리케이션에서 사용하는 UI 컴포넌트 라이브러리 (Button, Input 등)
- **node-utils**: Node.js 환경에서만 동작하는 서버사이드 전용 유틸리티
- **browser-utils**: 브라우저 환경에서만 동작하는 클라이언트사이드 전용 유틸리티

#### `@repo/tailwind-config`

- 프로젝트 전체에서 공유하는 TailwindCSS 스타일 패키지
- `configs/tailwindcss-config/` 디렉토리에 위치
- **공유 스타일 시트**: `shared-styles.css`를 통한 일관된 디자인 토큰 제공
- **커스텀 테마 변수**: CSS 변수로 정의된 커스텀 색상 (blue-1000, purple-1000, red-1000)
- **PostCSS 설정**: PostCSS 구성 파일도 함께 제공

**사용법:**

```css
/* 공유 스타일 import */
@import "@repo/tailwind-config";

/* 또는 직접 참조 */
@import "@repo/tailwind-config/shared-styles.css";
```

#### `@repo/typescript-config`

- 공유 TypeScript 설정
- `configs/typescript-config/` 디렉토리에 위치
- 다양한 환경별 설정 파일 제공:
  - `base.json`: 기본 TypeScript 설정 (범용 패키지용)
  - `nextjs.json`: Next.js 애플리케이션 전용 설정
  - `react-library.json`: **React 라이브러리 전용 설정** (JSX 지원 포함)
- React 패키지들(`react-ui`, `react-utils`)은 `react-library.json`을 상속하여 일관된 React 개발 환경 제공

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
