import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TabNavigation({ tabs, activeTab, onTabChange }) {
	return (
		<div className="flex gap-2 mb-8 border-b border-[var(--color-border-primary)]">
			{tabs.map((tab) => (
				<button
					key={tab.id}
					onClick={() => onTabChange(tab.id)}
					className={cn(
						"relative px-4 py-3 text-sm font-medium transition-colors",
						"hover:text-[var(--color-text-primary)]",
						activeTab === tab.id
							? "text-[var(--color-text-primary)]"
							: "text-[var(--color-text-secondary)]"
					)}
				>
					{tab.label}
					{activeTab === tab.id && (
						<motion.div
							layoutId="activeTab"
							className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)]"
							transition={{ type: "spring", stiffness: 400, damping: 30 }}
						/>
					)}
				</button>
			))}
		</div>
	);
}
