import { type JSX } from "react";

/**
 * 코드 컴포넌트의 속성 인터페이스
 */
interface CodeProps {
  /** 코드 블록 내부에 표시될 코드 텍스트 */
  children: React.ReactNode;
  /** 추가적으로 적용할 CSS 클래스명 (선택사항) */
  className?: string;
}

/**
 * 인라인 코드 표시 컴포넌트
 *
 * 텍스트 내에서 코드 조각을 강조하여 표시하기 위한 컴포넌트입니다.
 * HTML의 `<code>` 태그를 React 컴포넌트로 래핑하여 일관된 스타일링을 제공합니다.
 *
 * @param children - 코드 블록 내부에 표시될 코드 텍스트
 * @param className - 추가적으로 적용할 CSS 클래스명 (선택사항)
 * @returns JSX code 엘리먼트
 *
 * @example
 * ```tsx
 * <p>
 *   설치하려면 <Code>npm install</Code> 명령을 실행하세요.
 * </p>
 * ```
 *
 * @example
 * ```tsx
 * <Code className="highlight">
 *   const greeting = "Hello, World!";
 * </Code>
 * ```
 */
export function Code({ children, className }: CodeProps): JSX.Element {
  return <code className={className}>{children}</code>;
}
