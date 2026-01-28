import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabNavigation from "./TabNavigation";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import portfolioData from "../../portfolio.json";

export default function ProjectsSection() {
	const [activeTab, setActiveTab] = useState("personal");
	const [selectedProject, setSelectedProject] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const SHOW_CLIENT_WORK_TAB = false;
	const USE_MODAL_ON_CLICK = true;

	const tabs = SHOW_CLIENT_WORK_TAB
		? [
				{ id: "personal", label: "Personal Projects" },
				{ id: "client", label: "Client Work" },
		  ]
		: [{ id: "personal", label: "Personal Projects" }];

	const displayedProjects =
		activeTab === "personal"
			? portfolioData.projects.personal
			: portfolioData.projects.client;

	const handleProjectClick = (project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setTimeout(() => setSelectedProject(null), 200);
	};

	return (
		<section className="w-full mb-24 md:mb-32">
			{/* Section Header */}
			<div className="mb-12">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="flex items-center gap-3 mb-4"
				>
					<div className="h-[1px] w-12 bg-[var(--color-primary)]" />
					<span className="font-mono text-sm text-[var(--color-primary)] tracking-wider uppercase">
						Featured Work
					</span>
				</motion.div>

				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className="text-3xl md:text-4xl lg:text-5xl mb-4"
					style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
				>
					Selected <span className="text-[var(--color-primary)]">Projects</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl"
				>
					{SHOW_CLIENT_WORK_TAB
						? "A collection of work spanning blockchain applications to full-stack projects, including personal initiatives and professional client engagements."
						: "A showcase of my personal projects, ranging from npm libraries to full-stack web applications and machine learning experiments."}
				</motion.p>
			</div>

			{/* Tab Navigation */}
			{SHOW_CLIENT_WORK_TAB && (
				<TabNavigation
					tabs={tabs}
					activeTab={activeTab}
					onTabChange={setActiveTab}
				/>
			)}

			{/* Projects Grid - Masonry-like layout */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ delay: 0.3 }}
				className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
			>
				<AnimatePresence mode="wait">
					{displayedProjects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className={index === 0 ? "md:col-span-2" : ""}
						>
							<ProjectCard
								project={project}
								useModal={USE_MODAL_ON_CLICK}
								onModalClick={() => handleProjectClick(project)}
								featured={index === 0}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>

			{/* Empty State */}
			{displayedProjects.length === 0 && (
				<div className="text-center py-16">
					<p className="text-[var(--color-text-secondary)]">
						No projects in this category yet.
					</p>
				</div>
			)}

			{/* Project Modal */}
			<ProjectModal
				project={selectedProject}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			/>
		</section>
	);
}
