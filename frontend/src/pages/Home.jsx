import React from "react";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

const Home = () => {
	return (
		<div className="w-full">
			{/* Hero Section */}
			<Hero />

			{/* Experience Section */}
			<ExperienceSection />

			{/* Projects Section */}
			<ProjectsSection />

			{/* Placeholder section for future phase */}
			<section className="mb-24">
				<h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
					Blogs
				</h2>
				<p className="text-[var(--color-text-secondary)]">
					Blogs section coming in Phase 6
				</p>
			</section>
		</div>
	);
};

export default Home;
