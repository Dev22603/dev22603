import React from "react";
import { cn } from "@/lib/utils";

export default function TechTag({ technology, className }) {
	return (
		<span
			className={cn(
				"inline-block px-3 py-1 text-sm font-medium rounded-full",
				"bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]",
				"border border-[var(--color-border-primary)]",
				"transition-colors duration-200",
				"hover:bg-[var(--color-background-tertiary)]",
				className
			)}
		>
			{technology}
		</span>
	);
}
