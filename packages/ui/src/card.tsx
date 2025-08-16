import { type JSX } from "react";

/**
 * 카드 컴포넌트의 속성 인터페이스
 */
interface CardProps {
  /** 추가적으로 적용할 CSS 클래스명 (선택사항) */
  className?: string;
  /** 카드의 제목 텍스트 */
  title: string;
  /** 카드 내부에 표시될 설명 콘텐츠 */
  children: React.ReactNode;
  /** 카드 클릭 시 이동할 URL */
  href: string;
}

/**
 * 클릭 가능한 카드 컴포넌트
 *
 * 외부 링크로 이동하는 카드 형태의 컴포넌트입니다.
 * 자동으로 UTM 추적 파라미터를 추가하여 트래픽 분석을 지원합니다.
 * 새 창에서 열리며 보안을 위해 적절한 rel 속성이 설정됩니다.
 *
 * @param className - 추가적으로 적용할 CSS 클래스명 (선택사항)
 * @param title - 카드의 제목 텍스트
 * @param children - 카드 내부에 표시될 설명 콘텐츠
 * @param href - 카드 클릭 시 이동할 URL
 * @returns JSX 카드 엘리먼트 (링크로 감싸진 카드)
 *
 * @example
 * ```tsx
 * <Card
 *   title="문서 보기"
 *   href="https://example.com/docs"
 *   className="card-primary"
 * >
 *   프로젝트 문서를 확인하세요
 * </Card>
 * ```
 */
export function Card({
  className,
  title,
  children,
  href,
}: CardProps): JSX.Element {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
