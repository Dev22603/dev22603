import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import TechTag from "./TechTag";

export default function ProjectModal({ project, isOpen, onClose }) {
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

	if (!project) return null;

	const hasGithubLink = project.links?.github;
	const hasLiveLink = project.links?.live;

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
						>
							{/* Close Button */}
							<button
								onClick={onClose}
								className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[var(--color-background-primary)]/80 hover:bg-[var(--color-background-primary)] transition-colors border border-[var(--color-border-primary)] cursor-pointer"
								aria-label="Close modal"
							>
								<X className="w-5 h-5 text-[var(--color-text-secondary)]" />
							</button>

							{/* Modal Content */}
							<div className="max-h-[80vh] overflow-y-auto p-8">
								{/* Header */}
								<div className="mb-6 pr-8">
									<div className="flex items-start justify-between gap-4 mb-3">
										<h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
											{project.name}
										</h2>
										{project.status && (
											<span
												className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
													project.status === "Paused"
														? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
														: project.status === "Completed"
														? "bg-green-500/10 text-green-500 border border-green-500/20"
														: "bg-blue-500/10 text-blue-500 border border-blue-500/20"
												}`}
											>
												{project.status}
											</span>
										)}
									</div>

									{/* Description */}
									<p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
										{project.description}
									</p>
								</div>

								{/* Tech Stack */}
								<div className="mb-6">
									<h3 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-3">
										Tech Stack
									</h3>
									<div className="flex flex-wrap gap-2">
										{project.techStack?.map((tech, index) => (
											<TechTag key={index} technology={tech} />
										))}
									</div>
								</div>

								{/* Key Features (if available) */}
								{project.features && project.features.length > 0 && (
									<div className="mb-6">
										<h3 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-3">
											Key Features
										</h3>
										<ul className="space-y-2">
											{project.features.map((feature, index) => (
												<li
													key={index}
													className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
												>
													<span className="text-[var(--color-primary)] mt-1">•</span>
													<span className="flex-1">{feature}</span>
												</li>
											))}
										</ul>
									</div>
								)}

								{/* Links */}
								{(hasGithubLink || hasLiveLink) && (
									<div className="pt-6 border-t border-[var(--color-border-primary)]">
										<div className="flex flex-wrap gap-3">
											{hasGithubLink && (
												<a
													href={project.links.github}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-background-primary)] hover:brightness-125 text-[var(--color-text-primary)] rounded-lg border border-[var(--color-border-primary)] hover:border-[var(--color-border-secondary)] transition-all"
												>
													<svg
														className="w-5 h-5"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															fillRule="evenodd"
															d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
															clipRule="evenodd"
														/>
													</svg>
													View on GitHub
												</a>
											)}
											{hasLiveLink && (
												<a
													href={project.links.live}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-lg transition-all"
												>
													<ExternalLink className="w-5 h-5" />
													Visit Live Demo
												</a>
											)}
										</div>
									</div>
								)}
							</div>
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	);
}
