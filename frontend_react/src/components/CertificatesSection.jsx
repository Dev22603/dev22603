import React from "react";
import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import portfolioData from "../../portfolio.json";

export default function CertificatesSection() {
	const certificates = portfolioData.certificates.filter((cert) => cert.show !== false); // updated

	return (
		<section id="certificates" className="w-full mb-24 md:mb-32">
			{/* Section Header */}
			<div className="mb-12">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl lg:text-5xl"
					style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
				>
					<span className="text-[var(--color-primary)]">Certifications</span>
				</motion.h2>
			</div>

			{/* Certificates Grid */}
			{certificates && certificates.length > 0 ? (
				<div className="grid grid-cols-1 gap-4 w-full">
					{certificates.map((certificate, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<CertificateCard certificate={certificate} index={index} />
						</motion.div>
					))}
				</div>
			) : (
				<div className="text-center py-16">
					<p className="text-[var(--color-text-secondary)]">
						No certifications added yet.
					</p>
				</div>
			)}
		</section>
	);
}
