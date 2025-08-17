"use client";

import type { FC } from "react";
import { getMemoryInfo } from "@repo/browser-utils/bom";

/**
 * browser-utils 패키지 테스트를 위한 컴포넌트
 */
const TestBrowserUtils: FC = () => {
  // 브라우저 메모리 정보
  const memoryInfo = getMemoryInfo();

  return <p>{JSON.stringify(memoryInfo, null, 2)}</p>;
};
export default TestBrowserUtils;
