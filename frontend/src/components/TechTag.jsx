import React from "react";
import { cn } from "@/lib/utils";

export default function TechTag({ technology, className }) {
	return (
		<span
			className={cn(
				"inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium rounded-full",
				"bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]",
				"border border-[var(--color-border-primary)]",
				"transition-colors duration-200",
				"hover:bg-[var(--color-background-tertiary)]",
				"whitespace-nowrap max-w-full overflow-hidden text-ellipsis",
				className
			)}
		>
			{technology}
		</span>
	);
}
