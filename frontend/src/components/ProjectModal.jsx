import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import TechTag from "./TechTag";

export default function ProjectModal({ project, isOpen, onClose }) {
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

	if (!project) return null;

	const hasGithubLink = project.links?.github;
	const hasLiveLink = project.links?.live;
	const hasNpmLink = project.links?.npm;
	const hasKaggleLink = project.links?.kaggle;

	const statusColors = {
		Paused: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30" },
		Completed: { bg: "bg-[var(--color-primary-dim)]", text: "text-[var(--color-primary)]", border: "border-[var(--color-primary)]/30" },
		Active: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
	};

	const status = statusColors[project.status] || statusColors.Active;

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
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
						className="relative w-full max-w-3xl max-h-[78vh] overflow-hidden bg-[var(--color-background-card)] border border-[var(--color-border-primary)] rounded-2xl shadow-2xl mt-16"
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
						<div className="overflow-y-auto max-h-[78vh] p-6 sm:p-8">
							{/* Header */}
							<div className="mb-6">
								{/* Status Badge */}
								{project.status && (
									<span className={`inline-block px-3 py-1 text-xs font-mono rounded-full mb-4 ${status.bg} ${status.text} border ${status.border}`}>
										{project.status}
									</span>
								)}

								<h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-text-primary)] mb-2">
									{project.name}
								</h2>
							</div>

							{/* Description */}
							<div className="mb-6 pb-6 border-b border-[var(--color-border-primary)]">
								<h3 className="text-sm font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-3">
									About
								</h3>
								<p className="text-[var(--color-text-secondary)] leading-relaxed">
									{project.description}
								</p>
							</div>

							{/* Tech Stack */}
							<div className="mb-6 pb-6 border-b border-[var(--color-border-primary)]">
								<h3 className="text-sm font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-4">
									Technologies
								</h3>
								<div className="flex flex-wrap gap-2">
									{project.techStack.map((tech, index) => (
										<TechTag key={index} technology={tech} />
									))}
								</div>
							</div>

							{/* Links */}
							{(hasGithubLink || hasLiveLink || hasNpmLink || hasKaggleLink) && (
								<div>
									<h3 className="text-sm font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-4">
										Links
									</h3>
									<div className="flex flex-wrap gap-3">
										{hasGithubLink && (
											<a
												href={project.links.github}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-background-tertiary)] border border-[var(--color-border-primary)] rounded-lg text-sm text-[var(--color-text-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
											>
												<Github className="w-4 h-4" />
												View Source
											</a>
										)}
										{hasNpmLink && (
											<a
												href={project.links.npm}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-background-tertiary)] border border-[var(--color-border-primary)] rounded-lg text-sm text-[var(--color-text-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
											>
												<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
													<path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"/>
												</svg>
												npm Package
											</a>
										)}
										{hasKaggleLink && (
											<a
												href={project.links.kaggle}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-background-tertiary)] border border-[var(--color-border-primary)] rounded-lg text-sm text-[var(--color-text-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
											>
												<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
													<path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.28.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.076.339"/>
												</svg>
												View on Kaggle
											</a>
										)}
										{hasLiveLink && (
											<a
												href={project.links.live}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-primary)] text-[var(--color-background-primary)] rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300"
											>
												<ExternalLink className="w-4 h-4" />
												Live Demo
											</a>
										)}
									</div>
								</div>
							)}
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}
