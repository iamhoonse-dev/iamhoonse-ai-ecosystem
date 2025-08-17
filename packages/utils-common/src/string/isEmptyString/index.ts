/**
 * Checks if a string is empty (null, undefined, or has zero length after trimming).
 *
 * @param value - The string value to check
 * @returns True if the string is empty, false otherwise
 *
 * @example
 * ```typescript
 * import { isEmptyString } from '@repo/utils/string';
 *
 * isEmptyString('');          // true
 * isEmptyString('   ');       // true
 * isEmptyString(null);        // true
 * isEmptyString(undefined);   // true
 * isEmptyString('hello');     // false
 * isEmptyString('  hello  '); // false
 * ```
 */
export function isEmptyString(value: string | null | undefined): boolean {
  return value == null || value.trim().length === 0;
}
