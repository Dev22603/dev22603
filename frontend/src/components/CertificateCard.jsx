import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CertificateCard({ certificate, index }) {
	const hasLink = !!certificate.link;

	const CardWrapper = hasLink ? motion.a : motion.div;
	const wrapperProps = hasLink
		? {
				href: certificate.link,
				target: "_blank",
				rel: "noopener noreferrer",
		  }
		: {};

	return (
		<CardWrapper
			{...wrapperProps}
			whileHover={hasLink ? { y: -4 } : {}}
			className={cn(
				"group relative block h-full",
				"bg-[var(--color-background-card)]",
				"border border-[var(--color-border-primary)]",
				"rounded-xl overflow-hidden",
				"transition-all duration-400",
				hasLink
					? "hover:border-[var(--color-border-secondary)] hover:shadow-[0_20px_50px_-20px_var(--color-primary-dim)] cursor-pointer"
					: "opacity-90"
			)}
		>
			{/* Hover gradient overlay */}
			{hasLink && (
				<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
					<div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dim)] via-transparent to-transparent" />
				</div>
			)}

			<div className="relative p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div className="flex items-center gap-4 flex-1 min-w-0">
					{/* Icon badge */}
					<div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[var(--color-primary-dim)] border border-[var(--color-primary)]/20 rounded-lg text-[var(--color-primary)]">
						<Award className="w-5 h-5" strokeWidth={1.5} />
					</div>

					<div className="flex-1 min-w-0">
						{/* Title */}
						<h3 className="text-base sm:text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors leading-snug mb-1">
							{certificate.title}
						</h3>
						{/* Issuer */}
						<p className="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)] font-semibold opacity-80">
							{certificate.issuer}
						</p>
					</div>
				</div>

				{/* Link Indicator */}
				{hasLink ? (
					<div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-primary)] font-medium sm:pl-4 sm:border-l sm:border-[var(--color-border-primary)] whitespace-nowrap mt-2 sm:mt-0">
						<span>Verify Credential</span>
						<ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
					</div>
				) : (
					<div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-text-tertiary)] sm:pl-4 sm:border-l sm:border-[var(--color-border-primary)] whitespace-nowrap mt-2 sm:mt-0">
						<span>Credential verified</span>
					</div>
				)}
			</div>
		</CardWrapper>
	);
}
