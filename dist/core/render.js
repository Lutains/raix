"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const server_edge_1 = require("react-dom/server.edge");
const react_1 = __importDefault(require("react"));
const middlewares = __importStar(require("../middlewares"));
/**
 * Renders a JSX prompt component into a clean string,
 * ready to be sent to a Large Language Model (LLM).
 *
 * This function uses `renderToStaticMarkup` to convert JSX into an HTML/XML-like string,
 * and then applies cleanup transformations to optimize the output for LLMs.
 *
 * @param element The React prompt component to render (e.g., <MyPrompt />).
 * @param options Formatting options for the final output.
 * @returns The final prompt string.
 */
const render = (element, options = {}) => {
    if (!react_1.default.isValidElement(element)) {
        throw new Error("The 'render' function expects a valid React element (JSX). Did you forget the <> tags? Or did you pass a component function instead of an instantiated component (e.g., MyComponent instead of <MyComponent />)?");
    }
    const rawString = (0, server_edge_1.renderToStaticMarkup)(element);
    // Process the raw string through the middleware pipeline.
    const patchedValueWithMiddlewares = [middlewares.withWhitespace].reduce((acc, middleware) => middleware(acc, options), rawString);
    return patchedValueWithMiddlewares;
};
exports.render = render;
