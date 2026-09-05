import type { Metadata, Viewport } from "next";
import { Sora, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import portfolioData from "@/data/portfolio.json";
import "./globals.css";

const sora = Sora({
	variable: "--font-sora",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
	variable: "--font-instrument-serif",
	subsets: ["latin"],
	weight: ["400"],
	style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
	weight: ["400", "500", "600"],
});

const title = "Dev Bachani | Full Stack Engineer";
const description =
	"Dev Bachani is a Full Stack Engineer building production-grade web applications and AI systems — Node.js, Next.js, React, and PostgreSQL.";
const siteUrl = "https://dev-bachani.xyz";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title,
	description,
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		url: "/",
		title,
		description,
		siteName: portfolioData.personalInfo.name,
		images: ["/preview.png"],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: ["/preview.png"],
	},
	robots: { index: true, follow: true },
};

export const viewport: Viewport = {
	themeColor: "#050a0e",
	colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	const currentYear = new Date().getFullYear();

	return (
		<html
			lang="en"
			className={`${sora.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
		>
			<body>
				<Header />
				{children}
				<Footer currentYear={currentYear} />
				<ScrollToTop />
			</body>
		</html>
	);
}
