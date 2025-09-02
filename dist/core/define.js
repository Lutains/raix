"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.define = void 0;
const react_1 = __importDefault(require("react"));
/**
 * A factory function that defines a new custom prompt tag component.
 * This allows users to create their own structured prompt elements without
 * needing to declare custom types in a global JSX namespace.
 *
 * @param tagName The lowercase name of the tag to be generated (e.g., 'system', 'user_message').
 * @returns A React component that can be used in JSX.
 */
const define = (tagName) => {
    const Component = ({ children, ...props }) => {
        // We use `React.createElement` directly here instead of JSX.
        // This is the key to bypassing TypeScript's static check for known tag names,
        // allowing us to create a component from a dynamic string variable (`tagName`).
        // `React.createElement` is the function that JSX compiles to behind the scenes.
        return react_1.default.createElement(tagName, props, children);
    };
    // It's a best practice to set a display name for better debugging.
    // This helps identify the component in React DevTools.
    // We convert the snake_case or lowercase tagName to PascalCase.
    const componentName = tagName.charAt(0).toUpperCase() +
        tagName.slice(1).replace(/_(\w)/g, (_, c) => c.toUpperCase());
    Component.displayName = componentName;
    return Component;
};
exports.define = define;
