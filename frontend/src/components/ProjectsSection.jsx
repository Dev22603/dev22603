import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TabNavigation from "./TabNavigation";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import portfolioData from "../../portfolio.json";

export default function ProjectsSection() {
	const [activeTab, setActiveTab] = useState("personal");
	const [selectedProject, setSelectedProject] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Control whether to show Client Work tab (set to false if you have no client work)
	const SHOW_CLIENT_WORK_TAB = false;

	// Control whether clicking a card opens modal (true) or redirects to link (false)
	const USE_MODAL_ON_CLICK = true;

	const tabs = SHOW_CLIENT_WORK_TAB
		? [
				{ id: "personal", label: "Personal Projects" },
				{ id: "client", label: "Client Work" },
		  ]
		: [{ id: "personal", label: "Personal Projects" }];

	// Get projects based on active tab
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
			<div className="mb-8">
				<h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-3">
					Projects
				</h2>
				<p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-3xl">
					A collection of my work spanning from blockchain applications to
					full-stack projects, both personal and professional.
				</p>
			</div>

			{/* Tab Navigation - Only show if client work tab is enabled */}
			{SHOW_CLIENT_WORK_TAB && (
				<TabNavigation
					tabs={tabs}
					activeTab={activeTab}
					onTabChange={setActiveTab}
				/>
			)}

			{/* Projects Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<AnimatePresence mode="wait">
					{displayedProjects.map((project) => (
						<ProjectCard
							key={project.id}
							project={project}
							useModal={USE_MODAL_ON_CLICK}
							onModalClick={() => handleProjectClick(project)}
						/>
					))}
				</AnimatePresence>
			</div>

			{/* Empty State */}
			{displayedProjects.length === 0 && (
				<div className="text-center py-12">
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
