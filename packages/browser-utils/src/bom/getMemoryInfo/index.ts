/**
 * Memory information interface returned by getMemoryInfo function.
 */
export interface MemoryInfo {
  /** Total JS heap size in bytes (if available) */
  totalJSHeapSize?: number;
  /** Used JS heap size in bytes (if available) */
  usedJSHeapSize?: number;
  /** JS heap size limit in bytes (if available) */
  jsHeapSizeLimit?: number;
  /** Device memory in GB (if available) */
  deviceMemory?: number;
  /** Whether the memory info is available */
  isSupported: boolean;
  /** Source of the memory information */
  source: "performance.memory" | "navigator.deviceMemory" | "none";
}

/**
 * Gets browser memory information using the Performance API and Navigator API.
 *
 * This function attempts to retrieve memory information from various browser APIs:
 * - performance.memory (Chrome/Chromium-based browsers)
 * - navigator.deviceMemory (Device Memory API)
 *
 * Note: These APIs may not be available in all browsers or may be restricted
 * in certain contexts (e.g., cross-origin frames, non-secure contexts).
 *
 * @returns MemoryInfo object containing available memory information
 *
 * @example
 * ```typescript
 * import { getMemoryInfo } from '@repo/browser-utils/bom';
 *
 * const memInfo = getMemoryInfo();
 *
 * if (memInfo.isSupported) {
 *   console.log('Used heap size:', memInfo.usedJSHeapSize);
 *   console.log('Total heap size:', memInfo.totalJSHeapSize);
 *   console.log('Device memory:', memInfo.deviceMemory, 'GB');
 * } else {
 *   console.log('Memory information not available');
 * }
 * ```
 */
export function getMemoryInfo(): MemoryInfo {
  const result: MemoryInfo = {
    isSupported: false,
    source: "none",
  };

  // Check if we're in a browser environment
  if (typeof window === "undefined") {
    return result;
  }

  // Try to get memory info from performance.memory (Chrome/Chromium)
  if ("performance" in window && "memory" in window.performance) {
    const memory = (window.performance as Record<string, unknown>).memory as {
      totalJSHeapSize?: number;
      usedJSHeapSize?: number;
      jsHeapSizeLimit?: number;
    };

    if (memory) {
      result.totalJSHeapSize = memory.totalJSHeapSize;
      result.usedJSHeapSize = memory.usedJSHeapSize;
      result.jsHeapSizeLimit = memory.jsHeapSizeLimit;
      result.isSupported = true;
      result.source = "performance.memory";
    }
  }

  // Try to get device memory info from navigator.deviceMemory
  if ("navigator" in window && "deviceMemory" in window.navigator) {
    const deviceMemory = (window.navigator as Record<string, unknown>)
      .deviceMemory;

    if (typeof deviceMemory === "number") {
      result.deviceMemory = deviceMemory;

      if (!result.isSupported) {
        result.isSupported = true;
        result.source = "navigator.deviceMemory";
      }
    }
  }

  return result;
}
