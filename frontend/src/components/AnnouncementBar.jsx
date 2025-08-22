import React, { useState } from "react";
import { X } from "lucide-react"; // or any close icon

export function AnnouncementBar() {
	const [visible, setVisible] = useState(true);

	if (!visible) return null;

	return (
		<div className="fixed top-0 left-0 right-0 w-full bg-[#0a0a0a] text-[#80e172] text-center px-4 py-2 z-50">
			<p className="text-sm font-medium">
				Would you like to collab with me or hire me?
			</p>
			<button
				onClick={() => setVisible(false)}
				className=" absolute right-5 top-1/2 -translate-y-1/2 text-[#80e172] hover:text-[#80e172] "
			>
				<X className="h-4 w-4 hover:h-4.5 hover:w-4.5 hover:cursor-pointer"/>
			</button>
		</div>
	);
}
