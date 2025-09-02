"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.define = define;
const react_1 = __importDefault(require("react"));
function define(tagName) {
    const Component = ({ children, ...props }) => {
        // Ici, nous n'utilisons PAS JSX pour éviter la vérification de type statique.
        // React.createElement est la fonction que JSX appelle sous le capot.
        // En l'utilisant directement avec une variable string, on contourne la limitation.
        return react_1.default.createElement(tagName, props, children);
    };
    // C'est une bonne pratique de nommer le composant pour le débogage.
    const componentName = tagName.charAt(0).toUpperCase() +
        tagName.slice(1).replace(/_(\w)/g, (_, c) => c.toUpperCase());
    Component.displayName = componentName;
    return Component;
}
