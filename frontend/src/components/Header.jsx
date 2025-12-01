import { Twitter, Github, Mail, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import portfolioData from "../../portfolio.json";

export default function Header({ className }) {
	const { name, socialLinks } = portfolioData.personalInfo;

	const handleBlogClick = (e) => {
		e.preventDefault();
		const blogsSection = document.getElementById("blogs");
		if (blogsSection) {
			blogsSection.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

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
			href: "#blogs",
			ariaLabel: "Read my blog",
			onClick: handleBlogClick,
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
				"w-full z-50 backdrop-blur-sm bg-[var(--color-background-primary)]/80 border-b border-[var(--color-border-primary)]",
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
								target={social.name !== "Email" && social.name !== "Blog" ? "_blank" : undefined}
								rel={social.name !== "Email" && social.name !== "Blog" ? "noopener noreferrer" : undefined}
								onClick={social.onClick}
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
