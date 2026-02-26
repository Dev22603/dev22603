import React from "react";
import { motion } from "framer-motion";
import { Twitter, Github, Mail, Linkedin, FileText, MapPin, ArrowRight } from "lucide-react";
import portfolioData from "../../portfolio.json";

export default function Hero() {
	const { name, role, location, bio, profileImage, email, socialLinks } =
		portfolioData.personalInfo;

	const socialIcons = [
		{ name: "GitHub", icon: Github, href: socialLinks.github },
		{ name: "LinkedIn", icon: Linkedin, href: socialLinks.linkedin },
		{ name: "Twitter", icon: Twitter, href: socialLinks.twitter },
		{ name: "Email", icon: Mail, href: `mailto:${email}` },
	];

	return (
		<section className="w-full mb-24 sm:mb-32 md:mb-40">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
				{/* Left side - Text content */}
				<div className="lg:col-span-7 order-2 lg:order-1">
					{/* Eyebrow text */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="flex items-center gap-3 mb-6"
					>
						<div className="h-[1px] w-12 bg-[var(--color-primary)]" />
						<span className="font-mono text-sm text-[var(--color-primary)] tracking-wider uppercase">
							{role}
						</span>
					</motion.div>

					{/* Name */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-6 tracking-tight"
						style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
					>
						<span className="text-[var(--color-text-primary)]">Hello, I'm </span>
						<span className="relative inline-block">
							<span className="text-[var(--color-primary)] glow-text">{name.split(' ')[0]}</span>
							<motion.span
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[var(--color-primary)] origin-left"
							/>
						</span>
					</motion.h1>

					{/* Location */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex items-center gap-2 mb-8"
					>
						<MapPin className="w-4 h-4 text-[var(--color-text-tertiary)]" />
						<span className="text-[var(--color-text-tertiary)] text-sm font-mono">
							{location}
						</span>
					</motion.div>

					{/* Bio */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-xl"
					>
						{bio}
					</motion.p>

					{/* CTA Button */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="flex flex-wrap items-center gap-4 mb-10"
					>
						{/* Primary CTA */}
						<a
							href="https://drive.google.com/file/d/1sj2ZiEKl58EWpKyFwA8T7Sp37PWbu1h8"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--color-primary)] font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_var(--color-primary-dim)]"
							style={{ color: '#050a0e' }}
						>
							<FileText className="w-5 h-5" strokeWidth={2} />
							<span>View Resume</span>
							<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
							{/* Shine effect */}
							<span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
						</a>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="flex items-center gap-1"
					>
						{socialIcons.map((social, index) => {
							const Icon = social.icon;
							return (
								<motion.a
									key={social.name}
									href={social.href}
									target={social.name !== "Email" ? "_blank" : undefined}
									rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
									className="p-3 text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-dim)] rounded-lg transition-all duration-300"
									aria-label={`Visit my ${social.name} profile`}
								>
									<Icon className="w-5 h-5" strokeWidth={1.5} />
								</motion.a>
							);
						})}
					</motion.div>
				</div>

				{/* Right side - Profile Image */}
				<div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8 }}
						className="relative"
					>
						{/* Decorative frame */}
						<div className="absolute -inset-4 border border-[var(--color-border-primary)] rounded-2xl transform rotate-3" />
						<div className="absolute -inset-4 border border-[var(--color-primary-dim)] rounded-2xl transform -rotate-3" />

						{/* Image container */}
						<div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-[var(--color-border-secondary)]">
							<img
								src={profileImage}
								alt={`${name} - ${role}`}
								className="w-full h-full object-cover"
							/>
							{/* Overlay gradient */}
							<div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background-primary)]/50 to-transparent" />
						</div>

						{/* Corner accents */}
						<div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-[var(--color-primary)]" />
						<div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-[var(--color-primary)]" />
						<div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-[var(--color-primary)]" />
						<div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-[var(--color-primary)]" />

						{/* Floating status badge */}
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.8 }}
							className="absolute -bottom-4 -right-4 px-4 py-2 bg-[var(--color-background-card)] border border-[var(--color-border-secondary)] rounded-full flex items-center gap-2"
						>
							<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
							<span className="text-xs font-mono text-[var(--color-text-secondary)]">
								Available for work
							</span>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
