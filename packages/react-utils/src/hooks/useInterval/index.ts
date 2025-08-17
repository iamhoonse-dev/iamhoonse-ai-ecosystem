import { useEffect, useRef } from "react";

/**
 * A custom hook that creates an interval that can be paused and resumed.
 *
 * @param callback - Function to be called at each interval
 * @param delay - Delay in milliseconds, or null to pause the interval
 *
 * @example
 * ```tsx
 * function Timer() {
 *   const [count, setCount] = useState(0);
 *
 *   useInterval(() => {
 *     setCount(count + 1);
 *   }, 1_000);
 *
 *   return <div>{count}</div>;
 * }
 * ```
 */
export function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef<() => void>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Function to call the saved callback
    function tick() {
      savedCallback.current?.();
    }

    // If delay is null, do not set up the interval
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
