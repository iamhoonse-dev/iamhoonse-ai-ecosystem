"use client";

import { ReactNode } from "react";

/**
 * 버튼 컴포넌트의 속성 인터페이스
 */
interface ButtonProps {
  /** 버튼 내부에 표시될 콘텐츠 */
  children: ReactNode;
  /** 추가적으로 적용할 CSS 클래스명 (선택사항) */
  className?: string;
  /** 버튼이 속한 앱의 이름 (알림 메시지에 사용됨) */
  appName: string;
}

/**
 * 재사용 가능한 버튼 컴포넌트
 *
 * 클릭 시 해당 앱 이름이 포함된 알림을 표시하는 기본 버튼 컴포넌트입니다.
 * 모든 앱에서 일관된 버튼 경험을 제공하기 위해 설계되었습니다.
 *
 * @param children - 버튼 내부에 표시될 콘텐츠
 * @param className - 추가적으로 적용할 CSS 클래스명 (선택사항)
 * @param appName - 버튼이 속한 앱의 이름 (알림 메시지에 사용됨)
 * @returns JSX 버튼 엘리먼트
 *
 * @example
 * ```tsx
 * <Button appName="web" className="primary-btn">
 *   클릭하세요
 * </Button>
 * ```
 */
export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
