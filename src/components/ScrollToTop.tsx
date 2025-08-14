import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		let ticking = false;

		const toggleVisibility = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					setIsVisible(window.scrollY > 100);
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", toggleVisibility, { passive: true });
		toggleVisibility();

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Button
			onClick={scrollToTop}
			variant='glass'
			size='icon'
			className={cn(
				"fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-2xl shadow-black/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 active:scale-95",
				"ring-1 ring-white/10 hover:ring-white/20",
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-2 pointer-events-none"
			)}
			aria-label='Scroll to top'
		>
			<ArrowUp className='h-5 w-5' />
		</Button>
	);
};

export default ScrollToTop;
