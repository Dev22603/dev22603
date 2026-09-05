import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TabNavigation({ tabs, activeTab, onTabChange }) {
	return (
		<div className="flex gap-1 mb-8 p-1 bg-[var(--color-background-card)] border border-[var(--color-border-primary)] rounded-xl w-fit">
			{tabs.map((tab) => (
				<button
					key={tab.id}
					onClick={() => onTabChange(tab.id)}
					className={cn(
						"relative px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300",
						activeTab === tab.id
							? "text-[var(--color-background-primary)]"
							: "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
					)}
				>
					{activeTab === tab.id && (
						<motion.div
							layoutId="activeTabBg"
							className="absolute inset-0 bg-[var(--color-primary)] rounded-lg"
							transition={{ type: "spring", stiffness: 400, damping: 30 }}
						/>
					)}
					<span className="relative z-10">{tab.label}</span>
				</button>
			))}
		</div>
	);
}
