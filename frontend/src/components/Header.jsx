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
				"w-full z-50 backdrop-blur-md border-b",
				"bg-[var(--color-background-primary)]/90",
				"border-[var(--color-border-primary)]",
				className
			)}
		>
			{/* Accent line at top */}
			<div
				className="absolute top-0 left-0 right-0 h-[1px]"
				style={{
					background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-primary))',
					opacity: 0.5,
				}}
			/>

			<div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between gap-4">
				{/* Name/Logo with decorative brackets */}
				<div className="flex items-center gap-2">
					<span className="text-[var(--color-primary)] font-mono text-sm opacity-60">[</span>
					<span className="text-base sm:text-lg font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-all duration-300 cursor-pointer tracking-tight">
						{name.split(' ')[0]}
						<span className="text-[var(--color-primary)]">.</span>
					</span>
					<span className="text-[var(--color-primary)] font-mono text-sm opacity-60">]</span>
				</div>

				{/* Social Links */}
				<nav className="flex items-center gap-1 sm:gap-2" aria-label="Social media links">
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
								className={cn(
									"relative p-2.5 rounded-lg",
									"text-[var(--color-text-tertiary)]",
									"hover:text-[var(--color-primary)]",
									"hover:bg-[var(--color-primary-dim)]",
									"transition-all duration-300",
									"group"
								)}
							>
								<Icon className="w-5 h-5" strokeWidth={1.5} />
								{/* Hover glow effect */}
								<span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
									style={{
										boxShadow: '0 0 20px var(--color-primary-dim)',
									}}
								/>
							</a>
						);
					})}
				</nav>
			</div>
		</header>
	);
}
