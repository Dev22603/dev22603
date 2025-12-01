import React from "react";
import { Twitter, Github, Mail, Linkedin } from "lucide-react";
import portfolioData from "../../portfolio.json";

export default function Footer() {
	const { name, email, socialLinks } = portfolioData.personalInfo;
	const currentYear = new Date().getFullYear();

	const socialIcons = [
		{
			name: "GitHub",
			icon: Github,
			href: socialLinks.github,
			ariaLabel: "Visit my GitHub profile",
		},
		{
			name: "LinkedIn",
			icon: Linkedin,
			href: socialLinks.linkedin,
			ariaLabel: "Visit my LinkedIn profile",
		},
		{
			name: "Twitter",
			icon: Twitter,
			href: socialLinks.twitter,
			ariaLabel: "Visit my Twitter profile",
		},
		{
			name: "Email",
			icon: Mail,
			href: `mailto:${email}`,
			ariaLabel: "Send me an email",
		},
	];

	return (
		<footer className="relative z-20 w-full border-t border-[var(--color-border-primary)] bg-[var(--color-background-primary)] mt-24 md:mt-32">
			<div className="w-full px-6 py-6 sm:px-8 lg:px-12">
				{/* Footer Content */}
				<div className="flex flex-col items-center space-y-3">
					{/* Name */}
					<div className="text-center">
						<h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
							{name}
						</h3>
						<p className="text-sm text-[var(--color-text-secondary)]">
							Full Stack Engineer · Blockchain Developer
						</p>
					</div>

					{/* Social Links */}
					<div className="flex items-center gap-6">
						{socialIcons.map((social) => {
							const Icon = social.icon;
							return (
								<a
									key={social.name}
									href={social.href}
									target={social.name !== "Email" ? "_blank" : undefined}
									rel={
										social.name !== "Email" ? "noopener noreferrer" : undefined
									}
									aria-label={social.ariaLabel}
									className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200"
								>
									<Icon className="w-5 h-5" strokeWidth={2} />
								</a>
							);
						})}
					</div>

					{/* Divider */}
					<div className="w-full max-w-xs border-t border-[var(--color-border-primary)]" />

					{/* Copyright */}
					<div className="text-center">
						<p className="text-sm text-[var(--color-text-tertiary)]">
							© {currentYear} {name}. All rights reserved.
						</p>
						<p className="text-xs text-[var(--color-text-tertiary)] mt-1">
							Built with React, Tailwind CSS, and Framer Motion
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
