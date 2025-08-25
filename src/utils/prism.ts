import Prism from "prismjs";

// Only import the languages we need for optimal bundle size
import "prismjs/components/prism-elixir";

// Enhanced configuration for Elixir syntax highlighting
export const configurePrism = (): void => {
	// Configure Prism with optimal settings
	if (typeof window !== "undefined") {
		// Disable automatic highlighting to have more control
		window.Prism = window.Prism || {};
		window.Prism.manual = true;

		// Add custom Elixir patterns for better highlighting
		if (Prism.languages.elixir) {
			// Enhance pipe operator highlighting
			Prism.languages.elixir.operator =
				/[=\|><!~?\+\-*\/&%^]+|\b(?:and|or|not|in)\b/;

			// Enhanced atom highlighting
			// Prism.languages.elixir.atom = {
			//   pattern: /:(?>(?=.*:)(?:[a-z]\w*|[A-Z]\w*|\d+|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')(?::(?:[a-z]\w*|[A-Z]\w*|\d+|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'))*|[a-z]\w*[?!]?)/,
			//   greedy: true,
			// };
			Prism.languages.elixir.atom = {
				pattern: /:[a-zA-Z_]\w*[!?]?|:"(?:\\.|[^"\\])*"/,
				greedy: true,
			};

			// Better function name detection
			Prism.languages.elixir.function = {
				pattern: /\b[a-z_]\w*[?!]?(?=\s*(?:\(|$|\s))/,
				greedy: true,
			};

			// Module and attribute highlighting
			Prism.languages.elixir.module = /\b[A-Z]\w*(?:\.[A-Z]\w*)*\b/;
			Prism.languages.elixir.attribute = /@[a-z_]\w*/;

			// Enhanced keyword patterns
			Prism.languages.elixir.keyword =
				/\b(?:def|defp|defmodule|defstruct|defprotocol|defimpl|defmacro|defmacrop|defguard|defguardp|defdelegate|use|import|require|alias|case|cond|if|unless|when|with|for|try|catch|rescue|after|else|end|do|fn|test|describe|setup|assert|assert_receive|refute)\b/;
		}
	}
};

// Initialize Prism configuration when this module is imported
configurePrism();

/**
 * Highlight code with Prism.js
 * @param code - The code string to highlight
 * @param language - The language identifier (default: 'elixir')
 * @returns Highlighted HTML string
 */
export const highlightCode = (
	code: string,
	language: string = "elixir"
): string => {
	try {
		// Ensure the language is supported
		const supportedLanguages = [
			"elixir",
			"markup",
			"css",
			"javascript",
			"typescript",
		];
		const lang = supportedLanguages.includes(language) ? language : "elixir";

		if (Prism.languages[lang]) {
			return Prism.highlight(code, Prism.languages[lang], lang);
		}

		// Fallback to plain text if language is not available
		return code;
	} catch (error) {
		console.warn("Prism highlighting failed:", error);
		return code;
	}
};

/**
 * Get appropriate language label for display
 * @param language - The language identifier
 * @returns User-friendly language name
 */
export const getLanguageLabel = (language: string): string => {
	const languageLabels: Record<string, string> = {
		elixir: "Elixir",
		javascript: "JavaScript",
		typescript: "TypeScript",
		css: "CSS",
		markup: "HTML",
	};

	return languageLabels[language] || language.toUpperCase();
};

/**
 * Check if syntax highlighting is supported in the current environment
 * @returns boolean indicating if highlighting is available
 */
export const isHighlightingSupported = (): boolean => {
	return typeof window !== "undefined" && !!window.Prism;
};

export default Prism;
