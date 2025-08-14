import { useEffect, useRef } from "react";

interface UseSmoothScrollAnimationOptions {
	threshold?: number;
	rootMargin?: string;
	triggerOnce?: boolean;
}

export const useSmoothScrollAnimation = (
	options: UseSmoothScrollAnimationOptions = {}
) => {
	const {
		threshold = 0.15,
		rootMargin = "-80px 0px",
		triggerOnce = true,
	} = options;

	const ref = useRef<HTMLElement>(null);
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		// Check if user prefers reduced motion
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;
		if (prefersReducedMotion) {
			element.classList.add("animate-triggered");
			return;
		}

		observerRef.current = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					element.classList.add("animate-triggered");

					if (triggerOnce && observerRef.current) {
						observerRef.current.disconnect();
					}
				} else if (!triggerOnce) {
					element.classList.remove("animate-triggered");
				}
			},
			{
				threshold,
				rootMargin,
			}
		);

		observerRef.current.observe(element);

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, [threshold, rootMargin, triggerOnce]);

	return { ref };
};
