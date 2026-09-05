import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import TechTag from "./TechTag";
import { cn } from "@/lib/utils";

export default function BlogCard({ blog, index }) {
	const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	return (
		<motion.a
			href={blog.slug}
			target="_blank"
			rel="noopener noreferrer"
			whileHover={{ y: -4 }}
			className={cn(
				"group block h-full relative",
				"bg-[var(--color-background-card)]",
				"border border-[var(--color-border-primary)]",
				"rounded-xl overflow-hidden",
				"transition-all duration-400",
				"hover:border-[var(--color-border-secondary)]",
				"hover:shadow-[0_20px_50px_-20px_var(--color-primary-dim)]"
			)}
		>
			{/* Hover gradient overlay */}
			<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
				<div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dim)] via-transparent to-transparent" />
			</div>

			{/* Article number */}
			<div className="absolute top-4 right-4 font-mono text-4xl font-bold text-[var(--color-border-secondary)] group-hover:text-[var(--color-primary-dim)] transition-colors duration-300">
				{String(index + 1).padStart(2, '0')}
			</div>

			<div className="relative p-5 sm:p-6">
				{/* Date */}
				<div className="flex items-center gap-2 mb-4">
					<Calendar className="w-4 h-4 text-[var(--color-text-tertiary)]" />
					<time
						dateTime={blog.date}
						className="text-sm font-mono text-[var(--color-text-tertiary)]"
					>
						{formattedDate}
					</time>
				</div>

				{/* Title */}
				<div className="flex items-start justify-between gap-3 mb-3 pr-8">
					<h3 className="text-lg sm:text-xl font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors leading-tight">
						{blog.title}
					</h3>
				</div>

				{/* Excerpt */}
				<p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-2">
					{blog.excerpt}
				</p>

				{/* Tags */}
				{blog.tags && blog.tags.length > 0 && (
					<div className="flex flex-wrap gap-1.5 mb-4">
						{blog.tags.map((tag, idx) => (
							<TechTag key={idx} technology={tag} size="sm" />
						))}
					</div>
				)}

				{/* Read more link */}
				<div className="flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium pt-4 border-t border-[var(--color-border-primary)]">
					<span>Read article</span>
					<ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
				</div>
			</div>
		</motion.a>
	);
}
