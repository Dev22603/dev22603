import { cn } from "@/lib/utils";

export function Layout({ children, className }) {
	return (
		<div
			className={cn(
				"relative min-h-screen w-full overflow-x-hidden",
				className
			)}
			style={{ backgroundColor: "var(--color-background-primary)" }}
		>
			{/* Criss-cross pattern background */}
			<div className="fixed inset-0 z-0 pointer-events-none" style={{ right: '16px' }}>
				{/* Primary criss-cross grid */}
				<div
					className="absolute inset-0 opacity-40"
					style={{
						backgroundImage: `
							linear-gradient(45deg, var(--color-grid-line) 1px, transparent 1px),
							linear-gradient(-45deg, var(--color-grid-line) 1px, transparent 1px)
						`,
						backgroundSize: '40px 40px',
					}}
				/>

				{/* Secondary larger grid overlay */}
				<div
					className="absolute inset-0 opacity-20"
					style={{
						backgroundImage: `
							linear-gradient(45deg, var(--color-grid-accent) 1px, transparent 1px),
							linear-gradient(-45deg, var(--color-grid-accent) 1px, transparent 1px)
						`,
						backgroundSize: '120px 120px',
					}}
				/>

				{/* Accent corner lines */}
				<div
					className="absolute top-0 left-0 w-full h-1"
					style={{
						background: 'linear-gradient(90deg, var(--color-primary), transparent 30%)',
						opacity: 0.3,
					}}
				/>
				<div
					className="absolute top-0 left-0 w-1 h-full"
					style={{
						background: 'linear-gradient(180deg, var(--color-primary), transparent 30%)',
						opacity: 0.3,
					}}
				/>

				{/* Radial gradient overlay for depth */}
				<div
					className="absolute inset-0"
					style={{
						background: `
							radial-gradient(ellipse 80% 50% at 50% 0%, var(--color-primary-dim) 0%, transparent 50%),
							radial-gradient(ellipse 60% 40% at 100% 100%, var(--color-accent-dim) 0%, transparent 40%)
						`,
						opacity: 0.3,
					}}
				/>

				{/* Bottom fade */}
				<div
					className="absolute inset-0"
					style={{
						background: 'linear-gradient(to top, var(--color-background-primary) 0%, transparent 20%)',
					}}
				/>
			</div>

			{/* Noise texture overlay */}
			<div className="noise-overlay" />

			{/* Main content container */}
			<div className="relative z-10 min-h-screen">
				<div className="max-w-6xl mx-auto px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
					{children}
				</div>
			</div>
		</div>
	);
}
