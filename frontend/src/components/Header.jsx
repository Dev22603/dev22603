import { useEffect } from "react";
import { cn } from "@/lib/utils";
import portfolioData from "../../portfolio.json";

export default function Header({ className }) {
	const { name } = portfolioData.personalInfo;

	const navLinks = [
		{ name: "Experience", shortcut: "e", sectionId: "experience" },
		{ name: "Projects", shortcut: "p", sectionId: "projects" },
		{ name: "Blogs", shortcut: "b", sectionId: "blogs" },
	];

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	// Keyboard shortcuts
	useEffect(() => {
		const handleKeyDown = (e) => {
			// Don't trigger if user is typing in an input
			if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

			const link = navLinks.find((l) => l.shortcut === e.key.toLowerCase());
			if (link) {
				e.preventDefault();
				scrollToSection(link.sectionId);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

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

				{/* Center Navigation */}
				<nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6 sm:gap-8" aria-label="Section navigation">
					{navLinks.map((link) => (
						<button
							key={link.name}
							onClick={() => scrollToSection(link.sectionId)}
							className={cn(
								"text-sm text-[var(--color-text-secondary)]",
								"hover:text-[var(--color-primary)]",
								"transition-colors duration-300",
								"flex items-center gap-1.5"
							)}
						>
							<span>{link.name}</span>
							<span className="text-xs font-mono text-[var(--color-text-tertiary)] opacity-60">
								[{link.shortcut}]
							</span>
						</button>
					))}
				</nav>

				{/* Empty div for flex spacing */}
				<div className="w-20"></div>
			</div>
		</header>
	);
}
