import React from "react";
import BlogCard from "./BlogCard";
import portfolioData from "../../portfolio.json";

export default function BlogsSection() {
	const blogs = portfolioData.blogs;

	return (
		<section className="w-full mb-24 md:mb-32">
			{/* Section Header */}
			<div className="mb-8">
				<h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-3">
					Blogs
				</h2>
				<p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-3xl">
					I write about software development, sharing insights and experiences
					from my journey in tech.
				</p>
			</div>

			{/* Blogs Grid */}
			{blogs && blogs.length > 0 ? (
				<div className="grid grid-cols-1 gap-6">
					{blogs.map((blog, index) => (
						<BlogCard key={blog.id} blog={blog} index={index} />
					))}
				</div>
			) : (
				/* Empty State */
				<div className="text-center py-12">
					<p className="text-[var(--color-text-secondary)]">
						No blog posts yet. Check back soon!
					</p>
				</div>
			)}
		</section>
	);
}
