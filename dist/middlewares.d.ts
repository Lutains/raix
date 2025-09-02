import { RenderOptions } from "./core/render";
/**
 * A middleware that applies whitespace management to the prompt string
 * based on the provided render options.
 * @param input The current prompt string to process.
 * @param options The render options, containing the whitespace strategy.
 * @returns The processed string with whitespace rules applied.
 */
export declare const withWhitespace: (input: string, options: RenderOptions) => string;
