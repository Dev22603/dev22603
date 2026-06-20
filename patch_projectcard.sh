#!/bin/bash
cat << 'DIFF' > patch.diff
--- frontend/src/components/ProjectCard.jsx
+++ frontend/src/components/ProjectCard.jsx
@@ -34,13 +34,25 @@
		<motion.div
			whileHover={{ y: -4 }}
			whileTap={{ scale: 0.99 }}
			transition={{ duration: 0.3 }}
			onClick={handleCardClick}
+			role="button"
+			tabIndex={0}
+			onKeyDown={(e) => {
+				if (e.key === 'Enter') {
+					handleCardClick();
+				} else if (e.key === ' ') {
+					e.preventDefault();
+					handleCardClick();
+				}
+			}}
			className={cn(
				"group relative cursor-pointer h-full",
				"bg-[var(--color-background-card)]",
				"border border-[var(--color-border-primary)]",
				"rounded-xl overflow-hidden",
				"transition-all duration-400",
				"hover:border-[var(--color-border-secondary)]",
				"hover:shadow-[0_20px_50px_-20px_var(--color-primary-dim)]",
+				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background-primary)]",
				featured && "md:flex md:items-stretch"
			)}
DIFF
patch -p0 < patch.diff
