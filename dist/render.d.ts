import React from "react";
/**
 * Options de configuration pour la fonction de rendu.
 */
export interface RenderOptions {
    /**
     * Stratégie de gestion des espaces et des sauts de ligne.
     * - 'trim': Supprime les espaces en début et fin de chaque ligne et du prompt entier. (Défaut)
     * - 'pretty': Tente de conserver une indentation de base et supprime les lignes vides excessives.
     * - 'none': Retourne la chaîne brute générée par React.
     * @default 'trim'
     */
    whitespace?: "trim" | "pretty" | "none";
}
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
export declare function render(element: React.ReactElement, options?: RenderOptions): string;
