import { ReactElement } from "react";
import { isServer } from "../core/utils";

export interface NewLineProps {
  /**
   * The number of newlines to insert.
   * @default 1
   */
  count?: number;
}

/*
 * An isomorphic primitive component to insert one or more newline characters (`\n`).
 * It's a declarative way to add vertical spacing in prompts.
 *
 * @example
 * // Inserts a single newline
 * <NewLine />
 *
 * @example
 * // Inserts three newlines
 * <NewLine count={3} />
 */
export const NewLine = ({
  count = 1,
}: NewLineProps): ReactElement | string | null => {
  if (count <= 0) {
    return null;
  }

  // Check if we are in a browser-like environment
  if (isServer) {
    // DOM environment: return <br /> elements for visual line breaks.
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <br key={i} />
        ))}
      </>
    );
  }
  // `string` is not a valid return type for a component, but because it is a text-only node
  // React will handle it correctly.
  // We cast to `any` to satisfy TypeScript if it complains, or just return the string.
  return "\n".repeat(count);
};
