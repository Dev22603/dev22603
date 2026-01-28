import React from "react";
import { motion } from "framer-motion";
import { Twitter, Github, Mail, Linkedin, ArrowUp } from "lucide-react";
import portfolioData from "../../portfolio.json";

export default function Footer() {
	const { name, email, socialLinks } = portfolioData.personalInfo;
	const currentYear = new Date().getFullYear();

	const socialIcons = [
		{ name: "GitHub", icon: Github, href: socialLinks.github },
		{ name: "LinkedIn", icon: Linkedin, href: socialLinks.linkedin },
		{ name: "Twitter", icon: Twitter, href: socialLinks.twitter },
		{ name: "Email", icon: Mail, href: `mailto:${email}` },
	];

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="relative z-20 w-full border-t border-[var(--color-border-primary)] bg-[var(--color-background-primary)]">
			{/* Top accent line */}
			<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary-dim)] to-transparent" />

			<div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 lg:px-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
					{/* Brand Column */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<span className="text-[var(--color-primary)] font-mono text-sm opacity-60">[</span>
							<span className="text-lg font-semibold text-[var(--color-text-primary)]">
								{name.split(' ')[0]}
								<span className="text-[var(--color-primary)]">.</span>
							</span>
							<span className="text-[var(--color-primary)] font-mono text-sm opacity-60">]</span>
						</div>
						<p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed">
							Full Stack Engineer building production-grade applications
							with a focus on backend architecture and AI systems.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-sm font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-4">
							Quick Links
						</h4>
						<nav className="flex flex-col gap-2">
							{["Experience", "Projects", "Skills", "Blogs"].map((link) => (
								<a
									key={link}
									href={`#${link.toLowerCase()}`}
									className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
								>
									{link}
								</a>
							))}
						</nav>
					</div>

					{/* Connect */}
					<div>
						<h4 className="text-sm font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-4">
							Connect
						</h4>
						<div className="flex items-center gap-2">
							{socialIcons.map((social) => {
								const Icon = social.icon;
								return (
									<a
										key={social.name}
										href={social.href}
										target={social.name !== "Email" ? "_blank" : undefined}
										rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
										aria-label={`Visit my ${social.name} profile`}
										className="p-2.5 text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-dim)] rounded-lg transition-all duration-300"
									>
										<Icon className="w-5 h-5" strokeWidth={1.5} />
									</a>
								);
							})}
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-12 pt-8 border-t border-[var(--color-border-primary)] flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-xs text-[var(--color-text-muted)] font-mono">
						&copy; {currentYear} {name}. Crafted with precision.
					</p>

					<button
						onClick={scrollToTop}
						className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors group"
					>
						<span className="font-mono">Back to top</span>
						<ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
					</button>
				</div>
			</div>
		</footer>
	);
}
