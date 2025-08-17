import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

/**
 * File or directory information returned by the ls function
 */
export interface LsEntry {
  /** Name of the file or directory */
  name: string;
  /** Full path to the file or directory */
  path: string;
  /** Whether this entry is a directory */
  isDirectory: boolean;
  /** Whether this entry is a file */
  isFile: boolean;
  /** File size in bytes (0 for directories) */
  size: number;
  /** Last modified date */
  modifiedTime: Date;
}

/**
 * Options for the ls function
 */
export interface LsOptions {
  /** Include hidden files and directories (starting with .) (default: false) */
  includeHidden?: boolean;
}

/**
 * Lists the contents of a directory, similar to the Unix `ls` command.
 *
 * This function is designed to work only in Node.js environments and provides
 * detailed information about files and directories.
 *
 * @param dirPath - The path to the directory to list
 * @param options - Options to customize the listing behavior
 * @returns An array of LsEntry objects containing information about each file/directory
 *
 * @throws {Error} If the directory doesn't exist or cannot be accessed
 *
 * @example
 * ```typescript
 * import { ls } from '@repo/node-utils/fs';
 *
 * // List all files and directories in the current directory
 * const entries = await ls('./');
 * console.log(entries.map(e => `${e.name} (${e.isDirectory ? 'dir' : 'file'})`));
 *
 * // List all files including hidden ones
 * const allEntries = await ls('./', { includeHidden: true });
 *
 * // Get information about files in src directory
 * const entries = await ls('./src');
 * entries.forEach(entry => {
 *   console.log(`${entry.name}: ${entry.size} bytes, modified ${entry.modifiedTime}`);
 * });
 * ```
 */
export async function ls(
  dirPath: string,
  options: LsOptions = {},
): Promise<LsEntry[]> {
  const { includeHidden = false } = options;

  try {
    // Read directory contents
    const entries = await readdir(dirPath);

    // Filter out hidden files if not requested
    const filteredEntries = includeHidden
      ? entries
      : entries.filter((name) => !name.startsWith("."));

    // Process each entry
    const results: LsEntry[] = [];

    for (const name of filteredEntries) {
      const fullPath = join(dirPath, name);

      try {
        const stats = await stat(fullPath);

        const entry: LsEntry = {
          name,
          path: fullPath,
          isDirectory: stats.isDirectory(),
          isFile: stats.isFile(),
          size: stats.isFile() ? stats.size : 0,
          modifiedTime: stats.mtime,
        };

        results.push(entry);
      } catch (entryError) {
        // Skip entries that cannot be accessed (e.g., broken symlinks)
        console.warn(`Warning: Cannot access ${fullPath}:`, entryError);
        continue;
      }
    }

    // Sort results: directories first, then files, both alphabetically
    return results.sort((a, b) => {
      if (a.isDirectory && !b.isDirectory) return -1;
      if (!a.isDirectory && b.isDirectory) return 1;
      return a.name.localeCompare(b.name);
    });
  } catch (error) {
    throw new Error(
      `Failed to list directory '${dirPath}': ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
