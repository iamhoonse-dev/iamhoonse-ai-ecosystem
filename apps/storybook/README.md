# Storybook UI 컴포넌트 개발 환경

> @repo/react-ui 패키지의 UI 컴포넌트들을 개발하고 문서화하기 위한 Storybook 9.1.3 기반 개발 환경입니다.

이 Storybook 앱은 `packages/react-ui` 패키지에서 개발되는 모든 UI 컴포넌트들을 시각적으로 확인하고 테스트할 수 있는 환경을 제공합니다. shadcn/ui 기반 컴포넌트와 커스텀 컴포넌트를 모두 지원하며, 실시간 개발과 자동 문서 생성 기능을 제공합니다.

## 주요 특징

- **🎨 Storybook 9.1.3**: 최신 Storybook 버전으로 향상된 개발자 경험
- **⚡ Vite 번들러**: 빠른 개발 서버와 Hot Module Replacement 지원
- **🔄 실시간 통합**: `packages/react-ui/src/` 하위의 모든 `.stories.tsx` 파일 자동 로드
- **🎯 Path Alias**: `@` 별칭으로 `packages/react-ui/src` 경로 간편 접근
- **📚 자동 문서화**: 컴포넌트 props와 사용법 자동 문서 생성
- **♿ 접근성 검사**: Storybook a11y 애드온으로 접근성 준수 검증
- **🧪 통합 테스팅**: Vitest 기반 컴포넌트 테스팅 환경

## 시작하기

### 개발 서버 실행

프로젝트 루트에서 Turborepo를 통해 실행하는 것을 권장합니다:

```bash
# 프로젝트 루트에서 실행 (권장)
pnpm turbo dev --filter=storybook

# 또는 Storybook 앱 디렉토리에서 직접 실행
cd apps/storybook
pnpm dev
```

