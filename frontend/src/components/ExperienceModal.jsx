import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import TechTag from "./TechTag";

export default function ExperienceModal({ experience, isOpen, onClose }) {
	// Close modal on ESC key press
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			// Prevent body scroll when modal is open
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, onClose]);

	if (!experience) return null;

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
						onClick={onClose}
					/>

					{/* Modal */}
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 20 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							className="relative w-full max-w-2xl bg-[var(--color-background-secondary)] rounded-2xl border border-[var(--color-border-primary)] shadow-2xl pointer-events-auto overflow-hidden"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Header */}
							<div className="relative px-6 py-5 border-b border-[var(--color-border-primary)]">
								<div className="flex items-start gap-4">
									{/* Icon */}
									<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[var(--color-primary)]/10 rounded-full text-2xl">
										{experience.icon}
									</div>

									{/* Title */}
									<div className="flex-1 min-w-0">
										<h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">
											{experience.role}
										</h3>
										<p className="text-sm text-[var(--color-text-secondary)]">
											{experience.company} · {experience.location}
										</p>
										<p className="text-xs text-[var(--color-text-tertiary)] mt-1">
											{experience.startDate} - {experience.endDate}
										</p>
									</div>

									{/* Close Button */}
									<button
										onClick={onClose}
										className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[var(--color-background-tertiary)] transition-colors"
										aria-label="Close modal"
									>
										<X className="w-5 h-5 text-[var(--color-text-secondary)]" />
									</button>
								</div>
							</div>

							{/* Content */}
							<div className="px-6 py-6 max-h-[60vh] overflow-y-auto">
								{/* Tech Stack Section */}
								<div className="mb-6">
									<h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3 uppercase tracking-wide">
										Tech Stack
									</h4>
									<div className="flex flex-wrap gap-2">
										{experience.techStack.map((tech, index) => (
											<TechTag key={index} technology={tech} />
										))}
									</div>
								</div>

								{/* Key Achievements Section */}
								<div>
									<h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3 uppercase tracking-wide">
										Key Achievements
									</h4>
									<ul className="space-y-3">
										{experience.keyAchievements.map((achievement, index) => (
											<li
												key={index}
												className="flex gap-3 text-[var(--color-text-secondary)] leading-relaxed"
											>
												<span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2" />
												<span>{achievement}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	);
}
