"use client";

import { FC, useState } from "react";
import { useInterval } from "@repo/react-utils/hooks";

/**
 * react-utils 패키지 테스트를 위한 컴포넌트
 */
const TestReactUtils: FC = () => {
  const [count, setCount] = useState(0);

  useInterval(() => setCount((prevState) => ++prevState), 1_000);

  return (
    <p>
      <span>{count}</span>
    </p>
  );
};
export default TestReactUtils;
