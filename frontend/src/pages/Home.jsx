import React from "react";

const Home = () => {
	return (
		<div className="w-full">
			{/* Hero Section - Placeholder for Phase 3 */}
			<section className="mb-24">
				<div className="text-center">
					<h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
						Welcome
					</h1>
					<p className="text-lg text-[var(--color-text-secondary)]">
						Portfolio redesign in progress - Phase 2 complete
					</p>
				</div>
			</section>

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
