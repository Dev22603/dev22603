import React from "react";
import { Twitter, Github, Mail, Calendar } from "lucide-react";
import portfolioData from "../../portfolio.json";

export default function Hero() {
	const { name, role, location, bio, profileImage, email, socialLinks } =
		portfolioData.personalInfo;

	const socialIcons = [
		{
			name: "Twitter",
			icon: Twitter,
			href: socialLinks.twitter,
			ariaLabel: "Visit my Twitter profile",
		},
		{
			name: "Blog",
			icon: Calendar,
			href: socialLinks.blog,
			ariaLabel: "Read my blog",
		},
		{
			name: "Email",
			icon: Mail,
			href: `mailto:${email}`,
			ariaLabel: "Send me an email",
		},
		{
			name: "GitHub",
			icon: Github,
			href: socialLinks.github,
			ariaLabel: "Visit my GitHub profile",
		},
	];

	return (
		<section className="w-full mb-24 md:mb-32">
			<div className="flex flex-col items-center text-center">
				{/* Profile Image */}
				<div className="mb-6">
					<img
						src={profileImage}
						alt={`${name} - ${role}`}
						className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-[var(--color-border-primary)] shadow-lg"
					/>
				</div>

				{/* Name Heading */}
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-3">
					Hi, I'm {name.split(" ")[0]}
				</h1>

				{/* Subtitle: Location and Role */}
				<p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-6">
					{location} | {role}
				</p>

				{/* Social Links - Mobile/Tablet visible */}
				<div className="flex items-center gap-4 mb-8 md:hidden">
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
								className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
							>
								<Icon className="w-5 h-5" strokeWidth={2} />
							</a>
						);
					})}
				</div>

				{/* Bio Paragraph */}
				<div className="max-w-2xl mx-auto px-4">
					<p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
						{bio}
					</p>
				</div>
			</div>
		</section>
	);
}
