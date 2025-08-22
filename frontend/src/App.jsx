import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
// import Experience from "@/pages/Experience";
// import Projects from "@/pages/Projects";
// import Contact from "@/pages/Contact";
// import GuestBook from "@/pages/GuestBook";
import { Layout } from "@/components/Layout";

export default function App() {
    const DARK_BG = "#0d0b0f";

	return (
		<BrowserRouter>
			<Layout
				dotColor={{ light: "#d4d4d4", dark: "#404040" }}
				dotSize={1}
				dotSpacing={20}
				fadeToColor={DARK_BG}
				fadePercentage={10}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/experience" element={<Experience />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/guestbook" element={<GuestBook/>} /> */}
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}
