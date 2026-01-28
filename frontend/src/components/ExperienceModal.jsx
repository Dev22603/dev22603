import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import TechTag from "./TechTag";

export default function ExperienceModal({ experience, isOpen, onClose }) {
	// Handle ESC key
	useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === "Escape") onClose();
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEsc);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEsc);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, onClose]);

	if (!experience) return null;

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="absolute inset-0 bg-[var(--color-background-primary)]/90 backdrop-blur-md"
						onClick={onClose}
					/>

					{/* Modal */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden bg-[var(--color-background-card)] border border-[var(--color-border-primary)] rounded-2xl shadow-2xl"
					>
						{/* Header accent */}
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />

						{/* Close button */}
						<button
							onClick={onClose}
							className="absolute top-4 right-4 p-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-tertiary)] rounded-lg transition-all duration-200 z-10"
						>
							<X className="w-5 h-5" />
						</button>

						{/* Content */}
						<div className="overflow-y-auto max-h-[85vh] p-6 sm:p-8">
							{/* Header */}
							<div className="flex items-start gap-4 mb-6">
								{/* Logo/Icon */}
								<div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[var(--color-primary-dim)] border border-[var(--color-primary)]/20 rounded-xl overflow-hidden">
									{experience.logo ? (
										<img
											src={experience.logo}
											alt={`${experience.company} logo`}
											className="w-full h-full object-cover"
										/>
									) : (
										<span className="text-lg font-bold font-mono text-[var(--color-primary)]">
											{experience.icon}
										</span>
									)}
								</div>

								<div className="flex-1">
									<div className="flex items-start justify-between gap-3">
										<div>
											<h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-1">
												{experience.role}
											</h2>
											<p className="text-lg text-[var(--color-primary)]">
												{experience.company}
											</p>
										</div>

										{experience.status === "Current" && (
											<span className="px-3 py-1 text-xs font-mono bg-[var(--color-primary-dim)] text-[var(--color-primary)] rounded-full border border-[var(--color-primary)]/30">
												Current
											</span>
										)}
									</div>
								</div>
							</div>

							{/* Meta info */}
							<div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-[var(--color-border-primary)]">
								<span className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
									<Calendar className="w-4 h-4 text-[var(--color-text-tertiary)]" />
									{experience.startDate} - {experience.endDate}
								</span>
								<span className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
									<MapPin className="w-4 h-4 text-[var(--color-text-tertiary)]" />
									{experience.location}
								</span>
							</div>

							{/* Description */}
							<div className="mb-6">
								<h3 className="text-sm font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-3">
									Overview
								</h3>
								<p className="text-[var(--color-text-secondary)] leading-relaxed">
									{experience.shortDescription}
								</p>
							</div>

							{/* Key Achievements */}
							{experience.keyAchievements && experience.keyAchievements.length > 0 && (
								<div className="mb-6">
									<h3 className="text-sm font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-4">
										Key Achievements
									</h3>
									<ul className="space-y-3">
										{experience.keyAchievements.map((achievement, index) => (
											<motion.li
												key={index}
												initial={{ opacity: 0, x: -10 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.1 + index * 0.1 }}
												className="flex items-start gap-3"
											>
												<CheckCircle2 className="flex-shrink-0 w-5 h-5 text-[var(--color-primary)] mt-0.5" />
												<span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
													{achievement}
												</span>
											</motion.li>
										))}
									</ul>
								</div>
							)}

							{/* Tech Stack */}
							<div>
								<h3 className="text-sm font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-4">
									Technologies Used
								</h3>
								<div className="flex flex-wrap gap-2">
									{experience.techStack.map((tech, index) => (
										<TechTag key={index} technology={tech} />
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}
