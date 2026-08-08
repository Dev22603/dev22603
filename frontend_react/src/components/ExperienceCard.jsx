import React from "react";
import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import TechTag from "./TechTag";
import { cn } from "@/lib/utils";

export default function ExperienceCard({ experience, onClick }) {
	return (
		<motion.div
			whileHover={{ x: 4 }}
			whileTap={{ scale: 0.99 }}
			transition={{ duration: 0.2 }}
			className={cn(
				"relative cursor-pointer group",
				"bg-[var(--color-background-card)]",
				"border border-[var(--color-border-primary)]",
				"rounded-xl overflow-hidden",
				"transition-all duration-300",
				"hover:border-[var(--color-border-secondary)]",
				"hover:shadow-[0_10px_40px_-15px_var(--color-primary-dim)]"
			)}
			onClick={onClick}
		>
			{/* Current status indicator bar */}
			{experience.status === "Current" && (
				<div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-primary)]" />
			)}

			<div className="p-5 sm:p-6">
				<div className="flex items-start gap-4">
					{/* Logo/Icon */}
					<div className={cn(
						"flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl overflow-hidden",
						"bg-[var(--color-primary-dim)]",
						"border border-[var(--color-primary)]/20",
						"group-hover:border-[var(--color-primary)]/40",
						"transition-colors duration-300"
					)}>
						{experience.logo ? (
							<img
								src={experience.logo}
								alt={`${experience.company} logo`}
								className="w-full h-full object-cover"
							/>
						) : (
							<span className="text-sm font-bold font-mono text-[var(--color-primary)]">
								{experience.icon}
							</span>
						)}
					</div>

					{/* Content */}
					<div className="flex-1 min-w-0">
						{/* Header row */}
						<div className="flex items-start justify-between gap-3 mb-2">
							<div>
								<h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
									{experience.role}
								</h3>
								<p className="text-sm font-medium text-[var(--color-text-secondary)]">
									{experience.company}
								</p>
							</div>

							{/* Status badge */}
							{experience.status === "Current" && (
								<span className="flex-shrink-0 px-3 py-1 text-xs font-mono font-medium bg-[var(--color-primary-dim)] text-[var(--color-primary)] rounded-full border border-[var(--color-primary)]/30">
									Current
								</span>
							)}
						</div>

						{/* Meta info */}
						<div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-xs text-[var(--color-text-tertiary)]">
							<span className="font-mono">
								{experience.startDate} - {experience.endDate}
							</span>
							<span className="flex items-center gap-1">
								<MapPin className="w-3 h-3" />
								{experience.location}
							</span>
						</div>

						{/* Description */}
						<p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-2">
							{experience.shortDescription}
						</p>

						{/* Tech stack preview */}
						<div className="flex flex-wrap gap-1.5">
							{experience.techStack.slice(0, 4).map((tech, index) => (
								<TechTag key={index} technology={tech} size="sm" />
							))}
							{experience.techStack.length > 4 && (
								<span className="px-2 py-0.5 text-xs text-[var(--color-text-tertiary)] font-mono">
									+{experience.techStack.length - 4}
								</span>
							)}
						</div>
					</div>

					{/* Arrow indicator */}
					<ChevronRight className="flex-shrink-0 w-5 h-5 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all duration-300" />
				</div>
			</div>
		</motion.div>
	);
}
