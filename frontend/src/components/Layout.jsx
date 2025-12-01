import { cn } from "@/lib/utils";

export function Layout({
	children,
	className,
	dotSize = 1,
	dotSpacing = 20,
}) {
	const backgroundColor = "var(--color-background-primary)";
	const dotColorLight = "var(--color-dot-light)";
	const dotColorDark = "var(--color-dot-dark)";

	return (
		<div
			className={cn(
				"relative min-h-screen w-full overflow-x-hidden",
				className
			)}
			style={{
				backgroundColor: backgroundColor,
			}}
		>
			{/* Fixed dot pattern background */}
			<div className="fixed left-0 top-0 bottom-0 right-0 z-0 pointer-events-none" style={{ right: '16px' }}>
				{/* Light mode dot pattern (hidden by default in dark mode) */}
				<div
					className="absolute inset-0 opacity-30"
					style={{
						backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
						backgroundImage: `radial-gradient(${dotColorLight} ${dotSize}px, transparent ${dotSize}px)`,
					}}
				/>

				{/* Dark mode dot pattern overlay */}
				<div
					className="absolute inset-0 opacity-50"
					style={{
						backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
						backgroundImage: `radial-gradient(${dotColorDark} ${dotSize}px, transparent ${dotSize}px)`,
					}}
				/>

				{/* Gradient fade overlay - creates depth */}
				<div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-[var(--color-background-primary)]/50 via-40% to-[var(--color-background-primary)] to-90%" />
			</div>

			{/* Main content container with max-width */}
			<div className="relative z-10 min-h-screen">
				<div className="max-w-5xl mx-auto px-6 py-24 sm:px-8 lg:px-12">
					{children}
				</div>
			</div>
		</div>
	);
}
