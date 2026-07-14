import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
			// /file/d/{id}/view?... → /file/d/{id}/preview
			url.pathname = url.pathname.replace(/\/view$/, "/preview");
			url.search = "";
			return url.toString();
		}
	} catch (_) {}
	return link;
}

function CertificateViewer({ certificate }) {
	const [iframeBlocked, setIframeBlocked] = useState(false);
	const [iframeLoaded, setIframeLoaded] = useState(false);

	// Show local PDF embed when preview is set to "pdf"
	if (certificate.preview === "pdf" && certificate.pdfPath) {
		return (
			<div
				className="relative overflow-hidden bg-[var(--color-background-secondary)] border-t border-[var(--color-border-primary)]"
				style={{ height: "600px" }}
			>
				{/* Mini browser chrome bar */}
				<div className="flex items-center justify-between px-3 py-2 bg-[var(--color-background-tertiary)] border-b border-[var(--color-border-primary)]">
					<div className="flex items-center gap-1.5">
						<span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-secondary)]" />
						<span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-secondary)]" />
						<span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]/30" />
					</div>
					<span className="text-[10px] font-mono text-[var(--color-text-muted)] truncate mx-3 max-w-[220px]">
						{certificate.link}
					</span>
					<a
						href={certificate.pdfPath}
						target="_blank"
						rel="noopener noreferrer"
						onClick={(e) => e.stopPropagation()}
						className="flex items-center gap-1 text-[10px] font-mono text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors flex-shrink-0"
					>
						<ExternalLink className="w-3 h-3" strokeWidth={1.5} />
						<span className="hidden sm:inline">open</span>
					</a>
				</div>

				{/* PDF embed */}
				<object
					data={certificate.pdfPath}
					type="application/pdf"
					className="w-full border-0"
					style={{ height: "calc(100% - 37px)" }}
					onClick={(e) => e.stopPropagation()}
				>
					{/* Fallback if browser can't render PDF inline */}
					<div className="flex flex-col items-center justify-center h-full gap-4 p-6">
						<p className="text-sm text-[var(--color-text-secondary)]">Your browser cannot display the PDF inline.</p>
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

	const handleLoad = () => {
		setIframeLoaded(true);
	};

	return (
		<div
			className="relative overflow-hidden bg-[var(--color-background-secondary)] border-t border-[var(--color-border-primary)]"
			style={{ height: "600px" }}
		>
			{/* Mini browser chrome bar */}
			<div className="flex items-center justify-between px-3 py-2 bg-[var(--color-background-tertiary)] border-b border-[var(--color-border-primary)]">
				<div className="flex items-center gap-1.5">
					<span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-secondary)]" />
					<span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-secondary)]" />
					<span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]/30" />
				</div>
				<span className="text-[10px] font-mono text-[var(--color-text-muted)] truncate mx-3 max-w-[220px]">
					{certificate.link}
				</span>
				<a
					href={certificate.link}
					target="_blank"
					rel="noopener noreferrer"
					onClick={(e) => e.stopPropagation()}
					className="flex items-center gap-1 text-[10px] font-mono text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors flex-shrink-0"
				>
					<ExternalLink className="w-3 h-3" strokeWidth={1.5} />
					<span className="hidden sm:inline">open</span>
				</a>
			</div>

			{/* iFrame area */}
			<div className="relative" style={{ height: "calc(100% - 37px)" }}>
				{!iframeLoaded && !iframeBlocked && (
					<div className="absolute inset-0 flex items-center justify-center bg-[var(--color-background-secondary)] z-10">
						<div className="flex flex-col items-center gap-3">
							<div
								className="w-5 h-5 rounded-full border-2 border-[var(--color-primary)]/30 border-t-[var(--color-primary)]"
								style={{ animation: "spin 0.8s linear infinite" }}
							/>
							<span className="text-[10px] font-mono text-[var(--color-text-muted)]">Loading certificate…</span>
						</div>
					</div>
				)}

				{iframeBlocked ? (
					/* Blocked fallback */
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
								View Certificate
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
						onLoad={handleLoad}
						onError={() => setIframeBlocked(true)}
					/>
				)}
			</div>
		</div>
	);
}

export default function CertificateCard({ certificate, index }) {
	const [isOpen, setIsOpen] = useState(false);
	const hasLink = !!certificate.link;

	return (
		<motion.div
			layout
			onClick={() => setIsOpen((prev) => !prev)}
			className={cn(
				"group relative cursor-pointer select-none",
				"bg-[var(--color-background-card)]",
				"border border-[var(--color-border-primary)]",
				"rounded-xl overflow-hidden",
				"transition-colors duration-300",
				isOpen
					? "border-[var(--color-primary)]/40 shadow-[0_0_30px_-10px_var(--color-primary-dim)]"
					: "hover:border-[var(--color-border-secondary)]"
			)}
		>
			{/* Collapsed Header Row */}
			<div className="relative flex items-center gap-3 px-4 py-3.5">
				{/* Icon */}
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

				{/* Text Content */}
				<div className="flex-1 min-w-0">
					<p
						className={cn(
							"text-sm font-medium leading-snug truncate transition-colors duration-300",
							isOpen
								? "text-[var(--color-primary)]"
								: "text-[var(--color-text-primary)]"
						)}
					>
						{certificate.title}
					</p>
					<p className="text-xs font-mono text-[var(--color-text-tertiary)] mt-0.5 truncate">
						{certificate.issuer}
					</p>
				</div>

				{/* Right indicator */}
				<div className="flex items-center gap-2 flex-shrink-0 ml-2">
					{hasLink ? (
						<span className="hidden sm:block text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-muted)] group-hover:text-[var(--color-text-tertiary)] transition-colors">
							{isOpen ? "close" : "preview"}
						</span>
					) : (
						<span className="hidden sm:flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-muted)]">
							<Shield className="w-3 h-3" strokeWidth={1.5} />
							no link
						</span>
					)}
					<motion.div
						animate={{ rotate: isOpen ? 180 : 0 }}
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

			{/* Expanding Drawer */}
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="drawer"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
						style={{ overflow: "hidden" }}
					>
						{/* Separator */}
						<div className="mx-4 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent" />

						<div className="pb-4">
							{hasLink ? (
								<CertificateViewer certificate={certificate} />
							) : (
								/* No-link fallback */
								<div className="mx-4 flex flex-col items-center justify-center gap-3 py-8 rounded-lg bg-[var(--color-background-secondary)] border border-dashed border-[var(--color-border-primary)]">
									<div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-background-tertiary)] border border-[var(--color-border-secondary)]">
										<Shield className="w-5 h-5 text-[var(--color-text-muted)]" strokeWidth={1.5} />
									</div>
									<div className="text-center">
										<p className="text-sm font-medium text-[var(--color-text-secondary)]">
											No verification link available
										</p>
										<p className="text-xs font-mono text-[var(--color-text-muted)] mt-1">
											Certificate not publicly accessible
										</p>
									</div>
								</div>
							)}

							{/* Verify Credentials button */}
							{certificate.verifyUrl && (
								<div className="mx-4 mt-3 flex justify-end">
									<a
										href={certificate.verifyUrl}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
										className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary-dim)] text-[var(--color-primary)] text-xs font-mono hover:bg-[var(--color-primary)]/20 transition-colors"
									>
										<Shield className="w-3.5 h-3.5" strokeWidth={1.5} />
										Verify Credentials
										<ExternalLink className="w-3 h-3" strokeWidth={1.5} />
									</a>
								</div>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
