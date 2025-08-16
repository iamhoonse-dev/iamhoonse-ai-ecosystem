/**
 * 문서 사이트의 Next.js 설정
 * 
 * 문서 사이트에 특화된 Next.js 설정 파일입니다.
 * 현재는 기본 설정을 사용하고 있으며, 향후 문서 생성 최적화,
 * 정적 내보내기, SEO 개선 등의 설정을 추가할 수 있습니다.
 *
 * @type {import('next').NextConfig}
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = {
  // 현재 기본 설정 사용
  // 문서 사이트를 위한 향후 추가 설정 예시:
  // output: 'export', // 정적 내보내기
  // trailingSlash: true, // URL 끝에 슬래시 추가
  // images: { unoptimized: true } // 정적 내보내기용 이미지 설정
};

export default nextConfig;
