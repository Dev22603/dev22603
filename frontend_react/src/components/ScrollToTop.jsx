import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const scrollContainer = document.querySelector('.overflow-y-auto');

		const toggleVisibility = () => {
			if (scrollContainer && scrollContainer.scrollTop > 400) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", toggleVisibility);
			return () => scrollContainer.removeEventListener("scroll", toggleVisibility);
		}
	}, []);

	const scrollToTop = () => {
		const scrollContainer = document.querySelector('.overflow-y-auto');
		if (scrollContainer) {
			scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					transition={{ duration: 0.2 }}
					onClick={scrollToTop}
					className="fixed bottom-6 right-6 z-40 p-3 bg-[var(--color-background-card)] border border-[var(--color-border-primary)] rounded-xl text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_var(--color-primary-dim)] group"
					aria-label="Scroll to top"
				>
					<ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
				</motion.button>
			)}
		</AnimatePresence>
	);
}
