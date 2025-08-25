import React, { useEffect, useRef } from "react";
import {
	highlightCode,
	getLanguageLabel,
	isHighlightingSupported,
} from "@/utils/prism";
import { cn } from "@/lib/utils";

interface PrismCodeProps {
	children: string;
	language?: string;
	className?: string;
	showLanguageLabel?: boolean;
	highlightLines?: number[];
	showLineNumbers?: boolean;
	maxHeight?: string;
}

/**
 * PrismCode component for syntax highlighting
 */
const PrismCode: React.FC<PrismCodeProps> = ({
	children,
	language = "elixir",
	className = "",
	showLanguageLabel = false,
	highlightLines = [],
	showLineNumbers = false,
	maxHeight,
}) => {
	const codeRef = useRef<HTMLElement>(null);
	const [highlightedCode, setHighlightedCode] =
		React.useState<string>(children);
	const [isClient, setIsClient] = React.useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient && isHighlightingSupported() && children) {
			try {
				const highlighted = highlightCode(children.trim(), language);
				setHighlightedCode(highlighted);
			} catch (error) {
				console.warn("Failed to highlight code:", error);
				setHighlightedCode(children);
			}
		}
	}, [children, language, isClient]);

	/**
	 * Process highlighted code to add line highlighting if specified
	 */
	const processHighlightedCode = (code: string): string => {
		if (!highlightLines.length) return code;

		const lines = code.split("\n");
		return lines
			.map((line, index) => {
				const lineNumber = index + 1;
				if (highlightLines.includes(lineNumber)) {
					return `<span class="highlight-line">${line}</span>`;
				}
				return line;
			})
			.join("\n");
	};

	const finalCode = processHighlightedCode(highlightedCode);
	const languageLabel = getLanguageLabel(language);

	return (
		<div className='relative'>
			{/* Language label */}
			{showLanguageLabel && (
				<div className='absolute top-2 right-2 z-10'>
					<span className='inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-600/30 backdrop-blur-sm'>
						{languageLabel}
					</span>
				</div>
			)}

			{/* Code container */}
			<div className='code-container'>
				<pre
					className={cn(
						`language-${language}`,
						showLineNumbers && "line-numbers",
						className
					)}
					style={{ maxHeight }}
				>
					<code
						ref={codeRef}
						className={cn(`language-${language}`, "font-code", className)}
						dangerouslySetInnerHTML={{ __html: finalCode }}
					/>
				</pre>
			</div>
		</div>
	);
};

/**
 * Simplified PrismCode component for inline code
 */
export const InlinePrismCode: React.FC<{
	children: string;
	language?: string;
	className?: string;
}> = ({ children, language = "elixir", className = "" }) => {
	const [highlightedCode, setHighlightedCode] =
		React.useState<string>(children);
	const [isClient, setIsClient] = React.useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient && isHighlightingSupported() && children) {
			try {
				const highlighted = highlightCode(children.trim(), language);
				setHighlightedCode(highlighted);
			} catch (error) {
				console.warn("Failed to highlight inline code:", error);
				setHighlightedCode(children);
			}
		}
	}, [children, language, isClient]);

	return (
		<code
			className={cn(`language-${language}`, "font-code", className)}
			dangerouslySetInnerHTML={{ __html: highlightedCode }}
		/>
	);
};

/**
 * Hook to check if syntax highlighting is available
 */
export const usePrismHighlighting = () => {
	const [isSupported, setIsSupported] = React.useState(false);
	const [isLoaded, setIsLoaded] = React.useState(false);

	useEffect(() => {
		setIsSupported(isHighlightingSupported());
		setIsLoaded(true);
	}, []);

	return { isSupported, isLoaded };
};

export default PrismCode;
