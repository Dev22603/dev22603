import { Twitter, Github, Mail, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import portfolioData from "../../portfolio.json";

export default function Header({ className }) {
	const { name, socialLinks } = portfolioData.personalInfo;

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
			href: `mailto:${portfolioData.personalInfo.email}`,
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
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[var(--color-background-primary)]/80 border-b border-[var(--color-border-primary)]",
				className
			)}
		>
			<div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
				{/* Name/Logo */}
				<div className="flex items-center">
					<span className="text-lg font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors cursor-pointer">
						{name}
					</span>
				</div>

				{/* Social Links */}
				<nav className="flex items-center gap-4" aria-label="Social media links">
					{socialIcons.map((social) => {
						const Icon = social.icon;
						return (
							<a
								key={social.name}
								href={social.href}
								target={social.name !== "Email" ? "_blank" : undefined}
								rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
								aria-label={social.ariaLabel}
								className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
							>
								<Icon className="w-5 h-5" strokeWidth={2} />
							</a>
						);
					})}
				</nav>
			</div>
		</header>
	);
}
