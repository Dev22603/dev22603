import React from "react";
import Hero from "@/components/Hero";

const Home = () => {
	return (
		<div className="w-full">
			{/* Hero Section */}
			<Hero />

			{/* Placeholder sections for future phases */}
			<section className="mb-24">
				<h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
					Experience
				</h2>
				<p className="text-[var(--color-text-secondary)]">
					Experience section coming in Phase 4
				</p>
			</section>

			<section className="mb-24">
				<h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
					Projects
				</h2>
				<p className="text-[var(--color-text-secondary)]">
					Projects section coming in Phase 5
				</p>
			</section>

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
