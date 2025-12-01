import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ExperienceCard({ experience, onClick }) {
	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			transition={{ duration: 0.2 }}
			className={cn(
				"relative cursor-pointer group",
				"bg-[var(--color-background-secondary)] rounded-xl",
				"border border-[var(--color-border-primary)]",
				"p-6 transition-all duration-200",
				"hover:border-[var(--color-border-secondary)]",
				"hover:shadow-lg hover:brightness-125"
			)}
			onClick={onClick}
		>
			<div className="flex items-start gap-4">
				{/* Icon/Logo */}
				<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[var(--color-primary)]/10 rounded-full text-2xl">
					{experience.icon}
				</div>

				{/* Content */}
				<div className="flex-1 min-w-0">
					{/* Title and Status */}
					<div className="flex items-start justify-between gap-3 mb-2">
						<h3 className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
							{experience.role}
						</h3>
						{experience.status === "Current" && (
							<span className="flex-shrink-0 px-2 py-1 text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full border border-[var(--color-primary)]/20">
								Current
							</span>
						)}
					</div>

					{/* Company and Duration */}
					<div className="space-y-1 mb-3">
						<p className="text-sm font-medium text-[var(--color-text-secondary)]">
							{experience.company}
						</p>
						<p className="text-xs text-[var(--color-text-tertiary)]">
							{experience.startDate} - {experience.endDate}
						</p>
					</div>

					{/* Short Description */}
					<p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
						{experience.shortDescription}
					</p>
				</div>
			</div>
		</motion.div>
	);
}
