import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import TechTag from "./TechTag";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }) {
	const hasGithubLink = project.links.github;
	const hasLiveLink = project.links.live;

	const handleCardClick = () => {
		if (hasGithubLink) {
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
				"p-6 transition-all duration-200",
				"hover:border-[var(--color-border-secondary)]",
				"hover:shadow-lg hover:brightness-125"
			)}
		>
			{/* Status Badge */}
			{project.status && (
				<div className="absolute top-4 right-4">
					<span
						className={cn(
							"px-2 py-1 text-xs font-medium rounded-full",
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

			{/* Project Name with Link */}
			<div className="flex items-start gap-3 mb-3 pr-20">
				<h3 className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors flex-1">
					{project.name}
				</h3>
				{(hasGithubLink || hasLiveLink) && (
					<ExternalLink className="w-4 h-4 text-[var(--color-text-tertiary)] flex-shrink-0 mt-1" />
				)}
			</div>

			{/* Description */}
			<p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-3">
				{project.description}
			</p>

			{/* Tech Stack */}
			<div className="flex flex-wrap gap-2 mb-4">
				{project.techStack.map((tech, index) => (
					<TechTag key={index} technology={tech} />
				))}
			</div>

			{/* Links */}
			{(hasGithubLink || hasLiveLink) && (
				<div className="flex gap-3 pt-4 border-t border-[var(--color-border-primary)]">
					{hasGithubLink && (
						<a
							href={project.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
							onClick={(e) => e.stopPropagation()}
						>
							<svg
								className="w-4 h-4"
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
					{hasLiveLink && (
						<a
							href={project.links.live}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
							onClick={(e) => e.stopPropagation()}
						>
							<ExternalLink className="w-4 h-4" />
							Live Demo
						</a>
					)}
				</div>
			)}
		</motion.div>
	);
}
