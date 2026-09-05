import React, { useState } from "react";
import { motion } from "framer-motion";
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
		setTimeout(() => setSelectedExperience(null), 200);
	};

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
					<span className="text-[var(--color-primary)]">Experience</span>
				</motion.h2>
			</div>

			{/* Experience Timeline */}
			<div className="relative">
				{/* Vertical timeline line */}
				<div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-border-secondary)] to-transparent" />

				{/* Experience Cards */}
				<div className="space-y-6">
					{experiences.map((experience, index) => (
						<motion.div
							key={experience.id}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="relative pl-6 md:pl-20"
						>
							{/* Timeline dot */}
							<div className="absolute left-0 md:left-8 top-6 -translate-x-1/2 z-10">
								<div className={`w-4 h-4 rounded-full border-2 ${
									experience.status === "Current"
										? "bg-[var(--color-primary)] border-[var(--color-primary)] shadow-[0_0_15px_var(--color-primary-dim)]"
										: "bg-[var(--color-background-card)] border-[var(--color-border-secondary)]"
								}`} />
							</div>

							{/* Date label - Desktop */}
							<div className="hidden md:block absolute left-0 top-5 -translate-x-full pr-8 text-right">
								<span className="text-sm font-mono text-[var(--color-text-tertiary)]">
									{experience.startDate.split(' ')[0].slice(0, 3)} '{experience.startDate.split(' ')[1]?.slice(2) || ''}
								</span>
							</div>

							<ExperienceCard
								experience={experience}
								onClick={() => handleCardClick(experience)}
							/>
						</motion.div>
					))}
				</div>
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
