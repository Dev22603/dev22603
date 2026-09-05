import { Layout } from "@/components/Layout";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import BlogsSection from "@/components/BlogsSection";
import portfolioData from "@/data/portfolio.json";

export default function Home() {
	const { personalInfo, education } = portfolioData;
	const showCertificates = portfolioData.settings?.showCertificates !== false;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: personalInfo.name,
		jobTitle: personalInfo.role,
		url: "https://dev-bachani.xyz",
		image: `https://dev-bachani.xyz${personalInfo.profileImage}`,
		email: personalInfo.email,
		address: {
			"@type": "PostalAddress",
			addressLocality: personalInfo.location,
		},
		sameAs: Object.values(personalInfo.socialLinks).filter(
			(link) => typeof link === "string" && link.startsWith("http")
		),
		alumniOf: education.map((school) => ({
			"@type": "CollegeOrUniversity",
			name: school.institution,
		})),
	};

	return (
		<Layout dotSize={1} dotSpacing={20}>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<div className="w-full">
				<Hero />

				<section id="skills">
					<SkillsSection />
				</section>

				<section id="experience">
					<ExperienceSection />
				</section>

				<section id="projects">
					<ProjectsSection />
				</section>

				{showCertificates && <CertificatesSection />}

				<BlogsSection />
			</div>
		</Layout>
	);
}