개발 서버가 실행되면 [http://localhost:6006](http://localhost:6006)에서 Storybook 인터페이스에 접근할 수 있습니다.

### 프로덕션 빌드

```bash
# 프로젝트 루트에서 실행
pnpm turbo build --filter=storybook

# 또는 Storybook 앱 디렉토리에서 직접 실행
cd apps/storybook
pnpm build:storybook
```

빌드된 정적 파일들은 `storybook-static/` 디렉토리에 생성됩니다.

## 컴포넌트 확인하기

### 사용 가능한 컴포넌트 카테고리

Storybook에서 확인할 수 있는 컴포넌트들:

#### 1. **shadcn/ui 기반 컴포넌트** (`@repo/react-ui/base`)

- **ShadcnButton**: shadcn/ui Button 컴포넌트
  - 8가지 variant: default, destructive, outline, secondary, ghost, link
  - 4가지 size: default, sm, lg, icon
  - Class Variance Authority 기반 타입 안전한 스타일 시스템
  - Radix UI 기반 완전한 접근성 지원

#### 2. **커스텀 컴포넌트** (`@repo/react-ui/common`)

- **Button**: 기존 커스텀 버튼 컴포넌트 (하위 호환성 유지)
  - variant: primary, secondary, outline
  - size: sm, md, lg

#### 3. **유틸리티 함수** (`@repo/react-ui/lib`)

- **cn**: clsx와 tailwind-merge를 결합한 클래스명 유틸리티 함수

### 컴포넌트 스토리 구성

각 컴포넌트는 다음과 같은 스토리들을 제공합니다:

- **Default**: 기본 사용법 예시
- **Variants**: 사용 가능한 모든 variant 미리보기
- **Sizes**: 사용 가능한 모든 size 미리보기
- **Interactive**: 대화형 컨트롤로 실시간 속성 변경 가능
- **Accessibility**: 접근성 기능 및 키보드 네비게이션 테스트

## Storybook 애드온

이 프로젝트에서 사용하는 Storybook 애드온들:

### 📖 `@storybook/addon-docs`

- 컴포넌트 props와 TypeScript 타입 자동 문서화
- JSDoc 주석을 활용한 상세한 설명 제공
- 사용 예시 코드 자동 생성

### ♿ `@storybook/addon-a11y`

- WCAG 가이드라인 준수 검사
- 색상 대비, 키보드 네비게이션, 스크린 리더 호환성 검증
- 접근성 이슈 실시간 리포팅

### 🧪 `@storybook/addon-vitest`

- Storybook 스토리를 Vitest 테스트로 변환
- 컴포넌트 동작 검증 및 회귀 테스트
- 브라우저 환경에서의 실제 렌더링 테스트

### 🎯 `@storybook/addon-onboarding`

- Storybook 사용법 가이드
- 새로운 팀 멤버를 위한 온보딩 지원

## 새로운 스토리 작성하기

### 스토리 파일 위치

새로운 컴포넌트의 스토리는 해당 컴포넌트와 동일한 디렉토리에 작성합니다:

```
packages/react-ui/src/
├── base/
│   └── shadcn-ui/
│       ├── button.tsx
│       └── button.stories.tsx  # ← 스토리 파일
├── common/
│   └── Button/
│       ├── index.tsx
│       └── index.stories.tsx   # ← 스토리 파일
└── lib/
    └── utils.ts
```

### 스토리 작성 예시

```tsx
// packages/react-ui/src/base/example/example.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ExampleComponent } from "./example";

const meta: Meta<typeof ExampleComponent> = {
  title: "Base/Example", // Storybook 사이드바에서의 경로
  component: ExampleComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: "예시 컴포넌트",
    variant: "default",
  },
};

// 모든 variant 미리보기
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <ExampleComponent variant="default">기본</ExampleComponent>
      <ExampleComponent variant="primary">주요</ExampleComponent>
      <ExampleComponent variant="secondary">보조</ExampleComponent>
    </div>
  ),
};
```

### 스토리 작성 가이드라인

1. **파일명**: 컴포넌트 파일과 동일한 이름에 `.stories.tsx` 확장자 추가
2. **제목 규칙**: `카테고리/컴포넌트명` 형식 (예: `Base/ShadcnButton`, `Common/Button`)
3. **autodocs 태그**: 자동 문서 생성을 위해 `tags: ['autodocs']` 포함
4. **접근성 고려**: 다양한 상태와 사용 시나리오를 포함한 포괄적인 스토리 작성
5. **TypeScript**: 타입 안전성을 위한 적절한 타입 정의

## 개발 워크플로우

### 1. 컴포넌트 개발 사이클

```bash
# 1. react-ui 패키지에서 새 컴포넌트 개발
# packages/react-ui/src/base/new-component/index.tsx

# 2. 컴포넌트 스토리 작성
# packages/react-ui/src/base/new-component/index.stories.tsx

# 3. Storybook 개발 서버 실행
pnpm turbo dev --filter=storybook

# 4. http://localhost:6006에서 실시간 확인
# 5. 컴포넌트와 스토리가 자동으로 Hot Reload 적용
```

### 2. 스타일링 개발

TailwindCSS 스타일 변경사항도 실시간으로 반영됩니다:

- `packages/react-ui/src/` 하위의 컴포넌트 스타일 변경
- `@repo/tailwind-config` 패키지의 공유 스타일 변경
- Storybook에서 즉시 확인 가능

### 3. 접근성 테스트

1. Storybook에서 컴포넌트 스토리 선택
2. **Accessibility** 패널에서 자동 검사 결과 확인
3. 키보드 네비게이션 테스트 (Tab, Enter, Space, Arrow keys)
4. 스크린 리더 호환성 검증

## 기술 스택

- **Storybook**: 9.1.3
- **Build Tool**: Vite 7.1.2
- **React**: 19.1.1
- **TypeScript**: 5.8.3
- **Testing**: Vitest 3.2.4 + Playwright 1.55.0
- **Linting**: ESLint 9.33.0 + TypeScript ESLint 8.39.1

## 참고사항

### Path Alias 설정

이 Storybook은 다음과 같은 path alias를 사용합니다:

```typescript
// 이 import는
import { ShadcnButton } from "@/base/shadcn-ui/button";

// 실제로는 다음 경로를 참조합니다
import { ShadcnButton } from "packages/react-ui/src/base/shadcn-ui/button";
```

### 의존성 관리

Storybook 앱은 `packages/react-ui` 패키지를 workspace 의존성으로 사용합니다:

```json
{
  "dependencies": {
    "@repo/react-ui": "workspace:*"
  }
}
```

이를 통해 react-ui 패키지의 변경사항이 Storybook에 즉시 반영됩니다.

### 성능 최적화

- **Tree Shaking**: 사용하지 않는 컴포넌트는 번들에 포함되지 않습니다
- **Code Splitting**: 스토리별로 코드가 분할되어 로딩 성능이 최적화됩니다
- **HMR**: Hot Module Replacement로 빠른 개발 사이클 제공

## 문제해결

### 자주 발생하는 이슈

1. **스토리 파일이 로드되지 않는 경우**
   - 파일 경로가 `packages/react-ui/src/` 하위에 있는지 확인
   - 파일명이 `.stories.tsx` 패턴을 따르는지 확인

2. **Path alias 에러**
   - `@` 별칭이 `packages/react-ui/src`를 가리키는지 Vite 설정 확인
   - 절대 경로 대신 상대 경로 사용 고려

3. **스타일이 적용되지 않는 경우**
   - `@repo/react-ui/styles.css`가 올바르게 import 되었는지 확인
   - TailwindCSS 클래스명이 `ui:` prefix를 사용하는지 확인

### 도움 요청

문제가 해결되지 않는 경우:

1. [GitHub Issues](https://github.com/iamhoonse-dev/iamhoonse-ai-ecosystem/issues)에 버그 리포트 작성
2. Storybook 로그 및 브라우저 콘솔 에러 메시지 포함
3. 재현 가능한 최소한의 예시 제공

---

> 이 Storybook은 `@repo/react-ui` 패키지의 UI 컴포넌트 개발을 위한 핵심 도구입니다. 새로운 컴포넌트를 개발할 때는 항상 해당 스토리도 함께 작성하여 문서화와 테스트를 동시에 진행하시기 바랍니다.
