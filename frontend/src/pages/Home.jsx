import React from "react";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Home = () => {
	return (
		<>
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

			{/* Footer */}
			<Footer />

			{/* Scroll to Top Button */}
			<ScrollToTop />
		</>
	);
};

export default Home;
