import React from "react";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";

const Home = () => {
	return (
		<div className="w-full">
			{/* Hero Section */}
			<Hero />

			{/* Experience Section */}
			<ExperienceSection />

			{/* Projects Section */}
			<ProjectsSection />

			{/* Blogs Section */}
			<BlogsSection />
		</div>
	);
};

export default Home;
