---
description: 본 문서는 AI 에게 패키지 작성을 요청하기 위한 설명을 제공합니다.
---

# 비기능 요구사항

- **TypeScript 지원**
- **동작 환경**: 브라우저, Node.js
- **배포 방법**: NPM 등 패키지 레지스트리
- **지원 모듈 형식**: ESM, CJS, UMD
- **번들러**: tsup
- **React 버전**: 19 이상
- **peerDependencies**: React, ReactDOM
  - tsup 설정에서 `external` 옵션을 사용하여 React와 ReactDOM을 외부 종속성으로 설정합니다.
  - devDependencies 에 React, ReactDOM 을 추가합니다.
    - 개발 환경에서도 React와 ReactDOM을 사용할 수 있도록 설정합니다.
- **트리 쉐이킹 지원**: 번들러의 트리 쉐이킹(Tree shaking)에 대응할 수 있어야 합니다.
  - 카테고리별로 기능을 분리하여, 사용자가 필요한 기능만 선택적으로 가져올 수 있도록 해야 합니다.
    - 예를 들어, `import { Button } from '@repo/react-ui/common'` 와 같이 사용할 수 있어야 합니다.
- **소스 코드 디렉토리 구조**: 소스 코드는 각 기능 단위별로 디렉토리를 구분하여 다음과 같은 위치에 작성합니다.
  - `src/<category-name>/<function-name>/index.ts`
    - 예 : `src/common/Button/index.tsx`
- **개발자 경험**
  - **클린 코드**: 코드 품질을 높이기 위해 ESLint, Prettier 등의 도구를 사용해야 합니다.

# 기능 요구사항

패키지는 다음과 같은 기능을 제공해야 합니다:

- **일반 컴포넌트(`common`)**: React 에서 사용 가능한 일반적인(common) UI 컴포넌트들을 제공해야 합니다.
  - `Button`

위에 명시된 기능들 외에 다른 기능들은 아직 추가하지 말아 주세요.
