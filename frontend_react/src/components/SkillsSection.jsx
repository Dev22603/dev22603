import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Layout, Wrench, Brain } from "lucide-react";
import portfolioData from "../../portfolio.json";

const categoryConfig = {
	backend: {
		label: "Backend",
		icon: Server,
		color: "#00d4aa",
		description: "Server-side technologies & databases"
	},
	frontend: {
		label: "Frontend",
		icon: Layout,
		color: "#ff6b35",
		description: "Client-side frameworks & styling"
	},
	languages: {
		label: "Languages",
		icon: Code2,
		color: "#9b5de5",
		description: "Programming languages"
	},
	mlDl: {
		label: "ML / DL",
		icon: Brain,
		color: "#f15bb5",
		description: "Machine learning & deep learning"
	},
	tools: {
		label: "Tools",
		icon: Wrench,
		color: "#00bbf9",
		description: "Development & productivity tools"
	}
};

export default function SkillsSection() {
	const [activeCategory, setActiveCategory] = useState("backend");
	const skills = portfolioData.skills;

	const categories = Object.keys(skills).filter(key => categoryConfig[key]);

	return (
		<section className="w-full mb-24 md:mb-32">
			{/* Section Header */}
			<div className="mb-12">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl lg:text-5xl"
					style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
				>
					<span className="text-[var(--color-primary)]">Skills</span>
				</motion.h2>
			</div>

			{/* Category Navigation */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.3 }}
				className="flex flex-wrap gap-2 mb-10"
			>
				{categories.map((categoryKey) => {
					const config = categoryConfig[categoryKey];
					const Icon = config.icon;
					const isActive = activeCategory === categoryKey;

					return (
						<button
							key={categoryKey}
							onClick={() => setActiveCategory(categoryKey)}
							className={`
								relative flex items-center gap-2 px-4 py-2.5 rounded-lg
								font-medium text-sm transition-all duration-300
								${isActive
									? 'text-[var(--color-background-primary)]'
									: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] bg-[var(--color-background-card)] border border-[var(--color-border-primary)] hover:border-[var(--color-border-secondary)]'
								}
							`}
							style={isActive ? { backgroundColor: config.color } : {}}
						>
							<Icon className="w-4 h-4" strokeWidth={1.5} />
							<span>{config.label}</span>
							{isActive && (
								<motion.span
									layoutId="activeTab"
									className="absolute inset-0 rounded-lg -z-10"
									style={{ backgroundColor: config.color }}
									transition={{ type: "spring", duration: 0.5 }}
								/>
							)}
						</button>
					);
				})}
			</motion.div>

			{/* Skills Display */}
			<div className="relative">
				{/* Background decorative grid */}
				<div className="absolute inset-0 -m-4 border border-[var(--color-border-primary)] rounded-2xl opacity-50" />

				<div className="relative p-6 md:p-8">
					{/* Category description */}
					<AnimatePresence mode="wait">
						<motion.div
							key={activeCategory}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 10 }}
							transition={{ duration: 0.3 }}
							className="mb-8 flex items-center gap-3"
						>
							{(() => {
								const config = categoryConfig[activeCategory];
								const Icon = config.icon;
								return (
									<>
										<div
											className="p-3 rounded-xl"
											style={{ backgroundColor: `${config.color}20` }}
										>
											<Icon
												className="w-6 h-6"
												style={{ color: config.color }}
												strokeWidth={1.5}
											/>
										</div>
										<div>
											<h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
												{config.label}
											</h3>
											<p className="text-sm text-[var(--color-text-tertiary)]">
												{config.description}
											</p>
										</div>
									</>
								);
							})()}
						</motion.div>
					</AnimatePresence>

					{/* Skills Grid */}
					<AnimatePresence mode="wait">
						<motion.div
							key={activeCategory}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
						>
							{skills[activeCategory]?.map((skill, index) => {
								const config = categoryConfig[activeCategory];
								return (
									<motion.div
										key={skill}
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.3, delay: index * 0.05 }}
										className="group relative"
									>
										<div
											className="relative px-4 py-3 bg-[var(--color-background-card)] border border-[var(--color-border-primary)] rounded-xl text-center cursor-default transition-all duration-300 hover:border-[var(--color-border-secondary)] overflow-hidden"
											style={{
												'--hover-color': config.color,
											}}
										>
											{/* Hover gradient */}
											<div
												className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
												style={{
													background: `linear-gradient(135deg, ${config.color}10 0%, transparent 50%)`,
												}}
											/>

											{/* Skill name */}
											<span className="relative text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-text-primary)]">
												{skill}
											</span>

											{/* Bottom accent line */}
											<div
												className="absolute bottom-0 left-0 right-0 h-[2px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
												style={{ backgroundColor: config.color }}
											/>
										</div>
									</motion.div>
								);
							})}
						</motion.div>
					</AnimatePresence>

					{/* Decorative corner elements */}
					<div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[var(--color-border-secondary)] rounded-tl-lg" />
					<div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[var(--color-border-secondary)] rounded-tr-lg" />
					<div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[var(--color-border-secondary)] rounded-bl-lg" />
					<div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[var(--color-border-secondary)] rounded-br-lg" />
				</div>
			</div>

		</section>
	);
}
