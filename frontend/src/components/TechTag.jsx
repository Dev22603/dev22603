import React from "react";
import { cn } from "@/lib/utils";

export default function TechTag({ technology, className, size = "md" }) {
	const sizeClasses = {
		sm: "px-2 py-0.5 text-xs",
		md: "px-3 py-1 text-sm",
		lg: "px-4 py-1.5 text-base",
	};

	return (
		<span
			className={cn(
				"inline-block font-mono font-medium rounded-md",
				"bg-[var(--color-background-tertiary)]",
				"text-[var(--color-text-secondary)]",
				"border border-[var(--color-border-primary)]",
				"transition-all duration-300",
				"hover:border-[var(--color-primary)]/50",
				"hover:text-[var(--color-primary)]",
				"hover:bg-[var(--color-primary-dim)]",
				"whitespace-nowrap",
				sizeClasses[size],
				className
			)}
		>
			{technology}
		</span>
	);
}
