import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Award, ChevronDown, ExternalLink, Shield, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Converts a certificate link to its embeddable iframe URL when possible.
 * - HackerRank: /certificates/{id} → /certificates/iframe/{id}
 * - Google Drive: /file/d/{id}/view → /file/d/{id}/preview
 */
function getEmbedUrl(link) {
	try {
		const url = new URL(link);
		if (url.hostname.includes("hackerrank.com")) {
			url.pathname = url.pathname.replace(
				/^\/certificates\/(?!iframe\/)(.+)$/,
				"/certificates/iframe/$1"
			);
			return url.toString();
		}
		if (url.hostname.includes("drive.google.com")) {
			url.pathname = url.pathname.replace(/\/view$/, "/preview");
			url.search = "";
			return url.toString();
		}
	} catch (_) {}
	return link;
}



/** The viewer panel rendered when a card is expanded */
function CertificateViewer({ certificate }) {
	const [iframeBlocked, setIframeBlocked] = useState(false);
	const [iframeLoaded, setIframeLoaded] = useState(false);

	// Local PDF embed path
	if (certificate.preview === "pdf" && certificate.pdfPath) {
		return (
			<div className="relative overflow-hidden" style={{ height: "560px" }}>
				<object
					data={certificate.pdfPath}
					type="application/pdf"
					className="w-full h-full border-0"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="flex flex-col items-center justify-center h-full gap-4 p-6 bg-[var(--color-background-secondary)]">
						<p className="text-sm text-[var(--color-text-secondary)]">
							Your browser cannot display this PDF inline.
						</p>
						<a
							href={certificate.pdfPath}
							target="_blank"
							rel="noopener noreferrer"
							onClick={(e) => e.stopPropagation()}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-dim)] border border-[var(--color-primary)]/30 rounded-lg text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 transition-colors"
						>
							<ExternalLink className="w-4 h-4" strokeWidth={1.5} />
							Open PDF
						</a>
					</div>
				</object>
			</div>
		);
	}

	const embedUrl = getEmbedUrl(certificate.link);

	return (
		<div className="relative overflow-hidden" style={{ height: "560px" }}>
			{/* Loading shimmer */}
			{!iframeLoaded && !iframeBlocked && (
				<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[var(--color-background-secondary)] z-10">
					<div
						className="w-5 h-5 rounded-full border-2 border-[var(--color-primary)]/20 border-t-[var(--color-primary)]"
						style={{ animation: "spin 0.9s linear infinite" }}
					/>
					<span className="text-[11px] font-mono text-[var(--color-text-muted)]">
						loading certificate
					</span>
				</div>
			)}

			{iframeBlocked ? (
				<div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[var(--color-background-secondary)] p-6">
					<div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-background-tertiary)] border border-[var(--color-border-secondary)]">
						<AlertCircle className="w-5 h-5 text-[var(--color-text-muted)]" strokeWidth={1.5} />
					</div>
					<div className="text-center">
						<p className="text-sm font-medium text-[var(--color-text-secondary)]">
							Cannot embed this certificate
						</p>
						<p className="text-xs font-mono text-[var(--color-text-muted)] mt-1 mb-4">
							The issuer blocks embedding for security
						</p>
						<a
							href={certificate.link}
							target="_blank"
							rel="noopener noreferrer"
							onClick={(e) => e.stopPropagation()}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-dim)] border border-[var(--color-primary)]/30 rounded-lg text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 transition-colors"
						>
							<ExternalLink className="w-4 h-4" strokeWidth={1.5} />
							Open Certificate
						</a>
					</div>
				</div>
			) : (
				<iframe
					src={embedUrl}
					title={certificate.title}
					className="w-full h-full border-0"
					loading="lazy"
					sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
					onClick={(e) => e.stopPropagation()}
					onLoad={() => setIframeLoaded(true)}
					onError={() => setIframeBlocked(true)}
				/>
			)}
		</div>
	);
}

