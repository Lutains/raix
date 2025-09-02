import React, { PropsWithChildren } from "react";
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
export declare const define: (tagName: string) => {
    ({ children, ...props }: DefineProps): React.DOMElement<{
        [key: string]: any;
    }, Element>;
    displayName: string;
};
export {};
