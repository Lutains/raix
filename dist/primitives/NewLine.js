"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewLine = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/*
 * A primitive component to insert one or more newline characters (`\n`).
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
const NewLine = ({ count = 1 }) => {
    if (count <= 0) {
        return null;
    }
    return (0, jsx_runtime_1.jsx)("br", {});
    // `string` is not a valid return type for a component, but because it is a text-only node
    // React will handle it correctly.
    // We cast to `any` to satisfy TypeScript if it complains, or just return the string.
    return "\n".repeat(count);
};
exports.NewLine = NewLine;
