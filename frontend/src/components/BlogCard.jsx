import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import TechTag from "./TechTag";
import { cn } from "@/lib/utils";

export default function BlogCard({ blog, index }) {
	const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<motion.a
			href={blog.slug}
			target="_blank"
			rel="noopener noreferrer"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, delay: index * 0.1 }}
			className={cn(
				"group block",
				"bg-[var(--color-background-secondary)] rounded-xl",
				"border border-[var(--color-border-primary)]",
				"p-6 transition-all duration-200",
				"hover:border-[var(--color-border-secondary)]",
				"hover:shadow-lg",
				"cursor-pointer"
			)}
		>
			{/* Header with Title and External Link Icon */}
			<div className="flex items-start justify-between gap-3 mb-3">
				<h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors flex-1 leading-tight">
					{blog.title}
				</h3>
				<ExternalLink className="w-5 h-5 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-primary)] transition-colors flex-shrink-0 mt-1" />
			</div>

			{/* Date */}
			<div className="flex items-center gap-2 mb-4">
				<Calendar className="w-4 h-4 text-[var(--color-text-tertiary)]" />
				<time
					dateTime={blog.date}
					className="text-sm text-[var(--color-text-tertiary)]"
				>
					{formattedDate}
				</time>
			</div>

			{/* Excerpt/Description */}
			<p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-3">
				{blog.excerpt}
			</p>

			{/* Tags */}
			{blog.tags && blog.tags.length > 0 && (
				<div className="flex flex-wrap gap-2">
					{blog.tags.map((tag, idx) => (
						<TechTag key={idx} technology={tag} />
					))}
				</div>
			)}
		</motion.a>
	);
}
