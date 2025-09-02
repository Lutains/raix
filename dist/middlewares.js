"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withWhitespace = void 0;
/**
 * A middleware that applies whitespace management to the prompt string
 * based on the provided render options.
 * @param input The current prompt string to process.
 * @param options The render options, containing the whitespace strategy.
 * @returns The processed string with whitespace rules applied.
 */
const withWhitespace = (input, options) => {
    const { whitespace = "trim" } = options;
    switch (whitespace) {
        case "pretty":
            // Removes lines that contain only whitespace.
            // Collapses 3 or more newlines into just two.
            return input
                .replace(/^[ \t]*$/gm, "")
                .replace(/\n{3,}/g, "\n\n")
                .trim();
        case "trim":
            // Trims leading and trailing whitespace from each line.
            // Then, filters out any resulting empty lines.
            return input
                .split("\n")
                .map((line) => line.trim())
                .filter((line) => line.length > 0)
                .join("\n");
        case "none":
        default:
            return input;
    }
};
exports.withWhitespace = withWhitespace;
