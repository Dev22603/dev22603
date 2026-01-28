import React from "react";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";

const Home = () => {
	return (
		<div className="w-full">
			{/* Hero Section */}
			<Hero />

			{/* Skills Section - NEW */}
			<section id="skills">
				<SkillsSection />
			</section>

			{/* Experience Section */}
			<section id="experience">
				<ExperienceSection />
			</section>

			{/* Projects Section */}
			<section id="projects">
				<ProjectsSection />
			</section>

			{/* Blogs Section */}
			<BlogsSection />
		</div>
	);
};

export default Home;
