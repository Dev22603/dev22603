import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import TechTag from "./TechTag";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, useModal = false, onModalClick, featured = false }) {
	const hasGithubLink = project.links?.github;
	const hasLiveLink = project.links?.live;
	const hasNpmLink = project.links?.npm;
	const hasKaggleLink = project.links?.kaggle;

	const handleCardClick = () => {
		if (useModal && onModalClick) {
			onModalClick();
		} else if (hasGithubLink) {
			window.open(project.links.github, "_blank", "noopener,noreferrer");
		}
	};

	const statusColors = {
		Paused: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30" },
		Completed: { bg: "bg-[var(--color-primary-dim)]", text: "text-[var(--color-primary)]", border: "border-[var(--color-primary)]/30" },
		Active: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
	};

	const status = statusColors[project.status] || statusColors.Active;

	return (
		<motion.div
			whileHover={{ y: -4 }}
			whileTap={{ scale: 0.99 }}
			transition={{ duration: 0.3 }}
			onClick={handleCardClick}
			className={cn(
				"group relative cursor-pointer h-full",
				"bg-[var(--color-background-card)]",
				"border border-[var(--color-border-primary)]",
				"rounded-xl overflow-hidden",
				"transition-all duration-400",
				"hover:border-[var(--color-border-secondary)]",
				"hover:shadow-[0_20px_50px_-20px_var(--color-primary-dim)]",
				featured && "md:flex md:items-stretch"
			)}
		>
			{/* Hover gradient overlay */}
			<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
				<div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dim)] via-transparent to-transparent" />
			</div>

			{/* Featured image placeholder for featured card */}
			{featured && (
				<div className="hidden md:flex md:w-2/5 relative bg-[var(--color-background-tertiary)] items-center justify-center p-8">
					<div className="absolute inset-0 opacity-30" style={{
						backgroundImage: `
							linear-gradient(45deg, var(--color-grid-line) 1px, transparent 1px),
							linear-gradient(-45deg, var(--color-grid-line) 1px, transparent 1px)
						`,
						backgroundSize: '20px 20px',
					}} />
					<div className="relative text-6xl font-bold text-[var(--color-primary)] opacity-20 font-mono">
						01
					</div>
					{/* Corner accents */}
					<div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-[var(--color-primary)]/50" />
					<div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[var(--color-primary)]/50" />
				</div>
			)}

			{/* Content */}
			<div className={cn("relative p-5 sm:p-6", featured && "md:w-3/5 md:p-8")}>
				{/* Header */}
				<div className="flex items-start justify-between gap-3 mb-3">
					<div className="flex-1">
						{/* Status Badge */}
						{project.status && (
							<span className={cn(
								"inline-block px-2.5 py-1 text-xs font-mono rounded-full mb-3",
								status.bg, status.text, `border ${status.border}`
							)}>
								{project.status}
							</span>
						)}

						{/* Project Name */}
						<h3 className={cn(
							"font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors",
							featured ? "text-xl md:text-2xl" : "text-lg"
						)}>
							{project.name}
						</h3>
					</div>

					{/* Arrow indicator */}
					<ArrowUpRight className="flex-shrink-0 w-5 h-5 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
				</div>

				{/* Description */}
				<p className={cn(
					"text-[var(--color-text-secondary)] leading-relaxed mb-4",
					featured ? "text-base" : "text-sm line-clamp-3"
				)}>
					{project.description}
				</p>

				{/* Tech Stack */}
				<div className="flex flex-wrap gap-1.5 mb-4">
					{project.techStack.slice(0, featured ? 6 : 4).map((tech, index) => (
						<TechTag key={index} technology={tech} size="sm" />
					))}
					{project.techStack.length > (featured ? 6 : 4) && (
						<span className="px-2 py-0.5 text-xs text-[var(--color-text-tertiary)] font-mono">
							+{project.techStack.length - (featured ? 6 : 4)}
						</span>
					)}
				</div>

				{/* Links */}
				{(hasGithubLink || hasLiveLink || hasNpmLink || hasKaggleLink) && (
					<div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--color-border-primary)]">
						{hasGithubLink && (
							<a
								href={project.links.github}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors"
								onClick={(e) => e.stopPropagation()}
							>
								<Github className="w-4 h-4" />
								<span>Source</span>
							</a>
						)}
						{hasNpmLink && (
							<a
								href={project.links.npm}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors"
								onClick={(e) => e.stopPropagation()}
							>
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
									<path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"/>
								</svg>
								<span>npm</span>
							</a>
						)}
						{hasKaggleLink && (
							<a
								href={project.links.kaggle}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors"
								onClick={(e) => e.stopPropagation()}
							>
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
									<path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.28.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.076.339"/>
								</svg>
								<span>Kaggle</span>
							</a>
						)}
						{hasLiveLink && (
							<a
								href={project.links.live}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors"
								onClick={(e) => e.stopPropagation()}
							>
								<ExternalLink className="w-4 h-4" />
								<span>Live</span>
							</a>
						)}
					</div>
				)}
			</div>
		</motion.div>
	);
}
