import React, { PropsWithChildren } from "react";

// The props type for the generated component.
// It accepts children and any other arbitrary props.
type DefineProps = PropsWithChildren<{
  [key: string]: any;
}>;

/**
 * A factory function that defines a new custom prompt tag component.
 * This allows users to create their own structured prompt elements without
 * needing to declare custom types in a global JSX namespace.
 *
 * @param tagName The lowercase name of the tag to be generated (e.g., 'system', 'user_message').
 * @returns A React component that can be used in JSX.
 */
export const define = (tagName: string) => {
  const Component = ({ children, ...props }: DefineProps) => {
    // We use `React.createElement` directly here instead of JSX.
    // This is the key to bypassing TypeScript's static check for known tag names,
    // allowing us to create a component from a dynamic string variable (`tagName`).
    // `React.createElement` is the function that JSX compiles to behind the scenes.
    return React.createElement(tagName, props, children);
  };

  // It's a best practice to set a display name for better debugging.
  // This helps identify the component in React DevTools.
  // We convert the snake_case or lowercase tagName to PascalCase.
  const componentName =
    tagName.charAt(0).toUpperCase() +
    tagName.slice(1).replace(/_(\w)/g, (_, c) => c.toUpperCase());
  Component.displayName = componentName;

  return Component;
};
