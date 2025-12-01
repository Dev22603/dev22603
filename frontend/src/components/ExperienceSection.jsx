import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceModal from "./ExperienceModal";
import portfolioData from "../../portfolio.json";

export default function ExperienceSection() {
	const [selectedExperience, setSelectedExperience] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const experiences = portfolioData.experience;

	const handleCardClick = (experience) => {
		setSelectedExperience(experience);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		// Delay clearing selection for smooth animation
		setTimeout(() => setSelectedExperience(null), 200);
	};

	return (
		<section className="w-full mb-24 md:mb-32">
			{/* Section Header */}
			<div className="mb-8">
				<h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-3">
					Experience
				</h2>
				<p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-3xl">
					Here's a timeline of my professional journey, showcasing my roles and
					contributions in blockchain and full-stack development.
				</p>
			</div>

			{/* Experience Cards */}
			<div className="space-y-4">
				{experiences.map((experience) => (
					<ExperienceCard
						key={experience.id}
						experience={experience}
						onClick={() => handleCardClick(experience)}
					/>
				))}
			</div>

			{/* Experience Modal */}
			<ExperienceModal
				experience={selectedExperience}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			/>
		</section>
	);
}