export default function CertificateCard({ certificate, index }) {
	const [isOpen, setIsOpen] = useState(false);
	const reduce = useReducedMotion();
	const hasLink = !!certificate.link;
	const hasVerify = !!certificate.verifyUrl;

	return (
		<motion.div
			layout
			onClick={() => setIsOpen((prev) => !prev)}
			className={cn(
				"group relative cursor-pointer select-none",
				"bg-[var(--color-background-card)]",
				"border rounded-xl overflow-hidden",
				"transition-colors duration-300",
				isOpen
					? "border-[var(--color-primary)]/35 shadow-[0_0_40px_-12px_var(--color-primary-dim)]"
					: "border-[var(--color-border-primary)] hover:border-[var(--color-border-secondary)]"
			)}
		>
			{/* ── Collapsed Header ───────────────────────────────────── */}
			<div className="relative flex items-center gap-3 px-4 py-4">
				{/* Award icon */}
				<div
					className={cn(
						"flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-300",
						isOpen
							? "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"
							: "bg-[var(--color-background-tertiary)] text-[var(--color-text-tertiary)] group-hover:text-[var(--color-primary)]/70"
					)}
				>
					<Award className="w-4 h-4" strokeWidth={1.5} />
				</div>

				{/* Text block */}
				<div className="flex-1 min-w-0">
					{/* Certificate title — primary info */}
					<p
						className={cn(
							"text-sm font-medium leading-snug truncate transition-colors duration-300",
							isOpen ? "text-[var(--color-primary)]" : "text-[var(--color-text-primary)]"
						)}
					>
						{certificate.title}
					</p>

					{/* Issuer — secondary, mono */}
					<p className="text-[11px] font-mono text-[var(--color-text-muted)] mt-0.5 truncate">
						{certificate.issuer}
					</p>
				</div>

				{/* Right side: verify badge + chevron */}
				<div className="flex items-center gap-2.5 flex-shrink-0 ml-1">
					{/* Verify badge — signals credibility on collapsed state */}
					{hasVerify && (
						<span
							className={cn(
								"hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono",
								"border transition-colors duration-300",
								isOpen
									? "bg-[var(--color-primary)]/10 border-[var(--color-primary)]/30 text-[var(--color-primary)]"
									: "bg-[var(--color-background-tertiary)] border-[var(--color-border-secondary)] text-[var(--color-text-muted)]"
							)}
						>
							<Shield className="w-2.5 h-2.5" strokeWidth={2} />
							verified
						</span>
					)}

					{/* Chevron */}
					<motion.div
						animate={reduce ? {} : { rotate: isOpen ? 180 : 0 }}
						transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
						className={cn(
							"w-5 h-5 flex items-center justify-center transition-colors duration-300",
							isOpen
								? "text-[var(--color-primary)]"
								: "text-[var(--color-text-muted)] group-hover:text-[var(--color-text-tertiary)]"
						)}
					>
						<ChevronDown className="w-4 h-4" strokeWidth={1.5} />
					</motion.div>
				</div>
			</div>

			{/* ── Expanding Drawer ────────────────────────────────────── */}
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="drawer"
						initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
						transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
						style={{ overflow: "hidden" }}
					>
						{/* Gradient separator */}
						<div className="mx-4 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/25 to-transparent" />

						{hasLink ? (
							<>
								{/* ── Credential meta strip ─────────────────────────────
								    Priority: issuer authority + verify CTA *above* the iframe
								    so the user confirms credibility before seeing the doc. */}
								<div className="flex items-center justify-between gap-3 px-4 py-3">
									{/* Issuer + credential label */}
									<div className="flex items-center gap-2 min-w-0">
										<Award className="w-3.5 h-3.5 flex-shrink-0 text-[var(--color-text-muted)]" strokeWidth={1.5} />
										<span className="text-[11px] font-mono text-[var(--color-text-muted)] truncate">
											{certificate.issuer}
										</span>
									</div>

									{/* Action cluster */}
									<div className="flex items-center gap-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
										{/* Open preview in new tab */}
										<a
											href={certificate.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[var(--color-border-secondary)] bg-[var(--color-background-tertiary)] text-[10px] font-mono text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] hover:border-[var(--color-border-secondary)] transition-colors"
										>
											<ExternalLink className="w-3 h-3" strokeWidth={1.5} />
											open
										</a>

										{/* Verify credentials — primary action */}
										{hasVerify && (
											<a
												href={certificate.verifyUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[var(--color-primary)]/30 bg-[var(--color-primary-dim)] text-[10px] font-mono text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 transition-colors"
											>
												<Shield className="w-3 h-3" strokeWidth={1.5} />
												verify
											</a>
										)}
									</div>
								</div>

								{/* Thin inner border before iframe */}
								<div className="mx-4 h-px bg-[var(--color-border-primary)]" />

								{/* Certificate viewer */}
								<CertificateViewer certificate={certificate} />
							</>
						) : (
							/* No-link fallback */
							<div className="mx-4 my-4 flex flex-col items-center justify-center gap-3 py-10 rounded-lg bg-[var(--color-background-secondary)] border border-dashed border-[var(--color-border-primary)]">
								<div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--color-background-tertiary)] border border-[var(--color-border-secondary)]">
									<Shield className="w-4 h-4 text-[var(--color-text-muted)]" strokeWidth={1.5} />
								</div>
								<div className="text-center">
									<p className="text-sm font-medium text-[var(--color-text-secondary)]">
										No public link available
									</p>
									<p className="text-[11px] font-mono text-[var(--color-text-muted)] mt-1">
										Certificate not publicly accessible
									</p>
								</div>
							</div>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
