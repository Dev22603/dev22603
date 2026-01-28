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
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="flex items-center gap-3 mb-4"
				>
					<div className="h-[1px] w-12 bg-[var(--color-primary)]" />
					<span className="font-mono text-sm text-[var(--color-primary)] tracking-wider uppercase">
						Writing
					</span>
				</motion.div>

				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className="text-3xl md:text-4xl lg:text-5xl mb-4"
					style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
				>
					Latest <span className="text-[var(--color-primary)]">Articles</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl"
				>
					Sharing insights from my engineering journey - practical guides, lessons learned,
					and deep dives into modern development practices.
				</motion.p>
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
