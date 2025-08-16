# 기여 가이드

> iamhoonse AI Ecosystem 프로젝트에 기여해주셔서 감사합니다! 🎉

이 문서는 프로젝트에 효과적으로 기여하는 방법을 안내합니다. 궁금한 점이 있으시면 언제든지 이슈를 생성하거나 연락주세요.

## 목차

- [기여하기 전에](#기여하기-전에)
- [개발 환경 설정](#개발-환경-설정)
- [프로젝트 구조 이해하기](#프로젝트-구조-이해하기)
- [개발 워크플로우](#개발-워크플로우)
- [코딩 스타일 가이드라인](#코딩-스타일-가이드라인)
- [커밋 메시지 규칙](#커밋-메시지-규칙)
- [풀 리퀘스트 가이드](#풀-리퀘스트-가이드)
- [이슈 리포팅](#이슈-리포팅)
- [코드 리뷰 프로세스](#코드-리뷰-프로세스)
- [테스트 가이드라인](#테스트-가이드라인)
- [문서화 요구사항](#문서화-요구사항)
- [Claude Code와 함께 작업하기](#claude-code와-함께-작업하기)
- [커밋 메시지 자동화](#커밋-메시지-자동화)
- [패키지별 기여 가이드](#패키지별-기여-가이드)

## 기여하기 전에

### 행동 강령

모든 기여자는 [행동 강령](CODE_OF_CONDUCT.md)을 준수해야 합니다. 상호 존중과 포용적인 커뮤니티 문화를 유지해주세요.

### 기여 유형

다음과 같은 방법으로 기여할 수 있습니다:

- 🐛 **버그 수정**: 발견한 버그를 수정
- ✨ **새로운 기능**: 새로운 기능 개발
- 📝 **문서 개선**: README, API 문서, 가이드 작성/개선
- 🎨 **UI/UX 개선**: 사용자 인터페이스 및 경험 개선
- ⚡ **성능 최적화**: 코드 성능 개선
- 🔒 **보안 강화**: 보안 취약점 수정
- 🧪 **테스트 추가**: 테스트 커버리지 개선
- 🛠️ **개발 도구**: 개발 환경 및 도구 개선

## 개발 환경 설정

### 필수 요구사항

프로젝트 개발을 위해 다음이 필요합니다:

- **Node.js**: 18.0.0 이상 (LTS 권장)
- **pnpm**: 9.0.0 (정확한 버전 필수)
- **Git**: 최신 버전
- **Claude Code CLI**: AI 기반 개발을 위해 권장

### 1. 저장소 설정

```bash
# 1. 저장소 포크 및 클론
git clone https://github.com/YOUR_USERNAME/iamhoonse-ai-ecosystem.git
cd iamhoonse-ai-ecosystem

# 2. 원본 저장소를 upstream으로 추가
git remote add upstream https://github.com/iamhoonse-dev/iamhoonse-ai-ecosystem.git

# 3. 최신 변경사항 동기화
git fetch upstream
git checkout main
git merge upstream/main
```

### 2. 패키지 설치

```bash
# pnpm 버전 확인 (9.0.0이어야 함)
pnpm --version

# pnpm 버전이 다르다면 업데이트
npm install -g pnpm@9.0.0

# 의존성 설치
pnpm install
```

### 3. 개발 서버 실행

```bash
# 모든 앱 개발 서버 실행
pnpm dev

# 특정 앱만 실행
pnpm turbo dev --filter=web     # 웹 앱만
pnpm turbo dev --filter=docs    # 문서 사이트만
```

### 4. 개발 환경 검증

```bash
# 빌드 테스트
pnpm build

# 코드 품질 검사
pnpm lint
pnpm check-types
pnpm format:check
```

## 프로젝트 구조 이해하기

```
iamhoonse-ai-ecosystem/
├── apps/                          # 애플리케이션들
│   ├── docs/                     # 문서 사이트 (Next.js)
│   └── web/                      # 메인 웹 앱 (Next.js)
├── packages/                      # 공유 패키지들
│   ├── ui/                       # React 컴포넌트 라이브러리
│   ├── eslint-config/            # ESLint 설정
│   └── typescript-config/        # TypeScript 설정
├── .claude/                       # Claude Code 설정
│   ├── agents/                   # AI 에이전트들
│   └── commands/                 # 슬래시 커맨드
├── CONTRIBUTING.md               # 이 파일
├── CODE_OF_CONDUCT.md           # 행동 강령
├── SECURITY.md                   # 보안 정책
└── turbo.json                    # Turborepo 설정
```

### 핵심 설정 파일들

- **`turbo.json`**: Turborepo 빌드 파이프라인 설정
- **`pnpm-workspace.yaml`**: pnpm 워크스페이스 설정
- **`package.json`**: 루트 패키지 설정 및 스크립트

## 개발 워크플로우

### 1. 브랜치 전략

Git Flow를 기반으로 한 브랜치 전략을 사용합니다:

```bash
# 기능 개발
git checkout -b feat/새로운-기능명

# 버그 수정
git checkout -b fix/버그-설명

# 문서 작업
git checkout -b docs/문서-주제

# 리팩토링
git checkout -b refactor/리팩토링-내용

# 성능 개선
git checkout -b perf/성능-개선-내용

# 스타일 수정
git checkout -b style/스타일-수정-내용

# 테스트 추가
git checkout -b test/테스트-내용

# 빌드 관련
git checkout -b build/빌드-관련-변경

# CI/CD 관련
git checkout -b ci/ci-관련-변경

# 잡다한 작업
git checkout -b chore/작업-내용
```

### 2. 개발 프로세스

```bash
# 1. 최신 코드로 업데이트
git checkout main
git pull upstream main

# 2. 새 브랜치 생성
git checkout -b feat/my-awesome-feature

# 3. 개발 및 테스트
# 코드 작성...

# 4. 코드 품질 검사 (선택사항 - 커밋 시 자동 실행됨)
pnpm lint:check      # ESLint 검사
pnpm check-types     # TypeScript 타입 검사
pnpm format:check    # Prettier 포맷팅 검사

# 5. 자동 수정 (필요시)
pnpm lint:fix        # ESLint 오류 자동 수정
pnpm format:fix      # 포맷팅 자동 수정

# 6. 빌드 테스트
pnpm build

# 7. 커밋 메시지 생성 (선택사항: AI 자동 생성)
/write-commit-message  # AI로 커밋 메시지 생성

# 8. 변경사항 커밋 (자동 품질 검사 실행됨)
git add .
git commit -m "feat: 새로운 기능 추가"  # 커밋 메시지 규약 자동 검증

# 💡 참고: 커밋 시 자동으로 다음이 실행됩니다:
# - Pre-commit: lint:check, format:check, check-types
# - Commit-msg: 커밋 메시지 Conventional Commits 규약 검사

# 9. 브랜치 푸시
git push origin feat/my-awesome-feature
```

### 3. 품질 검사 도구들

| 명령어              | 목적        | 설명                            |
| ------------------- | ----------- | ------------------------------- |
| `pnpm lint:check`   | ESLint 검사 | 코드 스타일 및 잠재적 오류 검사 |
| `pnpm lint:fix`     | ESLint 수정 | ESLint 오류 자동 수정           |
| `pnpm check-types`  | 타입 검사   | TypeScript 타입 안전성 검사     |
| `pnpm format:check` | 포맷팅 검사 | Prettier 코드 포맷팅 검사       |
| `pnpm format:fix`   | 포맷팅 수정 | Prettier로 코드 자동 포맷팅     |
| `pnpm build`        | 빌드 테스트 | 전체 프로젝트 빌드 검증         |

**⚡ 자동 실행**: 위 명령어들 중 일부는 Git Hook Scripts에 의해 커밋 시 자동으로 실행됩니다.

## 코딩 스타일 가이드라인

### TypeScript 스타일

```typescript
// ✅ 좋은 예
interface UserProfile {
  readonly id: string;
  name: string;
  email: string;
  createdAt: Date;
  isActive?: boolean;
}

const createUser = async (profile: UserProfile): Promise<User> => {
  // 명확한 변수명 사용
  const sanitizedEmail = profile.email.toLowerCase().trim();

  // 조기 반환 패턴 사용
  if (!sanitizedEmail) {
    throw new Error("이메일이 필요합니다");
  }

  return await userService.create({
    ...profile,
    email: sanitizedEmail,
  });
};

// ❌ 나쁜 예
function createUser(p: any) {
  if (p.email) {
    return userService.create(p);
  } else {
    throw new Error("no email");
  }
}
```

### React 컴포넌트 스타일

```tsx
// ✅ 좋은 예
interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  onClick,
}) => {
  const buttonClass = cn(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors",
    {
      "bg-primary text-primary-foreground hover:bg-primary/90":
        variant === "primary",
      "bg-secondary text-secondary-foreground hover:bg-secondary/80":
        variant === "secondary",
      "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
    },
    {
      "h-8 px-3 text-sm": size === "sm",
      "h-10 px-4": size === "md",
      "h-12 px-6 text-lg": size === "lg",
    },
    {
      "pointer-events-none opacity-50": disabled,
    },
  );

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
```

### 네이밍 컨벤션

- **파일명**: kebab-case (`user-profile.tsx`, `api-client.ts`)
- **컴포넌트**: PascalCase (`UserProfile`, `ApiClient`)
- **함수/변수**: camelCase (`getUserProfile`, `apiClient`)
- **상수**: UPPER_SNAKE_CASE (`API_ENDPOINT`, `MAX_RETRY_COUNT`)
- **인터페이스**: PascalCase with `I` prefix (optional) (`UserProfile` 또는 `IUserProfile`)
- **타입**: PascalCase (`UserRole`, `ApiResponse`)

### 폴더 구조 패턴

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── ui/             # 기본 UI 컴포넌트
│   └── common/         # 공통 컴포넌트
├── hooks/              # 커스텀 훅
├── types/              # 타입 정의
├── utils/              # 유틸리티 함수
├── lib/                # 외부 라이브러리 설정
└── constants/          # 상수 정의
```

## 커밋 메시지 규칙

### Conventional Commits 사용

프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다.

#### 기본 형식

```
<타입>[선택적 스코프]: <설명>

[선택적 본문]

[선택적 푸터]
```

#### 타입 종류

| 타입       | 설명        | 예시                                 |
| ---------- | ----------- | ------------------------------------ |
| `feat`     | 새로운 기능 | `feat: 사용자 프로필 편집 기능 추가` |
| `fix`      | 버그 수정   | `fix: 로그인 폼 검증 오류 수정`      |
| `docs`     | 문서 변경   | `docs: API 문서 업데이트`            |
| `style`    | 코드 포맷팅 | `style: 들여쓰기 및 세미콜론 정리`   |
| `refactor` | 리팩토링    | `refactor: 사용자 서비스 로직 개선`  |
| `perf`     | 성능 개선   | `perf: 이미지 로딩 최적화`           |
| `test`     | 테스트 관련 | `test: 사용자 인증 테스트 추가`      |
| `build`    | 빌드 시스템 | `build: webpack 설정 업데이트`       |
| `ci`       | CI/CD 관련  | `ci: GitHub Actions 워크플로우 수정` |
| `chore`    | 기타 작업   | `chore: 패키지 의존성 업데이트`      |

#### 스코프 예시

```bash
# 특정 패키지나 영역 지정
feat(ui): Button 컴포넌트 variant 추가
fix(web): 메인 페이지 레이아웃 오류 수정
docs(api): 사용자 API 엔드포인트 문서화
chore(deps): eslint 버전 업데이트
```

#### 커밋 메시지 예시

```bash
# 간단한 기능 추가
feat: 다크모드 토글 기능 구현

# 상세한 설명이 필요한 경우
feat: 사용자 알림 시스템 구현

사용자가 중요한 이벤트에 대해 실시간 알림을 받을 수 있도록
WebSocket을 활용한 알림 시스템을 구현했습니다.

- 실시간 알림 수신 기능
- 알림 히스토리 관리
- 알림 설정 커스터마이징

Closes #123

# Breaking Change가 있는 경우
feat!: API 응답 형식 변경

BREAKING CHANGE: API 응답에서 user_id를 userId로 변경
기존 클라이언트 코드 업데이트가 필요합니다.
```

#### 커밋 메시지 작성 팁

**🤖 AI 자동 생성 방법 (추천)**

```bash
# 1. 변경사항 스테이징
git add .

# 2. AI로 커밋 메시지 생성
/write-commit-message

# 3. 생성된 메시지 확인 후 커밋
git commit -m "생성된-커밋-메시지"
```

**✍️ 수동 작성 가이드라인**

1. **제목은 50자 이내로 작성**
2. **명령문 현재 시제 사용** ("추가한다" ✅, "추가했다" ❌)
3. **한글로 작성** (팀 내 소통 언어)
4. **본문은 72자마다 줄바꿈**
5. **관련 이슈 번호 포함** (`Closes #123`, `Fixes #456`)

**📌 AI 생성의 장점**

- ✅ **일관성**: 항상 Conventional Commits 규약 준수
- ✅ **정확성**: 스테이징된 파일 분석을 통한 정확한 타입 분류
- ✅ **효율성**: 메시지 작성 시간 단축
- ✅ **학습 효과**: 좋은 커밋 메시지 예시로 학습 가능

## 풀 리퀘스트 가이드

### 1. PR 생성 전 체크리스트

- [ ] ~~코드가 ESLint 규칙을 통과하는가? (`pnpm lint:check`)~~ ✨ 자동 검사됨
- [ ] ~~TypeScript 타입 검사를 통과하는가? (`pnpm check-types`)~~ ✨ 자동 검사됨
- [ ] ~~코드 포맷팅이 올바른가? (`pnpm format:check`)~~ ✨ 자동 검사됨
- [ ] ~~커밋 메시지가 규칙에 맞는가?~~ ✨ 자동 검사됨
- [ ] 빌드가 성공하는가? (`pnpm build`)
- [ ] 관련 테스트가 작성되었는가?
- [ ] 문서가 업데이트되었는가?

**💡 Git Hook Scripts 덕분에 품질 검사 항목들이 커밋 시 자동으로 검증됩니다!**

### 2. PR 제목 및 설명

#### PR 제목 형식

```
<타입>: <간단한 설명>
```

#### PR 설명 템플릿

```markdown
## 개요

이 PR에서 수행한 작업에 대한 간단한 설명

## 변경사항

- [ ] 새로운 기능 A 추가
- [ ] 버그 B 수정
- [ ] 성능 개선 C

## 테스트

- [ ] 단위 테스트 추가/수정
- [ ] 통합 테스트 확인
- [ ] 수동 테스트 완료

## 스크린샷 (UI 변경이 있는 경우)

변경 전/후 스크린샷 또는 GIF

## 관련 이슈

Closes #123
Fixes #456

## 추가 정보

리뷰어가 알아야 할 특별한 사항이나 주의점
```

### 3. PR 생성 과정

```bash
# 1. 변경사항을 최신 main과 동기화
git checkout main
git pull upstream main
git checkout feat/my-feature
git merge main  # 또는 git rebase main

# 2. 최종 검사
pnpm lint
pnpm check-types
pnpm build

# 3. 푸시
git push origin feat/my-feature

# 4. GitHub에서 PR 생성
# 또는 Claude Code 사용
/create-pr
```

### 4. 자동화된 PR 생성 (Claude Code)

Claude Code의 `/create-pr` 명령어를 사용하면 자동으로 PR을 생성할 수 있습니다:

```bash
# Claude Code로 PR 자동 생성
/create-pr

# 명령어 실행 시 자동으로:
# - 변경사항 분석
# - 적절한 PR 제목 및 설명 생성
# - 체크리스트 검증
# - GitHub PR 생성
```

**🚀 전체 워크플로우 (커밋 메시지 자동화 포함)**

```bash
# 1. 개발 완료 후 스테이징
git add .

# 2. AI로 커밋 메시지 생성 및 커밋
/write-commit-message
git commit -m "생성된-메시지"

# 3. 브랜치 푸시
git push origin feat/my-feature

# 4. AI로 PR 생성
/create-pr
```

## 이슈 리포팅

### 1. 버그 리포트

버그 발견 시 다음 정보를 포함해주세요:

```markdown
## 버그 설명

버그에 대한 명확하고 간단한 설명

## 재현 단계

1. '...'으로 이동
2. '....'를 클릭
3. '....'까지 스크롤
4. 오류 확인

## 예상 동작

무엇이 일어날 것으로 예상했는지 설명

## 실제 동작

실제로 무엇이 일어났는지 설명

## 환경 정보

- OS: [예: macOS 13.0]
- 브라우저: [예: Chrome 108.0.5359.71]
- Node.js: [예: 18.12.0]
- pnpm: [예: 9.0.0]

## 추가 컨텍스트

문제에 대한 기타 컨텍스트나 스크린샷
```

### 2. 기능 제안

새로운 기능 제안 시:

```markdown
## 기능 설명

제안하는 기능에 대한 명확하고 간단한 설명

## 동기

이 기능이 왜 필요한지, 어떤 문제를 해결하는지 설명

## 상세 설명

기능이 어떻게 작동해야 하는지 자세히 설명

## 대안 고려사항

고려해본 다른 해결책들에 대한 설명

## 추가 컨텍스트

제안에 대한 기타 컨텍스트나 스크린샷
```

### 3. 이슈 라벨링

프로젝트에서 사용하는 라벨들:

- `bug`: 버그 리포트
- `enhancement`: 새로운 기능 제안
- `documentation`: 문서 관련
- `good first issue`: 초보자에게 적합한 이슈
- `help wanted`: 도움이 필요한 이슈
- `priority:high`: 높은 우선순위
- `priority:low`: 낮은 우선순위
- `wontfix`: 수정하지 않을 이슈

## 코드 리뷰 프로세스

### 1. 리뷰어 가이드라인

리뷰 시 다음 사항들을 확인해주세요:

#### 코드 품질

- [ ] 코드가 읽기 쉽고 이해하기 쉬운가?
- [ ] 네이밍이 명확하고 일관성 있는가?
- [ ] 불필요한 복잡성이 없는가?
- [ ] 성능 이슈는 없는가?

#### 기능성

- [ ] 코드가 의도한 대로 작동하는가?
- [ ] 엣지 케이스가 고려되었는가?
- [ ] 오류 처리가 적절한가?

#### 보안

- [ ] 보안 취약점은 없는가?
- [ ] 입력값 검증이 적절한가?
- [ ] 민감한 정보가 노출되지 않는가?

#### 테스트

- [ ] 적절한 테스트가 작성되었는가?
- [ ] 테스트 커버리지가 충분한가?

### 2. 리뷰 코멘트 가이드라인

#### 건설적인 피드백 작성

````markdown
# ✅ 좋은 예

이 함수가 조금 복잡해 보입니다. 여러 개의 작은 함수로 분리하는 것은 어떨까요?

```typescript
// 제안하는 리팩토링
const validateUser = (user) => { ... }
const createUserProfile = (user) => { ... }
const saveUser = (user) => { ... }
```
````

# ❌ 나쁜 예

이 코드는 너무 복잡합니다. 다시 작성하세요.

````

#### 칭찬도 함께

```markdown
이 에러 핸들링 로직이 정말 깔끔하네요! 👍
다만, 로그 메시지에 더 많은 컨텍스트를 포함하면 디버깅에 도움이 될 것 같습니다.
````

### 3. Claude Code를 활용한 리뷰

Claude Code의 AI 에이전트들을 활용하여 코드 리뷰를 받을 수 있습니다:

```bash
# 성능 관점에서 코드 리뷰
@performance-code-auditor 이 코드의 성능을 검토해주세요

# 보안 관점에서 코드 리뷰
@security-vulnerability-auditor 보안 취약점을 확인해주세요

# 아키텍처 관점에서 코드 리뷰
@architecture-guru 이 설계가 적절한지 검토해주세요
```

## 테스트 가이드라인

### 1. 테스트 작성 원칙

- **AAA 패턴**: Arrange, Act, Assert
- **단위 테스트 우선**: 작고 독립적인 테스트
- **의미 있는 테스트명**: 테스트 내용을 명확히 설명
- **한 가지만 테스트**: 하나의 테스트는 하나의 케이스만

### 2. 테스트 구조

```typescript
// ✅ 좋은 예
describe("UserService", () => {
  describe("createUser", () => {
    it("유효한 사용자 정보로 사용자를 생성할 수 있어야 합니다", async () => {
      // Arrange
      const userData = {
        name: "김개발",
        email: "kim@example.com",
      };
      const mockUserRepository = {
        save: jest.fn().mockResolvedValue({ id: "1", ...userData }),
      };
      const userService = new UserService(mockUserRepository);

      // Act
      const result = await userService.createUser(userData);

      // Assert
      expect(result).toEqual({
        id: "1",
        name: "김개발",
        email: "kim@example.com",
      });
      expect(mockUserRepository.save).toHaveBeenCalledWith(userData);
    });

    it("이메일이 없으면 에러를 던져야 합니다", async () => {
      // Arrange
      const userData = { name: "김개발" };
      const userService = new UserService({});

      // Act & Assert
      await expect(userService.createUser(userData)).rejects.toThrow(
        "이메일이 필요합니다",
      );
    });
  });
});
```

### 3. 컴포넌트 테스트

```tsx
// React 컴포넌트 테스트 예시
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("클릭 시 onClick 핸들러가 호출되어야 합니다", () => {
    // Arrange
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>클릭하세요</Button>);

    // Act
    fireEvent.click(screen.getByRole("button", { name: "클릭하세요" }));

    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disabled 상태일 때 클릭되지 않아야 합니다", () => {
    // Arrange
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        클릭하세요
      </Button>,
    );

    // Act
    fireEvent.click(screen.getByRole("button", { name: "클릭하세요" }));

    // Assert
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

### 4. 테스트 실행

```bash
# 모든 테스트 실행
pnpm test

# 특정 패키지 테스트
pnpm turbo test --filter=ui

# 테스트 커버리지 확인
pnpm test:coverage

# 워치 모드로 테스트 실행
pnpm test:watch
```

## 문서화 요구사항

### 1. 코드 문서화

#### JSDoc 사용

````typescript
/**
 * 사용자 프로필을 업데이트합니다.
 *
 * @param userId - 업데이트할 사용자의 ID
 * @param profileData - 업데이트할 프로필 데이터
 * @returns 업데이트된 사용자 정보를 담은 Promise
 *
 * @throws {UserNotFoundError} 사용자를 찾을 수 없는 경우
 * @throws {ValidationError} 프로필 데이터가 유효하지 않은 경우
 *
 * @example
 * ```typescript
 * const user = await updateUserProfile('123', {
 *   name: '김개발',
 *   bio: '풀스택 개발자입니다.',
 * });
 * ```
 */
export async function updateUserProfile(
  userId: string,
  profileData: Partial<UserProfile>,
): Promise<User> {
  // 구현...
}
````

#### 인터페이스 문서화

```typescript
/**
 * 사용자 프로필 정보
 */
export interface UserProfile {
  /** 사용자 고유 ID */
  readonly id: string;

  /** 사용자 이름 */
  name: string;

  /** 이메일 주소 */
  email: string;

  /** 프로필 이미지 URL (선택사항) */
  avatarUrl?: string;

  /** 사용자 소개 (최대 500자) */
  bio?: string;

  /** 계정 생성일 */
  readonly createdAt: Date;

  /** 마지막 로그인 시간 */
  lastLoginAt?: Date;
}
```

### 2. README 문서 구조

각 패키지는 다음 구조의 README.md를 가져야 합니다:

````markdown
# 패키지명

간단한 패키지 설명

## 설치

\```bash
pnpm add @repo/package-name
\```

## 사용법

기본 사용 예시

## API 레퍼런스

주요 함수/클래스/컴포넌트 문서

## 예제

실용적인 사용 예제들

## 기여하기

이 패키지에 특화된 기여 가이드라인 (있는 경우)
````

### 3. 변경사항 문서화

- **CHANGELOG.md**: 버전별 변경사항 기록
- **API 변경사항**: Breaking change가 있을 때 마이그레이션 가이드 제공
- **새 기능**: 사용 예제와 함께 문서화

## Claude Code와 함께 작업하기

### 1. AI 에이전트 활용

프로젝트에는 다음과 같은 전문 AI 에이전트들이 있습니다:

#### @korean-tech-writer

한국어 기술 문서 작성 전문가

```bash
# 사용 예시
@korean-tech-writer API 문서를 한국어로 작성해주세요
@korean-tech-writer 이 기능에 대한 사용자 가이드를 만들어주세요
```

#### @architecture-guru

시스템 아키텍처 설계 전문가

```bash
# 사용 예시
@architecture-guru 이 모듈의 구조를 검토해주세요
@architecture-guru 더 나은 아키텍처를 제안해주세요
```

#### @performance-code-auditor

코드 성능 최적화 전문가

```bash
# 사용 예시
@performance-code-auditor 이 컴포넌트의 성능을 분석해주세요
@performance-code-auditor 렌더링 최적화 방법을 알려주세요
```

#### @security-vulnerability-auditor

보안 취약점 분석 전문가

```bash
# 사용 예시
@security-vulnerability-auditor 보안 취약점을 검사해주세요
@security-vulnerability-auditor 이 API의 보안을 강화해주세요
```

#### @workflow-efficiency-guru

개발 워크플로우 최적화 전문가

```bash
# 사용 예시
@workflow-efficiency-guru 개발 프로세스를 개선해주세요
@workflow-efficiency-guru CI/CD 파이프라인을 최적화해주세요
```

#### @conventional-commit-writer

Conventional Commits 규약에 따른 커밋 메시지 작성 전문가

```bash
# 사용 예시
@conventional-commit-writer 스테이징된 파일들에 대한 커밋 메시지를 작성해주세요
@conventional-commit-writer 이 변경사항에 맞는 적절한 커밋 메시지를 만들어주세요
```

### 2. 슬래시 커맨드 활용

#### `/update-documents`

프로젝트 문서를 자동으로 업데이트합니다.

```bash
# 사용 예시
/update-documents

# 자동으로 수행되는 작업:
# - README.md 업데이트
# - API 문서 생성
# - 변경사항에 따른 문서 동기화
# - 패키지별 문서 업데이트
```

#### `/create-pr`

자동화된 풀 리퀘스트를 생성합니다.

```bash
# 사용 예시
/create-pr

# 자동으로 수행되는 작업:
# - 변경사항 분석
# - 적절한 PR 제목 및 설명 생성
# - 체크리스트 검증
# - GitHub PR 생성
```

#### `/write-commit-message`

Conventional Commits 규약에 따른 커밋 메시지를 자동으로 생성합니다.

```bash
# 사용 예시
/write-commit-message

# 자동으로 수행되는 작업:
# - 스테이징된 파일들의 변경사항 분석
# - 변경 유형 식별 (feat, fix, docs, chore 등)
# - Conventional Commits 규약에 맞는 커밋 메시지 생성
# - 한국어/영어 컨텍스트에 맞는 언어 선택
```

**🎆 커밋 메시지 자동화 워크플로우**

```bash
# 1. 변경사항 스테이징
git add .

# 2. AI로 커밋 메시지 생성
/write-commit-message

# 3. 생성된 메시지로 커밋 (자동 검사 포함)
git commit -m "생성된 커밋 메시지"

# 참고: 커밋 시 자동으로 실행되는 검사:
# - Pre-commit: lint:check, format:check, check-types
# - Commit-msg: Conventional Commits 규약 검증
```

### 3. AI와의 효과적인 협업 방법

#### 명확한 컨텍스트 제공

```bash
# ✅ 좋은 예
@korean-tech-writer
사용자 인증 시스템의 API 문서를 작성해주세요.
- JWT 토큰 기반 인증
- 회원가입, 로그인, 로그아웃 엔드포인트
- 권한별 접근 제어
- 에러 응답 코드 포함

# ❌ 나쁜 예
@korean-tech-writer API 문서 작성해주세요
```

#### 단계별 작업 요청

```bash
# 1단계: 분석 요청
@architecture-guru 현재 사용자 관리 시스템의 구조를 분석해주세요

# 2단계: 개선 제안 요청
@architecture-guru 분석 결과를 바탕으로 개선 방안을 제안해주세요

# 3단계: 구체적 구현 가이드 요청
@architecture-guru 제안된 구조로 리팩토링하는 단계별 가이드를 만들어주세요
```

### 4. AI 기반 코드 리뷰 활용

```bash
# PR 생성 후 AI 리뷰 요청
@performance-code-auditor 이 PR의 성능 영향을 분석해주세요
@security-vulnerability-auditor 보안 측면에서 검토해주세요
@architecture-guru 아키텍처 관점에서 피드백을 주세요
```

## 커밋 메시지 자동화

프로젝트는 AI 기반 커밋 메시지 자동화 기능을 지원합니다. 이 기능을 사용하면 Conventional Commits 규칙에 맞는 정확하고 의미있는 커밋 메시지를 자동으로 생성할 수 있습니다.

### 1. AI 커밋 메시지 작성 에이전트

#### @conventional-commit-writer

이 에이전트는 스테이징된 파일들을 분석하여 적절한 커밋 메시지를 생성합니다.

**주요 기능:**

- 📊 **변경사항 자동 분석**: staged 파일의 diff 분석
- 🏷️ **타입 자동 분류**: feat, fix, docs, chore 등 적절한 타입 선택
- 🌏 **다국어 지원**: 프로젝트 컨텍스트에 맞는 한국어/영어 선택
- 📝 **규약 준수**: Conventional Commits 표준 자동 적용
- 🔍 **상세 분석**: Breaking changes, scope, 이슈 참조 자동 감지

### 2. 사용 방법

#### 기본 워크플로우

```bash
# 1. 작업 완료 후 변경사항 스테이징
git add .

# 2. AI로 커밋 메시지 생성
/write-commit-message

# 3. 생성된 메시지 확인 후 커밋
git commit -m "생성된-커밋-메시지"
```

#### 고급 사용 예시

```bash
# 특정 파일만 스테이징하여 커밋 메시지 생성
git add src/components/Button.tsx
/write-commit-message

# 복잡한 변경사항에 대한 상세한 메시지 생성
git add .
@conventional-commit-writer
이번 변경사항은 사용자 인증 시스템을 완전히 리팩토링했습니다.
JWT 토큰 방식으로 변경하고, 기존 세션 기반 인증은 제거했습니다.
Breaking change가 있으니 이를 반영한 커밋 메시지를 작성해주세요.
```

### 3. AI 생성 커밋 메시지 예시

#### 새로운 기능 추가

```bash
# 변경사항: 새로운 Button 컴포넌트 추가
# AI 생성 결과:
feat(ui): Button 컴포넌트 추가

다양한 variant와 size를 지원하는 재사용 가능한 Button 컴포넌트를 구현했습니다.

- primary, secondary, ghost variant 지원
- sm, md, lg 사이즈 옵션
- 접근성 속성 포함
- TypeScript 인터페이스 정의
```

#### 버그 수정

```bash
# 변경사항: 로그인 폼 유효성 검사 오류 수정
# AI 생성 결과:
fix(auth): 로그인 폼 이메일 유효성 검사 오류 수정

이메일 정규식 패턴이 일부 유효한 이메일을 거부하는 문제를 해결했습니다.

Fixes #123
```

#### Breaking Change

```bash
# 변경사항: API 응답 형식 변경
# AI 생성 결과:
feat!: API 응답 형식을 표준화

BREAKING CHANGE: 모든 API 엔드포인트의 응답 형식을 통일했습니다.
- user_id → userId로 필드명 변경
- 에러 응답 구조 표준화
- 기존 클라이언트 코드 업데이트 필요
```

### 4. Git Hook Scripts와의 통합

프로젝트에는 자동 품질 검사를 위한 Git Hook Scripts가 설정되어 있습니다:

#### Pre-commit Hook

```bash
# .husky/pre-commit
echo "🔍 commit 이전에 lint 규칙을 적용합니다..."
if (
  pnpm run lint:check &&
  pnpm run format:check &&
  pnpm run check-types
); then
  echo "✅ 모든 lint 규칙이 성공적으로 적용되었습니다."
  exit 0
else
  echo "❌ lint 규칙 검사에서 오류가 발생했습니다."
  exit 1
fi
```

#### Commit-msg Hook

```bash
# .husky/commit-msg
COMMIT_MESSAGE=$(cat "$1")
echo "❤️‍🩹 Commit 메세지: $COMMIT_MESSAGE"

npx commitlint --edit $1
```

### 5. 효율적인 개발 워크플로우

AI 커밋 메시지 자동화를 활용한 전체 개발 워크플로우:

```bash
# 1. 기능 브랜치 생성
git checkout -b feat/user-dashboard

# 2. 개발 작업 수행
# ... 코드 작성 ...

# 3. 코드 품질 검사 (선택사항 - 커밋 시 자동 실행됨)
pnpm lint:fix
pnpm format:fix

# 4. 변경사항 스테이징
git add .

# 5. AI로 커밋 메시지 생성
/write-commit-message

# 6. 생성된 메시지로 커밋 (자동 검사 실행)
git commit -m "feat(dashboard): 사용자 대시보드 컴포넌트 구현"

# 7. 브랜치 푸시
git push origin feat/user-dashboard

# 8. AI로 PR 생성
/create-pr
```

### 6. 트러블슈팅

#### 커밋 메시지 규약 검사 실패

```bash
# 문제: commitlint 검사 실패
❌ 커밋 메시지가 규칙에 부합하지 않습니다.

# 해결: AI 재생성 요청
/write-commit-message
# 또는 수동으로 Conventional Commits 형식 확인
```

#### Pre-commit 검사 실패

```bash
# 문제: lint 또는 타입 검사 실패
❌ lint 규칙 검사에서 오류가 발생했습니다.

# 해결: 자동 수정 실행
pnpm lint:fix
pnpm format:fix

# 타입 오류는 수동 수정 필요
pnpm check-types
```

### 7. 모범 사례

#### AI 커밋 메시지 활용 팁

1. **작은 단위로 커밋**: AI가 변경사항을 정확히 분석할 수 있도록 논리적 단위로 커밋
2. **의미있는 변경사항**: 여러 다른 타입의 변경을 한 번에 커밋하지 않기
3. **검토 후 사용**: AI가 생성한 메시지를 검토하고 필요시 수정
4. **컨텍스트 제공**: 복잡한 변경사항의 경우 추가 설명을 에이전트에게 제공

#### 권장하는 커밋 패턴

```bash
# ✅ 좋은 예: 단일 기능에 대한 변경
git add src/components/UserProfile.tsx
/write-commit-message
# 결과: "feat(profile): 사용자 프로필 편집 기능 추가"

# ❌ 나쁜 예: 여러 기능이 섞인 변경
git add src/components/ src/pages/ src/utils/
/write-commit-message
# 결과: 불명확한 커밋 메시지
```

## 패키지별 기여 가이드

### 1. `@repo/ui` 패키지

UI 컴포넌트 라이브러리에 기여할 때:

```bash
# 개발 환경 실행
cd packages/ui
pnpm dev

# 스토리북 실행 (있는 경우)
pnpm storybook

# 컴포넌트 테스트
pnpm test
```

#### 새 컴포넌트 추가 체크리스트

- [ ] TypeScript 인터페이스 정의
- [ ] 접근성 속성 추가 (ARIA)
- [ ] 다양한 variant 및 size 지원
- [ ] 테스트 코드 작성
- [ ] 스토리북 스토리 작성 (있는 경우)
- [ ] 사용 예제 문서화

#### 컴포넌트 예시 구조

```tsx
// src/components/new-component.tsx
import React from "react";
import { cn } from "../utils/cn";

interface NewComponentProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export const NewComponent: React.FC<NewComponentProps> = ({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "base-styles",
        {
          "variant-styles": variant === "default",
          // ... other variants
        },
        {
          "size-styles": size === "md",
          // ... other sizes
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
```

### 2. Apps (web, docs)

애플리케이션에 기여할 때:

```bash
# 특정 앱 개발
pnpm turbo dev --filter=web
pnpm turbo dev --filter=docs

# 빌드 테스트
pnpm turbo build --filter=web
```

#### 새 페이지/기능 추가 체크리스트

- [ ] 라우팅 설정
- [ ] SEO 메타데이터 추가
- [ ] 반응형 디자인 구현
- [ ] 로딩 상태 처리
- [ ] 에러 상태 처리
- [ ] 접근성 검사

### 3. 설정 패키지 (eslint-config, typescript-config)

설정 패키지에 기여할 때:

```bash
# 설정 변경 후 전체 프로젝트에서 테스트
pnpm lint
pnpm check-types
pnpm build
```

#### 설정 변경 시 고려사항

- [ ] 모든 패키지와 호환되는가?
- [ ] 기존 코드를 깨뜨리지 않는가?
- [ ] 성능에 미치는 영향은?
- [ ] 문서 업데이트 필요성?

## 질문 및 도움

### 1. 도움이 필요할 때

- **GitHub Discussions**: 일반적인 질문이나 아이디어 논의
- **GitHub Issues**: 버그 리포트나 기능 제안
- **이메일**: contact@iamhoonse.com

### 2. 커뮤니티 참여

- 정기적으로 이슈를 확인하고 다른 기여자들을 도와주세요
- 코드 리뷰에 적극적으로 참여해주세요
- 새로운 기여자들을 환영해주세요

## 기여 인정

모든 기여자들은 프로젝트의 README.md와 CONTRIBUTORS.md 파일에 기록됩니다. 여러분의 기여에 감사드립니다! 🙏

---

> 이 문서는 프로젝트의 성장과 함께 지속적으로 업데이트됩니다. 개선 사항이 있다면 언제든지 제안해주세요!

**Happy Coding! 🚀**
