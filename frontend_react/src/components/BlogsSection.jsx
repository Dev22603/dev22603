import React from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import portfolioData from "../../portfolio.json";

export default function BlogsSection() {
	const blogs = portfolioData.blogs;

	return (
		<section id="blogs" className="w-full mb-24 md:mb-32">
			{/* Section Header */}
			<div className="mb-12">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl lg:text-5xl"
					style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
				>
					<span className="text-[var(--color-primary)]">Blogs</span>
				</motion.h2>
			</div>

			{/* Blogs Grid */}
			{blogs && blogs.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
					{blogs.map((blog, index) => (
						<motion.div
							key={blog.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<BlogCard blog={blog} index={index} />
						</motion.div>
					))}
				</div>
			) : (
				<div className="text-center py-16">
					<p className="text-[var(--color-text-secondary)]">
						No blog posts yet. Check back soon!
					</p>
				</div>
			)}
		</section>
	);
}
