import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import TechTag from "./TechTag";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, useModal = false, onModalClick }) {
	const hasGithubLink = project.links?.github;
	const hasLiveLink = project.links?.live;
	const hasNpmLink = project.links?.npm;
	const hasKaggleLink = project.links?.kaggle;

	const handleCardClick = () => {
		if (useModal && onModalClick) {
			// Open modal
			onModalClick();
		} else if (hasGithubLink) {
			// Open GitHub link directly
			window.open(project.links.github, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			transition={{ duration: 0.3 }}
			onClick={handleCardClick}
			className={cn(
				"group relative cursor-pointer",
				"bg-[var(--color-background-secondary)] rounded-xl",
				"border border-[var(--color-border-primary)]",
				"p-4 sm:p-5 md:p-6 transition-all duration-200",
				"hover:border-[var(--color-border-secondary)]",
				"hover:shadow-lg hover:brightness-125"
			)}
		>
			{/* Status Badge */}
			{project.status && (
				<div className="absolute top-3 right-3 sm:top-4 sm:right-4">
					<span
						className={cn(
							"px-2 py-0.5 sm:py-1 text-xs font-medium rounded-full whitespace-nowrap",
							project.status === "Paused"
								? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
								: project.status === "Completed"
								? "bg-green-500/10 text-green-500 border border-green-500/20"
								: "bg-blue-500/10 text-blue-500 border border-blue-500/20"
						)}
					>
						{project.status}
					</span>
				</div>
			)}

			{/* Project Name */}
			<div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3 pr-16 sm:pr-20">
				<h3 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors flex-1 break-words">
					{project.name}
				</h3>
			</div>

			{/* Description */}
			<p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3 sm:mb-4 line-clamp-3">
				{project.description}
			</p>

			{/* Tech Stack */}
			<div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
				{project.techStack.map((tech, index) => (
					<TechTag key={index} technology={tech} />
				))}
			</div>

			{/* Links */}
			{(hasGithubLink || hasLiveLink || hasNpmLink || hasKaggleLink) && (
				<div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-[var(--color-border-primary)]">
					{hasGithubLink && (
						<a
							href={project.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1.5 py-1.5 px-0.5 -mx-0.5"
							onClick={(e) => e.stopPropagation()}
						>
							<svg
								className="w-4 h-4 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									fillRule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clipRule="evenodd"
								/>
							</svg>
							GitHub
						</a>
					)}
					{hasNpmLink && (
						<a
							href={project.links.npm}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1.5 py-1.5 px-0.5 -mx-0.5"
							onClick={(e) => e.stopPropagation()}
						>
							<svg
								className="w-4 h-4 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"/>
							</svg>
							npm
						</a>
					)}
					{hasKaggleLink && (
						<a
							href={project.links.kaggle}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1.5 py-1.5 px-0.5 -mx-0.5"
							onClick={(e) => e.stopPropagation()}
						>
							<svg
								className="w-4 h-4 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.28.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.076.339"/>
							</svg>
							Kaggle
						</a>
					)}
					{hasLiveLink && (
						<a
							href={project.links.live}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1.5 py-1.5 px-0.5 -mx-0.5"
							onClick={(e) => e.stopPropagation()}
						>
							<ExternalLink className="w-4 h-4 flex-shrink-0" />
							Live Demo
						</a>
					)}
				</div>
			)}
		</motion.div>
	);
}
