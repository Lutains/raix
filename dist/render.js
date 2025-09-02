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
exports.render = render;
const react_1 = __importDefault(require("react"));
const server_edge_1 = require("react-dom/server.edge"); // On garde la version Edge pour la compatibilité
const middlewares = __importStar(require("./middlewares"));
/**
 * Rend un composant de prompt JSX en une chaîne de caractères propre,
 * prête à être envoyée à un Large Language Model (LLM).
 *
 * Cette fonction utilise `renderToStaticMarkup` pour convertir le JSX en HTML/XML,
 * puis applique un nettoyage pour optimiser la sortie pour les LLMs.
 *
 * @param element Le composant de prompt React à rendre (ex: <MyPrompt />).
 * @param options Options de formatage pour la sortie finale.
 * @returns La chaîne de caractères finale du prompt.
 */
function render(element, options = {}) {
    if (!react_1.default.isValidElement(element)) {
        throw new Error("La fonction 'render' attend un élément React valide (JSX). Avez-vous oublié les balises <> ? Ou avez-vous passé un composant non instancié (MyComponent au lieu de <MyComponent />) ?");
    }
    // Étape 1 : Rendu en chaîne brute.
    // renderToStaticMarkup est parfait car il ne génère pas d'attributs React comme `data-reactid`.
    const rawString = (0, server_edge_1.renderToStaticMarkup)(element);
    // Étape 2 : Nettoyage basé sur les options.
    const { whitespace = "trim" } = options;
    const patchedValueWithMiddlewares = [middlewares.withWhitespace].reduce((acc, middleware) => {
        return middleware(acc, options);
    }, rawString);
    return patchedValueWithMiddlewares;
}
