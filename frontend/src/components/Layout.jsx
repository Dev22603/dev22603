import { cn } from "@/lib/utils";

// interface LayoutProps {
//   children?: React.ReactNode;
//   className?: string;
//   containerClassName?: string;
//   dotColor?: {
//     light: string;
//     dark: string;
//   };
//   dotSize?: number;
//   dotSpacing?: number;
//   fadeToColor?: string;
//   fadePercentage?: number;
// }

export function Layout({
	children,
	className,
	containerClassName,
	dotColor = {
		light: "#d4d4d4",
		dark: "#232323",
	},
	dotSize = 1,
	dotSpacing = 20,
	fadeToColor = "bg-background",
	fadePercentage = 50,
}) {

	return (
		<div
			className={cn(
				"relative flex min-h-screen overflow-y-auto overflow-x-hidden w-screen max-w-none items-center justify-center",
				className
			)}
			style={{
				backgroundColor: fadeToColor.startsWith('#') ? fadeToColor : undefined,
			}}
		>
			{/* Dot pattern */}
			<div
				className={cn(
					"absolute inset-0",
					"[--dot-size:1px]",
					"[--dot-spacing:20px]",
					"[--dot-color-light:#d4d4d4]",
					"[--dot-color-dark:#404040]"
				)}
				style={{
					backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
					backgroundImage: `radial-gradient(
            ${dotColor.light}33 ${dotSize}px, 
            transparent ${dotSize}px
          )`,
				}}
			/>

			{/* Dark mode dot pattern */}
			<div
				className={cn(
					"absolute inset-0 hidden dark:block",
					"[--dot-size:1px]",
					"[--dot-spacing:20px]"
				)}
				style={{
					backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
					backgroundImage: `radial-gradient(
            ${dotColor.dark}80 ${dotSize}px, 
            transparent ${dotSize}px
          )`,
					opacity: 0.5,
				}}
			/>

			{/* Gradient overlay */}
			<div
				className={cn(
					`absolute inset-0 bg-gradient-to-b from-transparent from-0% via-${fadeToColor}/50 via-30% to-${fadeToColor} to-${fadePercentage}%`,
					containerClassName
				)}
			/>

			{children}
		</div>
	);
}

// Usage example:
/*
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout 
      dotColor={{ light: '#d4d4d4', dark: '#404040' }}
      dotSize={1}
      dotSpacing={20}
      fadeToColor="bg-background"
      fadePercentage={50}
    >
      Your content here
    </Layout>
  );
}
*/
