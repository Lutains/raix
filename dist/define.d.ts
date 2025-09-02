import React, { PropsWithChildren } from "react";
type DefineProps = PropsWithChildren<{
    [key: string]: any;
}>;
export declare function define(tagName: string): {
    ({ children, ...props }: DefineProps): React.DOMElement<{
        [key: string]: any;
    }, Element>;
    displayName: string;
};
export {};
